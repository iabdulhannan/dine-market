import {NextRequest, NextResponse} from "next/server";
import {Stripe} from "stripe";
import {connectToDatabase} from "@/app/databaseConnection";
import {User, users} from "../../../../drizzle/schemas/usersSchema";
import {order} from "../../../../drizzle/schemas/orderSchema";

export async function POST(request: NextRequest) {
  const data = await request.json()
  console.log('DTA: ', data.userId)
  try {
    const conn = await connectToDatabase()
    const insertResult = await conn.insert(order).values({
      userId: data.userId,
      numberOfItems: data.productsToCheckout.length,
      totalAmount: data.totalAmount,
    })
    return NextResponse.json({success: true})
  } catch (e) {
    console.log('Error:', e)
    return NextResponse.json({success: false})
  }
}
