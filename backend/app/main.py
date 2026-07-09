from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

from app.routers.analyzer import router as analyzer_router
from app.routers.health import router as health_router

app = FastAPI(
    title="Advanced Text Analyzer API",
    version="1.0.0"
)

ALLOWED_ORIGINS = os.getenv(
    "ALLOWED_ORIGINS",
    "*"
).split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(analyzer_router)
app.include_router(health_router)

@app.get("/")
def home():
    return {
        "message": "Welcome to Advanced Text Analyzer API"
    }
