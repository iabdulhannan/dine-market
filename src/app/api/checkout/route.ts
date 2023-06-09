import {NextRequest, NextResponse} from "next/server";
import {Stripe} from "stripe";

export async function POST(request: NextRequest) {
  const data = await request.json()
  // console.log("Request", request.nextUrl)
  // @ts-ignore
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, null)
  const session = await stripe.checkout.sessions.create({
    line_items: data,
    // after_completion: {
    //   type: 'redirect',
    //   redirect: {
    //     url: 'https://dine-market-delta.vercel.app/'
    //   }
    // },
    mode: 'payment',
    success_url: `${request.nextUrl.origin}/pages/shop/cart?success=true`,
    cancel_url: `${request.nextUrl.origin}/pages/shop/cart?canceled=true`,
  });
  // console.log(session)
  // @ts-ignore
  // return NextResponse.redirect('https://google.com', 302)
  return NextResponse.json({url:session.url})
}
