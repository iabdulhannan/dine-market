import {NextRequest, NextResponse} from "next/server";
import {Stripe} from "stripe";
import {connectToDatabase} from "@/app/databaseConnection";
import {User, users} from "../../../../drizzle/schemas/usersSchema";

export async function POST(request: NextRequest) {
  const data = await request.json()
  // console.log('Data: ', data)
  try {
    const conn = await connectToDatabase()
    // console.log(conn)
    const result: User[] = await conn?.select().from(users);
    console.log("Result", result)
    const insertResult = await conn.insert(users).values({
      userId: data.userId,
      email: data.email,
      fullName: data.fullName
    }).returning({insertedId: users.userId}).onConflictDoNothing()
    // console.log(insertResult)

  } catch (e) {
    return NextResponse.json({success: false})
  }
  return NextResponse.json({success: true})
}
