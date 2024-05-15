# Step 1: Build the React app
FROM node:22-alpine as build-step
WORKDIR /app/main/frontend
COPY main/frontend/package.json ./
COPY main/frontend/package-lock.json ./
COPY main/frontend/tsconfig.json ./
COPY main/frontend/.env ./
COPY main/frontend/src ./src
COPY main/frontend/public ./public
RUN npm install
RUN npm run build

# Step 2: Build the Flask app
FROM python:3.12
WORKDIR /app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r ./requirements.txt

COPY --from=build-step /app/main/frontend/build /app/main/frontend/build

WORKDIR /app/main/
COPY main/flask_app ./flask_app

WORKDIR /app/main/flask_app
# Ensure the Flask app listens on Heroku's $PORT
CMD gunicorn --bind 0.0.0.0:$PORT basic_server_app:app
