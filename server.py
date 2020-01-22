from flask import Flask, request, jsonify, send_from_directory, render_template
from pymongo import MongoClient
from pymongo.errors import ServerSelectionTimeoutError
import sys
import json

with open('config/config.json') as f:
        config = json.load(f)

app = Flask(__name__)

try:
    connect = "mongodb://" + config['user'] + ":" + config['password'] + "@" + config['host'] + ":" + config['port']  
    client = MongoClient(connect, serverSelectionTimeoutMS=10, connectTimeoutMS=20000)
    info = client.server_info()
    print("Connected to MongoDB")
    db = client["testdb"]
    collection = db["sensorData"]
except ServerSelectionTimeoutError:
    print("MongoDB connection failed")
    sys.exit()


@app.route('/farmSense', methods=['GET'])
def farmSense():
    humidity = None
    temp = None
    uv = None
    moisture = None

    # Fetch latest data
    cursor = collection.find().sort("_id", -1).limit(1)
    for document in cursor:
        print(document)
        temp = document["temp"]
        humidity = document["humidity"]
        uv = document["uv"]
        moisture = document["moisture"]
    return render_template('test.html', temp=temp, humidity=humidity, uv=uv, moisture=moisture)


@app.route('/sense', methods=['GET'])
def sense():
    endpoint = 'http://blynk-cloud.com/dHeSr2A_yh9uwwfzz8rlHhcgB1GcTygy/project'
    return render_template('farmSense.html', ENDPOINT=endpoint)


@app.route('/pushData', methods=['POST'])
def sensorData():
    if (request.is_json):
        content = request.get_json()

        print("Temperature: ", content["temp"])
        print("Humidity: ", content["humidity"])
        print("UV: ", content["uv"])
        print("Moisture: ", content["moisture"])

        temp = content["temp"]
        humidity = content["humidity"]
        uv = content["uv"]
        moisture = content["moisture"]

        collection.insert_one(
            {"temp": temp, "humidity": humidity, "uv": uv, "moisture": moisture})

        return "ok"
    else:
        return "error"


@app.route('/<path:path>', methods=['GET'])
def staticFiles(path):
    return send_from_directory('public', path)


if __name__ == '__main__':
    app.run(debug=True, port=4000)
