from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import pandas as pd
import os

app = Flask(__name__)
CORS(app)
@app.route('/generate_certificate', methods=['GET','POST'])
def generate_certificate():
    try:
        # data = pd.read_excel('public/data/Data.csv')
        data = pd.read_excel('public/data/Data.csv')
        list_names = data['Name'].tolist()

        certificate_folder = 'public/Generated Certificate'

        for index, name in enumerate(list_names):
            template = cv2.imread('public/Templates/Certificate Template.png')
            cv2.putText(template, name, (868, 773), cv2.FONT_HERSHEY_COMPLEX, 1.5, (0, 0, 0), 1, cv2.LINE_AA)
            certificate_path = os.path.join(certificate_folder, f'{name}.png')
            # cv2.imwrite(certificate_path, template)
            cv2.imwrite(certificate_path, template)
            print('Processing Certificate {}/{}'.format(index + 1, len(list_names)))

        return jsonify({'message': 'Certificates generated successfully'})
    except Exception as e:
        return jsonify({'error':  str(e)})

if __name__ == '__main__':
    app.run(debug=True)

# from flask import Flask

# app = Flask(__name__)

# @app.route("/members")
# def members():
#     return {"members":["Member1","Member2","Member3"]}

# if __name__== "__main__":
#     app.run(debug=True)