from flask import Flask, jsonify, redirect, url_for, render_template
import requests, json, sqlite3, os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/fetch_nhl_goal_leaders', methods=['GET'])
def fetch_nhl_goal_leaders():
    url = 'https://api-web.nhle.com/v1/skater-stats-leaders/current'
    try:
        response = requests.get(url, params={'categories': 'goals', 'limit': 10})
    except requests.exceptions.RequestException as e:
        return jsonify({'error': str(e)}), 500
    
    if response.status_code == 200:
        data = response.json()
        
        # Create a json object to be returned to the client
        player_data = []

        for player in data['goals']:
            player_id = player['id']
            player_name = f"{player['firstName']['default']} {player['lastName']['default']}"
            position = player['position']
            team = player['teamName']['default']
            goals = player['value']
            player_data.append({'player_id': player_id, 'player_name': player_name, 'position': position, 'team': team, 'goals': goals})


        return player_data, 200
    else:
        return [], 500
    
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5001))
    app.run(host='0.0.0.0', port=port)
