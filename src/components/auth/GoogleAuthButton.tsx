'use client'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

import { Button } from '@nextui-org/button'

const GoogleAuthButton = () => {
  const { data } = useSession()

  return (
    <div>
      {data ? (
        <>
          <p>Sign In as {data.user?.name}</p>
          <Button color='danger' onPress={() => signOut()}>
            Logout
          </Button>
        </>
      ) : (
        <Button color='primary' onPress={() => signIn()}>
          Sign In
        </Button>
      )}
    </div>
  )
}

export default GoogleAuthButton
