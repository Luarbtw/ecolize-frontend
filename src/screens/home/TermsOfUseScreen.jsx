import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const backArrowIcon = require('../../../assets/images/home/backArrowSmall.png')

const TERMS_SECTIONS = [
  {
    title: '1. Aceitação dos Termos',
    paragraphs: [
      'Ao aceder e utilizar este aplicativo, o utilizador concorda em cumprir e estar vinculado aos presentes Termos de Uso. Este software é uma ferramenta de gestão de recursos domésticos destinada a auxiliar no consumo consciente de água e energia elétrica.',
    ],
  },
  {
    title: '2. Descrição do Serviço e Tecnologia IoT',
    paragraphs: [
      'O sistema opera através da integração de sensores de Internet das Coisas (IoT) instalados nos medidores de consumo do imóvel.',
    ],
    bullets: [
      'Conectividade: O funcionamento contínuo depende da estabilidade da rede Wi-Fi do utilizador.',
      'Instalação: A configuração física dos sensores deve seguir rigorosamente as orientações de segurança fornecidas no guia de instalação do hardware.',
    ],
  },
  {
    title: '3. Precisão e Isenção de Responsabilidade',
    paragraphs: [
      'Os sensores possuem alta precisão técnica (aproximadamente 99%). No entanto, os valores convertidos em moeda corrente (R$) apresentados no painel de controlo são estimativas baseadas em tarifas médias e configurações do utilizador.',
      'O valor legal para pagamento será sempre o emitido pela fatura oficial da concessionária de serviços públicos.',
    ],
  },
  {
    title: '4. Obrigações do Utilizador',
    paragraphs: [
      'O utilizador compromete-se a utilizar o sistema de forma lícita, sendo proibida qualquer tentativa de engenharia reversa nos sensores, alteração de firmware não autorizada ou violação da segurança da plataforma.',
    ],
  },
  {
    title: '5. Alterações nos Serviços',
    paragraphs: [
      'Reservamo-nos o direito de atualizar as funcionalidades do aplicativo e os presentes termos para refletir melhorias técnicas ou mudanças regulatórias no setor de energia e saneamento.',
    ],
  },
]

export default function TermsOfUseScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
            <Image source={backArrowIcon} style={styles.backIcon} resizeMode="contain" />
          </Pressable>

          <Text style={styles.title}>Termos de uso</Text>
          <Text style={styles.subtitle}>Tire suas dúvidas conosco.</Text>
          <View style={styles.headerDivider} />

          <View style={styles.contentWrap}>
            {TERMS_SECTIONS.map((section) => (
              <View key={section.title} style={styles.section}>
                <Text style={styles.sectionTitle}>{section.title}</Text>

                {section.paragraphs.map((paragraph) => (
                  <Text key={paragraph} style={styles.bodyText}>
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
