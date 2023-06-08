import {NextRequest, NextResponse} from "next/server";
import {Stripe} from "stripe";

export async function POST(request: NextRequest) {
  const data = await request.json()
  // @ts-ignore
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, null)
  const paymentLink = await stripe.paymentLinks.create({
    line_items: data
  });
  return NextResponse.json(paymentLink)
}
