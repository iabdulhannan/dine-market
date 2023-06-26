import {authMiddleware, clerkClient} from "@clerk/nextjs";
export default authMiddleware({
  publicRoutes:['/','/pages/shop(.*)', '/pages/auth/signin'],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
