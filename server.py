#!flask/bin/python
from flask import Flask, request, jsonify, send_from_directory, render_template
from pymongo import MongoClient
import time
import test

app = Flask(__name__)
# app = Flask(__name__, static_url_path='')
# app = Flask(__name__, template_folder='templates')



# client = MongoClient("mongodb://root:12345@localhost:27017")
# db = client.testdb
# sensor = db.sensorData

client = MongoClient("mongodb://root:12345@localhost:27017/")
db = client["testdb"]
collection = db["sensorData"]





# @app.route('/')
# def hello():
#     return "Hello From Server"


@app.route("/")
def main():
    return render_template('data.html', reload = time.time())

@app.route("/api/info")
def api_info():
    info = {
       "ip" : "127.0.0.1",
       "hostname" : "everest",
       "description" : "Main server",
       "load" : [ 3.21, 7, 14 ]
    }
    return jsonify(info)

@app.route("/api/calc")
def add():
    cursor = collection.find().sort("_id", -1).limit(1)
    for document in cursor:
        temp = document["temp"]
        humidity = document["humidity"]
        uv = document["uv"]
        moisture = document["moisture"]

    return jsonify({
        "temp"      :  temp,
        "humidity"  :  humidity,
        "uv"        :  uv,
        "moisture"  :  moisture
})





@app.route('/farmSense', methods=['GET'])
def farmSense():
    # Fetch latest data
    cursor = collection.find().sort("_id", -1).limit(1)
    for document in cursor:
        print(document)
        temp = document["temp"]
        humidity = document["humidity"]
        uv = document["uv"]
        moisture = document["moisture"]

    # return render_template('test.html')
    return render_template('test.html', temp=temp, humidity=humidity, uv=uv, moisture=moisture)








@app.route('/pushData', methods=['POST'])
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

        print ("\n\n\nTEST VALUE", test.sample(temp, humidity), "\n\n\n")

        collection.insert_one({"temp":temp, "humidity":humidity, "uv":uv, "moisture":moisture})

        return "ok"
    else:
        return "error"








@app.route('/<path:path>', methods=['GET'])
def staticFiles(path):
    #last = sensor.findOne({}, { sort: { _id: -1 }, limit: 1 });
    #print (last)
    #return '<html><p>WORKING</p></html>'
    return send_from_directory('static', path)






if __name__ == '__main__':
    app.run(debug=True, port=4000)