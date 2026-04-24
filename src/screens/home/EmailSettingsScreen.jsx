import AccountSettingsFormScreen from '../../components/home/AccountSettingsFormScreen'

const mailIcon = require('../../../assets/images/auth/mail.png')

const fields = [
  {
    key: 'email',
    iconSource: mailIcon,
    placeholder: 'Insira seu novo E-mail',
  },
]

export default function EmailSettingsScreen({ navigation }) {
  return (
    <AccountSettingsFormScreen
      navigation={navigation}
      title="E-mail"
      fields={fields}
      buttonText="Alterar email"
      onSubmit={() => navigation.goBack()}
    />
  )
}
