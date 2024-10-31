from flask import Flask, request, render_template, jsonify
import pickle
import pandas as pd

app = Flask(__name__)

# Load models
with open('models/knn.pkl', 'rb') as model_file:
    model_knn = pickle.load(model_file)

with open('models/logistic_regression.pkl', 'rb') as model_file:
    model_logistic = pickle.load(model_file)

with open('models/mlp.pkl', 'rb') as model_file:
    model_mlp = pickle.load(model_file)

with open('models/naive_bayes.pkl', 'rb') as model_file:
    model_bayes = pickle.load(model_file)

with open('models/random_forrest.pkl', 'rb') as model_file:
    model_forrest = pickle.load(model_file)

with open('models/svm.pkl', 'rb') as model_file:
    model_svm = pickle.load(model_file)

# Load the pipeline for preprocessing
with open('transformers/your_pipeline.pkl', 'rb') as pipeline_file:
    pipeline = pickle.load(pipeline_file)

@app.route('/')
def home():
    return render_template('predict_form.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Get form data
    form_data = request.form.to_dict()
    form_data = {key: float(value) for key, value in form_data.items()}  # Convert all inputs to float
    input_df = pd.DataFrame([form_data])

    # Apply transformations using the pipeline
    transformed_input = pipeline.transform(input_df)

    # Get the selected model from the form
    selected_model = request.form['model']

    # Choose the appropriate model for prediction
    if selected_model == "knn":
        model = model_knn
    elif selected_model == "logistic":
        model = model_logistic
    elif selected_model == "mlp":
        model = model_mlp
    elif selected_model == "bayes":
        model = model_bayes
    elif selected_model == "forrest":
        model = model_forrest
    elif selected_model == "svm":
        model = model_svm
    else:
        return jsonify({"error": "Invalid model selected"}), 400

    # Make predictions
    prediction = model.predict(transformed_input)
    prediction_proba = model.predict_proba(transformed_input) if hasattr(model, 'predict_proba') else None

    # Prepare the response
    result = {
        "prediction": int(prediction[0]),
        "prediction_probability": prediction_proba[0].tolist() if prediction_proba is not None else "N/A"
    }
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
