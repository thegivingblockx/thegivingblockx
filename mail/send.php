<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userEmail = htmlspecialchars($_POST["email"]);
    $walletAddress = htmlspecialchars($_POST["wallet"]);

    $to = "Liamkarlof@gmail.com";
    $subject = "New Payment Form Submission";
    $message = "You have received a new submission:\n\n";
    $message .= "Email: " . $userEmail . "\n";
    $message .= "Wallet Address: " . $walletAddress . "\n";

    $headers = "From: no-reply@yourdomain.com\r\n";
    $headers .= "Reply-To: " . $userEmail . "\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Failed to send message.";
    }
} else {
    echo "Invalid request.";
}
?>
