import {SignIn} from "@clerk/nextjs";

export default function Page() {
  return (
    <div className={"flex justify-center items-center h-full mt-[-20px] min-h-screen"}>
      <SignIn redirectUrl={'/pages/shop/cart'}/>
    </div>
  );
}
