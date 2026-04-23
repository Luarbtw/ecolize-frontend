import { useState } from 'react'

import AuthInput from '../../components/auth/AuthInput'
import AuthLayout from '../../components/auth/AuthLayout'

const lockIconImage = require('../../../assets/images/auth/lock.png')
const mailIconImage = require('../../../assets/images/auth/mail.png')

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <AuthLayout
      navigation={navigation}
      verticalOffset={-18}
      title={`Entre na\nsua conta`}
      subtitle="Acesse a Ecolize e acompanhe seus gastos com praticidade."
      buttonText="Entrar"
      onSubmit={() => navigation.replace('Home')}
      footerText="Ainda não tem uma conta?"
      footerLinkText="Criar conta"
      onFooterPress={() => navigation.navigate('Register')}
    >
      <AuthInput
        iconSource={mailIconImage}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <AuthInput
        iconSource={lockIconImage}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
    </AuthLayout>
  )
}
