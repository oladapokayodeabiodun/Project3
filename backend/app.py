from flask import Flask, request, jsonify
from joblib import load
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from all origins

pipeline = load('spam_pipeline.joblib')


@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Welcome to the Email Spam Detection API!"})

@app.route('/predict', methods=['POST'])
def predict():
    # Extract the email text from the request
    data = request.get_json()
    email_text = data.get('email_text', '')

    # Debugging: Log the input
    print(f"Received email text: {email_text}")

    # Make a prediction using the pipeline
    try:
        prediction = pipeline.predict([email_text])
        print(f"Prediction: {prediction}")
        return jsonify({"is_spam": bool(prediction[0])})  # Convert to boolean for clarity
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500
    # Extract the email text from the request
    data = request.get_json()
    email_text = data.get('email_text', '')

    # Make a prediction using the pipeline
    prediction = pipeline.predict([email_text])


    return jsonify({"is_spam": prediction[0]})
    print(prediction)
    print(f"Prediction: {prediction}")
    print(f"Input Text: {email_text}")

if __name__ == '__main__':
    app.run(debug=True)
