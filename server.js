const express = require('express');
const bodyParser = require('body-parser');
const paypal = require('paypal-rest-sdk');

// Set up your PayPal credentials
paypal.configure({
    mode: 'sandbox', // Change to 'live' for production
    client_id: 'YOUR CLIENT ID',
    client_secret: 'SECRET KEY'
});

const app = express();

app.use(bodyParser.json());

// Handle PayPal webhook notifications
app.post('/paypal/webhook', (req, res) => {
    const eventBody = req.body;

    // Process the eventBody and take necessary actions based on the event type
    // For example, handle 'PAYMENT.CAPTURE.COMPLETED' event
    if (eventBody.event_type === 'PAYMENT.CAPTURE.COMPLETED') {
        // Handle the completed payment event
        // Update your database, send notifications, etc.
    }

    res.sendStatus(200); // Return a successful response
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
