'use client'
import {SignIn, useClerk, useUser} from "@clerk/nextjs";
import React, {useEffect} from "react";
import toast from "react-hot-toast";
import {TailSpin} from "react-loader-spinner";

export default function Page() {

  const {isLoaded, isSignedIn, user} = useUser()
  const { signOut } = useClerk();
  useEffect(() => {
    if (isSignedIn) {
      (async () => {
        toast.loading('Signing in')
        const body = {
          userId: user?.id,
          fullName: user?.fullName,
          email: user?.emailAddresses[0].emailAddress
        }
        try {
          let response = await fetch('/api/insertUser', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(body)
          })
          const success = (await response.json()).success;

          if(!success){
            toast.error('Unable to create user')
            await signOut()
          }
          else {
            toast.success('Signed in successfully')
          }

          window.location.href = '/pages/shop/cart'
        } catch (e) {
          toast.error('Could not create user', {position: 'top-center'})
        }
      })()
    }
  }, [isSignedIn]);

  return (
    <div className={"flex justify-center items-center h-full mt-[-20px] min-h-screen"}>
      {!isSignedIn ?
      <SignIn redirectUrl={'/pages/auth/signin'} />
        : (
          <div className={'flex flex-col justify-center items-center gap-y-4 col-span-12 h-full mt-[-20px] min-h-screen'}>
            <label>Setting things up...</label>
            <TailSpin
              height="35"
              width="35"
              color="#000000"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )
      }
    </div>
  );
}
