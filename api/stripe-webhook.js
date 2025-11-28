
// api/stripe-webhook.js
// Instructions:
// 1. Add your STRIPE_WEBHOOK_SECRET to Vercel Environment Variables.
// 2. Configure this URL in Stripe Dashboard > Developers > Webhooks (e.g., https://your-app.vercel.app/api/stripe-webhook).
// 3. Events to listen for: checkout.session.completed, invoice.payment_succeeded, customer.subscription.deleted.

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { buffer } = require('micro');

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const buf = await buffer(req);
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    if (!sig || !webhookSecret) {
        throw new Error("Missing signature or webhook secret");
    }
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err) {
    console.error(`Webhook Signature Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        console.log('✅ Payment successful for session:', session.id);
        // TODO: In a real app, update your database (e.g., Supabase, Firebase)
        break;

      case 'invoice.payment_succeeded':
        console.log('✅ Invoice paid.');
        break;

      case 'customer.subscription.deleted':
      case 'invoice.payment_failed':
        const subscription = event.data.object;
        console.log('❌ Subscription ended:', subscription.id);
        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.status(200).json({ received: true });
  } catch (err) {
    console.error('Error processing webhook:', err);
    res.status(500).send('Server Error');
  }
};

module.exports = handler;

// Disable built-in body parsing for this route (required for signature verification)
module.exports.config = {
  api: {
    bodyParser: false,
  },
};
