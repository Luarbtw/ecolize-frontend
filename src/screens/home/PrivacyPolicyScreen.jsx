import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const backArrowIcon = require('../../../assets/images/home/backArrowSmall.png')

const PRIVACY_SECTIONS = [
  {
    paragraphs: [
      'Esta política detalha como os dados são tratados em estrita conformidade com a Lei Geral de Proteção de Dados (LGPD).',
    ],
  },
  {
    title: '1. Dados Recolhidos',
    bullets: [
      'Dados de Identificação: Nome, e-mail e informações de contato fornecidas no registro.',
      'Dados de Consumo em Tempo Real: Fluxo de água e carga elétrica monitorizados pelos sensores.',
      'Metadados Técnicos: Endereço IP, tipo de dispositivo e logs de conectividade para garantir a segurança da rede.',
    ],
  },
  {
    title: '2. Finalidade do Tratamento de Dados A recolha de dados tem como finalidade exclusiva:',
    bullets: [
      'Processar e exibir gráficos de consumo em tempo real.',
      'Emitir alertas proativos de picos de gasto ou possíveis fugas.',
      'Gerar relatórios de desempenho ambiental e economia financeira.',
      'Personalizar sugestões de eficiência energética com base no perfil de uso.',
    ],
  },
  {
    title: '3. Segurança e Confidencialidade',
    paragraphs: [
      'A privacidade do lar é tratada com prioridade máxima. Todos os dados transmitidos entre os sensores instalados e os nossos servidores são protegidos por criptografia de ponta a ponta. O acesso aos dados brutos de consumo é restrito ao utilizador titular da conta.',
    ],
  },
  {
    title: '4. Partilha de Dados',
    paragraphs: [
      'O aplicativo não comercializa dados pessoais ou de consumo com terceiros. Informações agregadas e anonimizadas (sem identificação do utilizador) poderão ser utilizadas apenas para estudos estatísticos sobre eficiência energética global.',
    ],
  },
  {
    title: '5. Direitos do Titular (LGPD) O utilizador possui o direito de, a qualquer momento:',
    bullets: [
      'Confirmar a existência do tratamento e aceder aos seus dados.',
      'Solicitar a correção de dados incompletos ou desatualizados.',
      'Eliminação de Dados: Solicitar a exclusão definitiva da conta e de todo o histórico recolhido pelos sensores nos nossos servidores.',
    ],
  },
  {
    title: '6. Retenção de Informação',
    paragraphs: [
      'Os dados são mantidos enquanto a conta estiver ativa. Em caso de encerramento da conta, os dados são eliminados ou anonimizados em até 30 dias úteis, salvo se houver obrigação legal de retenção.',
    ],
  },
]

export default function PrivacyPolicyScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
            <Image source={backArrowIcon} style={styles.backIcon} resizeMode="contain" />
          </Pressable>

          <Text style={styles.title}>Política de{'\n'}Privacidade</Text>
          <Text style={styles.subtitle}>Tire suas dúvidas conosco.</Text>
          <View style={styles.headerDivider} />

          <View style={styles.contentWrap}>
            {PRIVACY_SECTIONS.map((section, index) => (
              <View key={`${section.title || 'intro'}-${index}`} style={styles.section}>
                {section.title ? <Text style={styles.sectionTitle}>{section.title}</Text> : null}

                {section.paragraphs?.map((paragraph) => (
                  <Text key={paragraph} style={section.title ? styles.bodyText : styles.introText}>
                    {paragraph}
                  </Text>
                ))}

                {section.bullets?.map((bullet) => (
                  <View key={bullet} style={styles.bulletRow}>
                    <Text style={styles.bulletMarker}>•</Text>
                    <Text style={styles.bulletText}>{bullet}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  scrollContent: {
    paddingTop: 75,
    paddingBottom: 32,
  },
  backButton: {
    marginLeft: 22,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: 25,
    height: 25,
  },
  title: {
    marginTop: 22,
    marginHorizontal: 45,
    color: '#1E293B',
    fontSize: 32,
    lineHeight: 34,
    fontFamily: 'Poppins_700Bold',
  },
  subtitle: {
    marginTop: 12,
    marginHorizontal: 45,
    color: '#64748B',
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Poppins_500Medium',
  },
  headerDivider: {
    marginTop: 16,
    marginHorizontal: 45,
    height: 1,
    backgroundColor: '#D9E3EE',
  },
  contentWrap: {
    marginTop: 24,
    marginHorizontal: 45,
  },
  section: {
    marginBottom: 22,
  },
  introText: {
    color: '#64748B',
    fontSize: 15,
    lineHeight: 18,
    fontFamily: 'Poppins_500Medium',
  },
  sectionTitle: {
    color: '#1E293B',
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Poppins_600SemiBold',
  },
  bodyText: {
    marginTop: 4,
    color: '#64748B',
    fontSize: 15,
    lineHeight: 18,
    fontFamily: 'Poppins_500Medium',
  },
  bulletRow: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: 8,
  },
  bulletMarker: {
    width: 14,
    color: '#64748B',
    fontSize: 15,
    lineHeight: 18,
    fontFamily: 'Poppins_500Medium',
  },
  bulletText: {
    flex: 1,
    color: '#64748B',
    fontSize: 15,
    lineHeight: 18,
    fontFamily: 'Poppins_500Medium',
  },
})
