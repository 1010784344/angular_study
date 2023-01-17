import os
from flask_cors import CORS
from flask import Flask, render_template, request, redirect, url_for


app = Flask(__name__)
CORS(app, supports_credentials=True)


@app.route('/angular', methods=['POST'])
def upload():
    if request.method == 'POST':
        return request.data


if __name__ == '__main__':
    app.run(debug=True)


