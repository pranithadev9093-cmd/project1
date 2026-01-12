from fastapi import APIRouter
from utils.churn_model import churn_model
from utils.data_processor import load_data
import pandas as pd
import os

router = APIRouter()

DATA_PATH = os.path.join(os.path.dirname(__file__), '../../data')

@router.get("/churn-predictions")
def get_churn_predictions():
    # Load customer data
    customers_path = os.path.join(DATA_PATH, 'customers.csv')
    try:
        df = pd.read_csv(customers_path)
        predictions = churn_model.predict(df)
        return {"features": "churn", "predictions": predictions}
    except Exception as e:
        return {"error": str(e)}

@router.get("/sales-forecast")
def get_sales_forecast():
    # Mock forecast data
    return {
        "forecast": [
            {"date": "2023-11-08", "predicted_sales": 150.0},
            {"date": "2023-11-09", "predicted_sales": 160.5},
            {"date": "2023-11-10", "predicted_sales": 145.0},
            {"date": "2023-11-11", "predicted_sales": 170.0},
            {"date": "2023-11-12", "predicted_sales": 180.0},
            {"date": "2023-11-13", "predicted_sales": 190.0},
            {"date": "2023-11-14", "predicted_sales": 200.0}
        ]
    }
