import React from 'react'

import GoogleAuthButton from '@/components/auth/GoogleAuthButton'
import Section from '@/components/Section'

const LoginPage = () => {
  return (
    <Section>
      <h1>LoginPage</h1>
      <GoogleAuthButton />
    </Section>
  )
}

export default LoginPage
