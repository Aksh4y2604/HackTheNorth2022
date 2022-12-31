import json
from uuid import uuid4 as uuid
from fastapi import FastAPI
from sqlalchemy.engine import Engine
from sqlalchemy.orm import sessionmaker

from db import CockroachDB
from dtos import *
from models import *

app = FastAPI()
Session = sessionmaker()


def init_endpoints(engine: Engine):
    Session.configure(bind=engine)

    @app.get("/")
    async def root():
        return {"message": "Hello World"}

    @app.post("/review/", status_code=201)
    async def add_review(dto: ReviewDto):
        new_review = Review(
            id=uuid(),
            tester_id=dto.tester_id,
            product_id=dto.product_id,
            rating=dto.rating,
            feedback=dto.feedback
        )
        session = Session()
        try:
            database.add_review(session, new_review)
            session.commit()
            return {"review_id": new_review.id}
        except:
            return "Couldn't add review in database."

    @app.get("/review/", status_code=200)
    async def get_reviews(product_id: str):
        session = Session()
        try:
            res = database.get_reviews(session, product_id)
            return res
        except:
            return "Couldn't read reviews table."

    @app.post("/product/", status_code=201)
    async def add_review(dto: ProductDto):
        new_product = Product(
            id=uuid(),
            company_id=dto.company_id,
            name=dto.name,
            description=dto.description,
            hourly=dto.hourly,
            target_age=dto.target_age,
            target_industry=dto.target_industry,
            issues={}
        )
        session = Session()
        try:
            database.add_product(session, new_product)
            session.commit()
            return {"product_id": new_product.id}
        except:
            return "Couldn't add product in database."

    @app.get("/product/", status_code=200)
    async def get_products(company_id: str):
        session = Session()
        try:
            res = database.get_products(session, company_id)
            return res
        except:
            return "Couldn't read product table."

    @app.get("/matches/", status_code=200)
    async def get_matches(tester_id: str):
        session = Session()
        try:
            res = database.get_matched_products(session, tester_id)
            return res
        except:
            return "Couldn't read product table."

    @app.post("/tester/", status_code=201)
    async def add_tester(dto: TesterDto):
        new_tester = Tester(
            id=uuid(),
            username=dto.username,
            industry=dto.industry,
            age=dto.age
        )
        session = Session()
        try:
            database.add_tester(session, new_tester)
            session.commit()
            return {"tester_id": new_tester.id}
        except:
            return "Couldn't add tester in database."

    @app.post("/company/", status_code=201)
    async def add_company(dto: CompanyDto):
        new_company = Company(
            id=uuid(),
            name=dto.name,
            email=dto.email
        )
        session = Session()
        try:
            database.add_company(session, new_company)
            session.commit()
            return {"company_id": new_company.id}
        except:
            return "Couldn't add company in database."


database = CockroachDB(init_endpoints)
