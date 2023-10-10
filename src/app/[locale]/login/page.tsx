import React from 'react'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'

import GoogleAuthButton from '@/components/auth/GoogleAuthButton'
import Section from '@/components/Section'

const LoginPage = () => {
  return (
    <Section>
      <div className='min-h-[60vh] flex justify-center items-center'>
        <Card className='max-w-[400px] w-full'>
          <CardBody className='px-6'>
            <h1 className='font-bold text-xl lg:text-3xl mb-7'>Log In</h1>
            <GoogleAuthButton />
          </CardBody>
        </Card>
      </div>
    </Section>
  )
}

export default LoginPage
