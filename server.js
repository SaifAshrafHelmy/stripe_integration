const express = require('express');
const PORT = 3000;
const app = express();
const MY_DOMAIN = `http://localhost:${PORT}`;

require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_API_KEY);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

app.get('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Price_id for product defined in stripe products
                price: `price_1OnhhdG6mitVHZhyzcDacAyT`,
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${MY_DOMAIN}/success`,
        cancel_url: `${MY_DOMAIN}/cancel`,
    });
    res.redirect(303, session.url);
});

app.listen(PORT, () => {
    console.log(`Express app is listening on http://localhost:${PORT}`);
});
