import {NextRequest, NextResponse} from "next/server";
import {Stripe} from "stripe";

export async function POST(request: NextRequest) {
  console.log('hit')
  const data = await request.json()
  // console.log("Request", request.nextUrl)
  // @ts-ignore
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, null)
  const session = await stripe.checkout.sessions.create({
    line_items: data,
    mode: 'payment',
    success_url: `${request.nextUrl.origin}/pages/shop/cart?success=true`,
    cancel_url: `${request.nextUrl.origin}/pages/shop/cart?canceled=true`,
  });
  return NextResponse.json({url: session.url})
}
