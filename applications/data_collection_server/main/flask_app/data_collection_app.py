from flask import Flask, jsonify, request, render_template
import requests

app = Flask(__name__)

@app.route('/leaders')
def index():
    return render_template('index.html')

@app.route('/fetch_nhl_leaders', methods=['GET'])
def fetch_nhl_leaders():
    url = 'https://api-web.nhle.com/v1/skater-stats-leaders/current'
    try:
        response = requests.get(url, params={'categories' : 'goals', 'limit' : 10})
        data = response.json()
        return jsonify(data)
    except Exception as e:
        return jsonify({'error: ': str(e)}), 500
    
if __name__ == '__main__':
    app.run(debug=True)