<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["Contact-Name"];
    $email = $_POST["Contact-Email"];
    $message = $_POST["Contact-Message"];

    // Replace "your_email@example.com" with your actual email address
    $to = "abigailstarot@gmail.com";
    $subject = "Contact Form Submission";
    $headers = "From: $name <$email>";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        // Redirect to a thank-you page after submitting the form
        header("Location: thank_you.html");
        exit();
    } else {
        // Return an error response if the email couldn't be sent
        http_response_code(500);
        echo "Something went wrong. Please try again later.";
        exit();
    }
}
?>




