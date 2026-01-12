import pandas as pd
import numpy as np
import random

# Mock model for demonstration purposes since we don't have historical training data
class ChurnModel:
    def __init__(self):
        self.model = None

    def train_mock(self):
        """Simulates training a model"""
        print("Training mock churn model...")
        return True

    def predict(self, customer_df):
        """
        Predicts churn probability for customers.
        Input: DataFrame with customer info
        Output: List of dicts with customer_id and churn_prob
        """
        results = []
        for index, row in customer_df.iterrows():
            # Simple heuristic for demo: 
            # randomize churn based on some logic (e.g. age > 50 higher diff)
            base_prob = 0.2
            if row.get('age', 30) > 40:
                base_prob += 0.3
            
            # Random noise
            prob = min(max(base_prob + random.uniform(-0.1, 0.1), 0), 1)
            
            results.append({
                "customer_id": row['customer_id'],
                "churn_probability": round(prob, 2),
                "risk_level": "High" if prob > 0.5 else "Low"
            })
        return results

churn_model = ChurnModel()
