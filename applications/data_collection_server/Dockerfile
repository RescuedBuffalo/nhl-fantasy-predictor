# Set the base image
FROM python:3.12

# Set the working directory in the Docker container
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application
COPY main/flask_app .

# Command to run on container start
CMD gunicorn --bind 0.0.0.0:$PORT data_collection_app:app