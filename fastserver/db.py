import os
from typing import Callable
from dotenv import load_dotenv
from sqlalchemy import create_engine, text
from sqlalchemy.orm import Session
from sqlalchemy.engine import Engine

from models import *


class IDatabaseService:
    def __init__(self) -> None:
        """Connects to the database."""
        pass

    def add_review(self, session: Session, review: Review) -> None:
        """Adds a review to the review table."""
        pass

    def get_reviews(self, session: Session, product_name: str) -> list[Review]:
        """Returns the reviews for the given product."""
        pass

    def add_product(self, session: Session, product: Product) -> None:
        """Adds a product to the product table."""
        pass

    def get_products(self, session: Session, company_id: str) -> list[Product]:
        """Returns the products of the given company."""
        pass

    def get_matched_products(self, session: Session, tester_id: str) -> list[Product]:
        """Returns the products matched with a given tester."""
        pass

    def add_tester(self, session: Session, tester: Tester) -> None:
        """Adds a tester to the tester table."""
        pass

    def add_company(self, session: Session, company: Company) -> None:
        """Adds a company to the company table."""
        pass


class CockroachDB(IDatabaseService):
    def __init__(self, callback: Callable[[Engine], None]) -> None:
        super().__init__()
        engine = create_engine(os.getenv("DATABASE_URL"))
        Base.metadata.create_all(engine)
        print("Connected to database.")
        callback(engine)

    def add_review(self, session: Session, review: Review) -> None:
        print(review)
        session.add(review)

    def get_reviews(self, session: Session, product_id: str) -> list[Review]:
        return session.query(Review).filter_by(product_id=product_id).all()

    def add_product(self, session: Session, product: Product):
        session.add(product)
        return product

    def get_products(self, session: Session, company_id: str) -> list[Product]:
        return session.query(Product).filter_by(company_id=company_id).all()

    def get_matched_products(self, session: Session, tester_id: str) -> list[Product]:
        tester = session.query(Tester).filter_by(id=tester_id).first()
        products = session.query(Product).all()

        def compare(p: Product) -> int:
            diff = abs(p.target_age - tester.age)
            if p.target_industry != tester.industry:
                diff += 1000
            return diff

        return sorted(products, key=compare)

    def add_tester(self, session: Session, tester: Tester) -> None:
        session.add(tester)

    def add_company(self, session: Session, company: Company) -> None:
        session.add(company)


load_dotenv()
