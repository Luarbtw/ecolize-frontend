import AccountSettingsFormScreen from '../../components/home/AccountSettingsFormScreen'

const lockIcon = require('../../../assets/images/auth/lock.png')

const fields = [
  {
    key: 'currentPassword',
    iconSource: lockIcon,
    placeholder: 'Senha atual',
    secureTextEntry: true,
  },
  {
    key: 'newPassword',
    iconSource: lockIcon,
    placeholder: 'Nova senha',
    secureTextEntry: true,
  },
  {
    key: 'confirmPassword',
    iconSource: lockIcon,
    placeholder: 'Confirmar nova senha',
    secureTextEntry: true,
  },
]

export default function ChangePasswordScreen({ navigation }) {
  return (
    <AccountSettingsFormScreen
      navigation={navigation}
      title="Alterar senha"
      fields={fields}
      buttonText="Alterar senha"
      onSubmit={() => navigation.goBack()}
    />
  )
}
