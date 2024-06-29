# Air Quality Predictor

## Contents

- [Introduction](#Introduction)
- [Purpose of the Project](#Purpose-of-the-Project)
- [Components of the Project](#Components-of-the-Project)
- [About the Frontend of the Project](#About-the-Frontend-of-the-Project)
- [About the Backend of the Project](#About-the-Backend-of-the-Project)
- [About the Machine Learning Model](#About-the-Machine-Learning-Model)
- [Installation and Usage](#Installation-and-Usage)
- [Deployment](#Deployment)
- [Links](#Links)
- [Warning](#Warning)


## Introduction 

Air Quality Predictor is a machine learning project designed to help you forecast the quality of the air based on four crucial parameters: year, month, day, and hour of the measurement. 
With this project, you can accurately predict the concentration of PM2.5 particles (particulate matter with a diameter of 2.5 micrometers or smaller) in the air, enabling better environmental monitoring 
and informed decision-making.

## Purpose of the Project

The purpose of the Air Quality Predictor project is to empower individuals and organizations with a web based A.I. application for understanding and forecasting air quality. By predicting PM2.5 levels, individuals can take measures to safeguard their health which includes making informed decisions about outdoor activities, adjusting indoor ventilation, and taking necessary precautions when air quality deteriorates. Besides this, the environmental agencies and researchers can utilize our project to track and analyze air quality trends over time.


## Components of the Project

The project is divided into three parts: Frontend, Backend and the Machine Learning Model

## About the Frontend of the Project

The frontend of the project is built with ReactJS and TailwindCSS. It allows users to make predictions about the quality of air by sending input to the machine learning model via the backend api from the frontend.

## About the Backend of the Project

The backend of this project is created with the help of FastAPI. After the user clicks on Submit Button in the frontend, the request is send to the FastAPI via axios and then FastAPI forwards this request to the machine learning model to make the prediction.

## About the Machine Learning Model

The machine learning model of this project is trained on 8000 datapoints. I tried 3 different regression models for this project namely **LinearRegression**, **RandomForestRegressor** and **KNeighborsRegressor**. After implementing the three models, I found the accuracy scores on training and testing data for the 3 models as follows:

| Model Name | Training Accuracy | Testing Accuracy |
|----------|----------|----------|
| Linear Regression | 0.051812	 | 0.042505 |
| Random Forest Regressor | 0.987630 | 0.916692 |
| K Neighbors Regressor | 0.940275 | 0.862848 |

After observing the accuracies, I finally chose Random Forest Regressor as my final model since it has performed well on both training and testing accuracy.

## Installation and Usage

### Step 1:
In order to run this project locally, you first need to NodeJS and Python installed in our system.

Link to download NodeJS: https://nodejs.org/en

Link to download Python: https://www.python.org/

### Step 2:

After downloading the above two softwares, we need to clone the project. In order to clone the project, execute the following command:

```
git clone https://github.com/somenath203/Air-Quality-Predictor.git
```

### Step 3:

After you have cloned the project, open command prompt(CMD) inside the frontend folder and execute the following command

```
npm i
```

After all the dependencies inside the frontend folder is successfully downloaded, open terminal inside the backend folder and execute the following command:

```
pip install -r requirements.txt
```

This command will installed all the necessary dependencies required to run the backend application.

### Step 4:

After all the necessary dependencies are installed inside the two folders, open the command prompt again inside the frontend folder and execute the following command:

```
npm start
```

This will start the development server of the React Application.

After this, open open the command prompt inside the backend folder and execute the following command:

```
uvicorn app:app --reload
```

This will start the development server of the fastAPI.

### Step 5(Final Step):
In order to connect the fastapi backend with the react frontend, create a `.env` file in the root directory of the project and paste the following line:

```
REACT_APP_FASTAPI_BACKEND=http://localhost:8000/predict
```
Here, I have assumed that the development server of FastAPI is running on PORT 8000. If your fastapi server is running on a different port, then, just replace 8000 with the port number and then, you are ready to go.

## Deployment

The frontend of the project is deployed in Vercel whereas the backend of the project is deployed in Render.

## Links

Live preview of the project: https://air-quality-predictor.vercel.app/

Link to the deployed API of the project: https://pred-air-quality-back.onrender.com/

Link to the swagger documentation of the backend API of the project: https://pred-air-quality-back.onrender.com/docs

Link to the jupyter notebook of the machine learning model: https://github.com/somenath203/Air-Quality-Predictor/blob/main/backend/air_quality.ipynb

Link to the dataset used to train the machine learning model: https://www.kaggle.com/datasets/fedesoriano/air-quality-data-in-india

## Warning

Although the model is able to correctly predict the concentration of PM2.5 particles in air, but, since, it is only trained on a small dataset of only 8,000 datapoints, therefore,
there is chance that, in some cases, the model might make wrong predictions.
