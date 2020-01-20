#!flask/bin/python
from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient("mongodb://root:12345@localhost:27017")
db = client.testdb
sensor = db.sensorData

@app.route('/')
def hello():
    return "Hello From Server"

@app.route('/sensor-data', methods=['POST'])
def sensorData():
    if (request.is_json):
        content = request.get_json()
        
        print ("Temperature: ", content["temp"])
        print ("Humidity: ", content["humidity"])
        print ("UV: ", content["uv"])
        print ("Moisture: ", content["moisture"])
        
        temp = content["temp"]
        humidity = content["humidity"]
        uv = content["uv"]
        moisture = content["moisture"]

        sensor.insert({"temp":temp, "humidity":humidity, "uv":uv, "moisture":moisture})

        return "ok"
    else:
        return "error"

if __name__ == '__main__':
    app.run(debug=True, port=4000)