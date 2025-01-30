# 📧 Spam detection application for detecting unwanted e-mails getting to a user's inbox

## 📌 Project Overview
The **Email Spam Detection Application** is designed to identify and filter out unwanted emails, ensuring that users' inboxes remain free from spam. The project leverages **Machine Learning (ML)** to classify emails as either *Spam* or *Ham (Not Spam)*. The application consists of:

- **A Machine Learning Model** trained to detect spam emails.
- **A Flask Backend** to serve the model and handle classification requests.
- **A Web Frontend** built with HTML, CSS, and JavaScript to allow users to input emails for spam detection.

## 🚀 Features
- **Email Spam Classification**: Users can input an email message, and the system will classify it as *Spam* or *Not Spam*.
- **ML Model Integration**: A trained model packaged using `joblib`.
- **Web-Based Interface**: A simple and user-friendly interface for email classification.
- **RESTful API**: The Flask backend provides an API endpoint for classification requests.

---

## 🛠️ Project Development Process

### 📊 Data Collection
- The dataset for training the model was collected by **Ebenezar Noble** and **Adelakun Joshua**.
- The dataset includes labeled email samples indicating whether they are spam or ham.
- The data was preprocessed to remove noise, stop words, and unnecessary elements.

### 🤖 Model Development
1. **Preprocessing & Feature Engineering**
   - Tokenization, removal of special characters, and conversion to lowercase.
   - Stopword removal and stemming/lemmatization.
   - Text vectorization using **TF-IDF (Term Frequency-Inverse Document Frequency)**.
   
2. **Model Selection & Training**
   - Tried different models including Naïve Bayes, Logistic Regression, and SVM.
   - The best performance was achieved using **Multinomial Naïve Bayes**, which is ideal for text classification.
   - The model was trained on the dataset and evaluated using accuracy, precision, recall, and F1-score.

3. **Model Packaging & Deployment**
   - The trained model was serialized using `joblib`.
   - Integrated the model into a **Flask API**.
   
### 🌐 Web Application Development

#### 🏗️ Backend Development (Flask API)
- **Developed by:** **Azuka Ifeanyichukwu** (Lead, Backend & Model Training) with assistance from **David Johnson**.
- A Flask REST API was built to:
  - Load the trained model.
  - Accept user input via an API endpoint.
  - Process input text and return the classification result.
  
#### 🎨 Frontend Development
- **Developed by:** **Adeoye Ayonifeade, Oni Davies, and Olusanya Joseph**.
- Built using **HTML, CSS, and JavaScript**.
- Designed a user-friendly UI where users can:
  - Input an email.
  - Click a button to classify the email.
  - Receive real-time spam detection feedback.

### 🔬 Testing & Debugging
- **Tested by:** **Ayonifeade and David Johnson**.
- Conducted unit testing on:
  - Model performance using test datasets.
  - API response times and accuracy.
  - Frontend usability and integration with the backend.

### 📂 Deployment & Version Control
- **GitHub Repository Management** by **Azuka Ifeanyichukwu**.
- Code was pushed to GitHub for collaboration and version control.

---

## 👥 Team Contributions
| Name               | Role |
|-------------------|------|
| **Adelakun Joshua(210202001)** | Data Collection and Project Manager |
| **Ebenezar Noble(200202018)** | Data Collection |
| **Azuka Ifeanyichukwu(220210014)** | Model Training, Flask Backend, GitHub Repo Management |
| **David Johnson(220202043)** | Assisted Backend, Testing |
| **Adeoye Ayonifeade(210202003)** | Frontend Development, Testing |
| **Oni Davies(210202027)** | Frontend Development |
| **Olusanya Joseph(210202025)** | Frontend Development |

---

## 🏁 Running the Application
### 🔹 Prerequisites
Ensure you have the following installed:
- Python 3
- Flask
- Joblib
- Scikit-learn

### 🔹 Steps to Run Locally
1. **Clone the Repository**
   ```bash
   git clone https://github.com/oladapokayodeabiodun/Project3.git
   cd spam-detection-app
   ```
2. **Set Up Virtual Environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```
4. **Run the Flask Backend**
   ```bash
   python app.py
   ```
5. **Access the Frontend**
   - Open `index.html` in a browser.



