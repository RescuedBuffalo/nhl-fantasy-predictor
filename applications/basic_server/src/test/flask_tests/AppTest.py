import pytest
from flask_testing import TestCase
from basic_server.src.main.flask_app.app import app

# AppTest.py

class TestBasicServer(TestCase):
    
    def create_app(self):
        app.config['TESTING'] = True
        return app
    
    def test_home_status_code(self):
        # Send a GET request to the homepage
        response = self.client.get('/')
        # Check if the response code is 200
        assert response.status_code == 200