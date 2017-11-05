from flask import Flask, request, render_template, send_from_directory, jsonify
import redis
import json
import os

app = Flask(__name__, static_url_path=os.path.join(os.path.dirname(os.path.abspath(__file__))))


redisclient = redis.StrictRedis(host='localhost', port=6379, db=5)


@app.route('/')
def home():
    return render_template('home.html')

@app.route('/static/<path:filename>')
def serve_static(filename):
    root_dir = os.path.dirname(os.getcwd())
    return send_from_directory(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'static'), filename)


@app.route('/loginUser/', methods=['POST'])
def getuser():
    username = request.form['username']
    if redisclient.get(username) is None:
        # Saving the user in DB with blank data for a week
        userdata = ''
        redisclient.set(username, userdata, 3600*7)
        isNew = 1
    else:
        userdata = redisclient.get(username)
        isNew = 0

    return jsonify({'code': 200, 'isNew': isNew, 'userdata': userdata})


@app.route('/saveProgress/', methods=['POST'])
def saveProgress():
    username = request.form['username']
    data = request.form['data']
    redisclient.set(username, json.dumps(data), 3600*7)
    return jsonify({'code': 200})


@app.route('/clearData/', methods=['POST'])
def clearData():
    username = request.form['username']
    redisclient.delete(username)
    return jsonify({'code': 200})

if __name__ == '__main__':

    app.run()
