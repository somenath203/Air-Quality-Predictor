from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import pickle


app = FastAPI()


origins = ["*"]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


model = pickle.load(open('mymodel.pkl', 'rb'))

scaler = pickle.load(open('mystandardscaler.pkl', 'rb'))


class airQualityModel(BaseModel):
    yearNo: int
    monthNo: int
    dayNo: int
    hourNo: int


@app.get('/')
def welcome():
    return {
        'success': True,
        'message': 'server of Air Quality Checker is up and running successfully '
    }


@app.post('/predict')
async def predict(airValues: airQualityModel):
    year = airValues.yearNo
    month = airValues.monthNo
    day = airValues.dayNo
    hour = airValues.hourNo

    prediction_data = pd.DataFrame(
        [[year, month, day, hour]],
        columns=['Year', 'Month', 'Day', 'Hour']
    )

    print(prediction_data)

    print()

    prediction_data_scale = scaler.transform(prediction_data)

    print(prediction_data_scale)

    prediction_result = model.predict(prediction_data_scale)

    return {
        'success': True,
        'pred_result': float(prediction_result[0])
    }
