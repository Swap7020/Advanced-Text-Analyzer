from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.analyzer import router as analyzer_router
from app.routers.health import router as health_router

# Create FastAPI app FIRST
app = FastAPI(
    title="Advanced Text Analyzer API",
    version="1.0.0"
)

# Add middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers AFTER app is created
app.include_router(analyzer_router)
app.include_router(health_router)

@app.get("/")
def home():
    return {
        "message": "Welcome to Advanced Text Analyzer API"
    }