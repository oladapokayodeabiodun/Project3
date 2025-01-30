// Function to send email text to the Flask backend for prediction
const sendPredictionRequest = async (emailText) => {
    const backendUrl = "http://127.0.0.1:5000/predict"; // Flask backend URL

    try {
        // Send a POST request with the email text
        const response = await fetch(backendUrl, {
            method: "POST", // HTTP method
            headers: {
                "Content-Type": "application/json", // Specify JSON format
            },
            body: JSON.stringify({ email_text: emailText }), // Send email text as JSON
        });

        // Check if the response is successful
        if (response.ok) {
            const data = await response.json(); // Parse JSON response
            // console.log("Prediction result:", data); // Log the prediction result
            return data; // Return the response data
        } else {
            console.error("Failed to get a valid response:", response.statusText);
        }
    } catch (error) {
        console.error("Error occurred while sending request:", error);
    }
};

// Ensure your DOM manipulation works correctly
document.getElementById("checkSpam").addEventListener("click", async (e) => {
    e.preventDefault(); // Prevent form submission or page reload

    // Get the value of the input field
    const emailInput = document.getElementById("email");
    const emailText = emailInput.value;

    // Check if the input field is empty
    if (!emailText) {
        alert("Please enter an email text!");
        return;
    }

    console.log("Sending email text:", emailText);

    // Send the email text to the Flask backend
    const prediction = await sendPredictionRequest(emailText);

    // Log or display the prediction result
    if (prediction) {
        prediction.is_spam ? document.getElementById("result").style.color = "red" : document.getElementById("result").style.color = "#2575fc";
        document.getElementById("result").innerText = `Prediction Result: ${prediction.is_spam ? "Spam" : "Not Spam"}`
    }
});
