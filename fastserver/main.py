from fastapi import FastAPI
from db import CockroachDB

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/matches/{tester_id}")
async def get_matches(tester_id: int):
    return {"match": tester_id}

database = CockroachDB(lambda c: None)
