# Use a base image that includes both Python and Node.js
FROM nikolaik/python-nodejs:python3.12-nodejs14

# Set the working directory in the Docker container
WORKDIR /app

# Install Python dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy the Python Flask application
COPY main/flask_app .

# Install Node.js dependencies and build the React app
COPY frontend/package.json frontend/package-lock.json ./frontend/
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# Return to the main app directory
WORKDIR /app

# Copy the built React app to the Flask static directory
RUN mkdir -p /app/main/flask_app/static
RUN cp -R /app/frontend/build/* /app/main/flask_app/static/

# Command to run on container start
CMD ["python", "../main/flask_app/basic_server_app.py"]
