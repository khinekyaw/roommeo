'use client'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'

import { Button } from '@nextui-org/button'

const GoogleAuthButton = () => {
  const { data } = useSession()

  return (
    <div>
      {data ? (
        <>
          <p className='mb-2'>Logged In as {data.user?.name}</p>
          <p className='mb-5'>Comming soon...</p>
          <Button color='warning' onPress={() => signOut()}>
            Logout
          </Button>
        </>
      ) : (
        <Button
          color='secondary'
          className='w-full'
          size='lg'
          onPress={() => signIn('google')}
        >
          Log in with Google
          <FcGoogle className='text-xl' />
        </Button>
      )}
    </div>
  )
}

export default GoogleAuthButton
