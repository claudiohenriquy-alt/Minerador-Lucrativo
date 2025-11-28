
// api/create-checkout-session.js
// Instructions:
// 1. Install 'stripe' in your package.json dependencies.
// 2. Set environment variables in Vercel:
//    - STRIPE_SECRET_KEY: sk_test_... (from Stripe Dashboard)
//    - PRICE_PRO_ID: price_... (Create a recurring product in Stripe for Pro)
//    - PRICE_EXPERT_ID: price_... (Create a recurring product in Stripe for Expert)
//    - SITE_URL: Your production URL (e.g., https://myapp.vercel.app). Default uses request headers.

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { plan } = req.body; // 'pro' or 'expert'

    // Determine the Price ID based on the selected plan
    let priceId;
    if (plan === 'pro') {
      priceId = process.env.PRICE_PRO_ID;
    } else if (plan === 'expert') {
      priceId = process.env.PRICE_EXPERT_ID;
    } else {
      return res.status(400).json({ error: 'Invalid plan selected' });
    }

    if (!priceId) {
      return res.status(500).json({ error: 'Price ID not configured on server.' });
    }

    // Determine base URL for redirection
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const origin = process.env.SITE_URL || `${protocol}://${host}`;

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      // Redirect back to the app with a success flag
      success_url: `${origin}/?session_id={CHECKOUT_SESSION_ID}&success=true`,
      cancel_url: `${origin}/?canceled=true`,
    });

    // Return the session URL to the frontend
    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe Error:', err);
    res.status(500).json({ error: 'Error creating checkout session', message: err.message });
  }
};
