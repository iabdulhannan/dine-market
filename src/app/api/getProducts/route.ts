import {NextRequest, NextResponse} from "next/server";
import {Stripe} from "stripe";

export async function GET(request: NextRequest) {
  // @ts-ignore
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, null)
  const prices = await stripe.products.list({
    limit: 4
  })

return NextResponse.json(prices.data.reverse())
}
