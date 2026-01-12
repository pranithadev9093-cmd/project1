from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import analytics

app = FastAPI(title="AI Customer Insight Service")

# Allow CORS for local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(analytics.router, prefix="/api/v1")

@app.get("/")
def read_root():
    return {"message": "AI Service is running"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}
