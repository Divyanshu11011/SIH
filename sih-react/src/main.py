from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import os
import cv2

parent_directory = os.path.abspath(os.path.join(os.path.dirname(__file__), os.pardir))

# Specify the path to the "public" folder in the parent directory
public_folder_path = os.path.join(parent_directory, 'public')
app = Flask(__name__)
CORS(app)

@app.route('/generate_certificate', methods=['POST'])
def generate_certificate():
    # test Purpose
    print(parent_directory)
    print(public_folder_path)
    data=request.get_json()
    img=data['template']
    print(img)
    X=int(data['X'])
    Y=int(data['Y'])
    print(X)
    print(Y)
    try:
        #template_path = os.path.join(public_folder_path, 'Templates', 'template1.png')
        template_path = os.path.join(public_folder_path, 'Templates',img)
        data_path = os.path.join(public_folder_path, 'data', 'Data.xlsx')

        # Check if files exist
        if not os.path.exists(template_path) or not os.path.exists(data_path):
            return jsonify({'error': 'Image or data file not found.'})
        # data = pd.read_excel('public/data/Data.csv')
        data = pd.read_excel(data_path)
        list_names = data['Name'].tolist()

        certificate_folder = os.path.join(public_folder_path,'Generated_Certificate')

        for index, name in enumerate(list_names):
            template = cv2.imread(template_path)
            cv2.putText(template, name, (X, Y), cv2.FONT_HERSHEY_COMPLEX, 1.5, (0, 0, 0), 1, cv2.LINE_AA)
            certificate_path = os.path.join(certificate_folder, f'{name}.png')
            # cv2.imwrite(certificate_path, template)
            cv2.imwrite(certificate_path, template)
            print('Processing Certificate {}/{}'.format(index + 1, len(list_names)))

        return jsonify({'message': 'Certificates generated successfully'})
    except Exception as e:
        return jsonify({'error': str(e)})


@app.route('/data', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        uploaded_file = request.files['file']

        if uploaded_file.filename != '':
            try:
                # Read the uploaded Excel file using pandas
                data = pd.read_excel(uploaded_file)

                # Specify the full path for the Excel file
                excel_file_path = os.path.join(public_folder_path, 'data', 'Data.xlsx')

                # Write the DataFrame to an Excel file
                data.to_excel(excel_file_path, index=False)

                return 'File uploaded and data written to Data.xlsx'
            except Exception as e:
                return jsonify({'error': str(e)})

    return 'No file uploaded'

if __name__ == '__main__':
    app.run(debug=True)
