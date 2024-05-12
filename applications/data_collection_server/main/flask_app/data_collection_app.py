from flask import Flask, jsonify, redirect, url_for, render_template
import requests, json, sqlite3, os

app = Flask(__name__)

def db_connection():
    conn = None
    try:
        conn = sqlite3.connect('nhl_data.db')
        cursor = conn.cursor()
        cursor.execute('''
                       CREATE TABLE IF NOT EXISTS players (
                       id INTEGER PRIMARY KEY,
                       player_name TEXT NOT NULL,
                       position TEXT NOT NULL,
                       team TEXT NOT NULL,
                       goals INTEGER NOT NULL
                       );
                       ''')
        conn.commit()
    except sqlite3.error as e:
        print(e)
    return conn

@app.route('/')
def ind():
    return render_template('index.html')

@app.route('/leaders', methods=['GET'])
def fetch_nhl_leaders():
    url = 'https://api-web.nhle.com/v1/skater-stats-leaders/current'
    try:
        response = requests.get(url, params={'categories': 'goals', 'limit': 10})
    except requests.exceptions.RequestException as e:
        return jsonify({'error': str(e)}), 500
    
    if response.status_code == 200:
        data = response.json()

        conn = db_connection()
        if conn is None:
            return jsonify({"error": "Database connection failed"}), 500
        cursor = conn.cursor()

        # Clear previous data
        cursor.execute("DELETE FROM players")

        for player in data['goals']:
            player_id = player['id']
            player_name = f"{player['firstName']['default']} {player['lastName']['default']}"
            position = player['position']
            team = player['teamName']['default']
            goals = player['value']

            cursor.execute("INSERT INTO players (id, player_name, position, team, goals) VALUES (?, ?, ?, ?, ?)", 
                           (player_id, player_name, position, team, goals))

        conn.commit()
        conn.close()

        return jsonify({"success": True, "message": "Data fetched and stored successfully"})
    else:
        return jsonify({"success": False, "message": "Failed to fetch data"}), 500
    
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port))
