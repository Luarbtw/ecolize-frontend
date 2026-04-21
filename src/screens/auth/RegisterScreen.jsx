import { useState } from 'react'

import AuthInput from '../../components/auth/AuthInput'
import AuthLayout from '../../components/auth/AuthLayout'

const lockIconImage = require('../../../assets/images/auth/lock.png')
const mailIconImage = require('../../../assets/images/auth/mail.png')
const personIconImage = require('../../../assets/images/auth/person.png')

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <AuthLayout
      navigation={navigation}
      title={`Crie sua\nconta`}
      subtitle="Comece a economizar de forma inteligente com a Ecolize."
      buttonText="Criar conta"
      onSubmit={() => navigation.replace('Home')}
      footerText="Já tem uma conta?"
      footerLinkText="Entre aqui"
      onFooterPress={() => navigation.navigate('Login')}
    >
      <AuthInput
        iconSource={personIconImage}
        placeholder="Nome completo"
        value={name}
        onChangeText={setName}
      />
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
