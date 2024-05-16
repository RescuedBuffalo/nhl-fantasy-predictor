#!/usr/bin/env python3

'''
This file is called TestServer.py
'''
from subprocess import Popen, PIPE
from client import Client

def test_server_client():
    '''
    We start the server and let it run in the background. Then we ask 
    the client to make a call to the server and we compare the expected value.
    '''
    server = Popen('../server.py', stdout=PIPE, stderr=PIPE)
    client = Client()
    sum = client.get_sum(3, 4)
    assert (sum == 7)