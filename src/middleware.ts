import {authMiddleware, clerkClient} from "@clerk/nextjs";
import {User, users} from "../drizzle/schemas/usersSchema";
import {connectToDatabase, databaseConnection} from "@/app/databaseConnection";
import postgres from "postgres";
import {migrate} from "drizzle-orm/postgres-js/migrator";
import {drizzle} from "drizzle-orm/postgres-js";
import toast from "react-hot-toast";
export default authMiddleware({
  publicRoutes:['/','/pages/shop(.*)', '/pages/auth/signin'],
  // afterAuth: async (auth, req, evt) => {
  //   if (auth.userId) {
  //     const user = await clerkClient.users.getUser(auth.userId);
  //     // console.log("Auth", auth)
  //     console.log("Auth", user)
  //     toast.error('Could not create user', {position: 'top-center'})
  //     //   Signing in
  //     // const conn  = await connectToDatabase();
  //     // console.log('Conn: ', conn)
  //     // const result: User[] = await conn?.select().from(users);
  //     // console.log("Result", result)
  //   }
  // },


});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
