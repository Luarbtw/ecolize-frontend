import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import { cores } from '../../constants/cores'

const { width, height } = Dimensions.get('window')
const cor = cores.amarelo

export default function Slide3({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Área da ilustração */}
      <View style={styles.ilustracaoContainer}>

        {/* Blob amarelo */}
        <Image
          source={require('../../../assets/images/onboarding/vector3.png')}
          style={styles.blob}
          resizeMode="contain"
        />

        {/* Globo — atrás da carteira */}
        <Image
          source={require('../../../assets/images/onboarding/mundo.png')}
          style={styles.globo}
          resizeMode="contain"
        />

        {/* Sol amarelo — canto direito */}
        <View style={styles.sol} />

        {/* Carteira com pessoas */}
        <Image
          source={require('../../../assets/images/onboarding/carteira.png')}
          style={styles.carteira}
          resizeMode="contain"
        />

      </View>

      {/* Botão Voltar */}
      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.voltarTexto}>‹</Text>
      </TouchableOpacity>

      {/* Botão Pular */}
      <TouchableOpacity
        style={styles.botaoPular}
        onPress={() => navigation.navigate('Slide1')}
      >
        <Text style={styles.pularTexto}>Pular</Text>
      </TouchableOpacity>

      {/* Conteúdo textual */}
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>
          Sua economia{'\n'}protege o futuro.
        </Text>

        <Text style={styles.descricao}>
          Ao reduzir o desperdício, você ajuda a diminuir a pressão sobre nossas
          hidrelétricas e biomas. Pequenas ações contribuem diretamente para os
          Objetivos de Desenvolvimento Sustentável.
        </Text>
      </View>

      {/* Dots centralizados */}
      <View style={styles.dots}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, styles.dotAtivo]} />
      </View>

      {/* Botão próximo */}
      <TouchableOpacity
        style={styles.botaoProximo}
        onPress={() => navigation.navigate('Slide1')}
      >
        <Text style={styles.setaTexto}>›</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundoClaro,
  },

  // Ilustração
  ilustracaoContainer: {
    width: '100%',
    height: height * 0.58,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blob: {
    position: 'absolute',
    width: width * 1.0,
    height: height * 0.52,
    top: height * 0.055,
    alignSelf: 'center',
  },
  globo: {
    position: 'absolute',
    width: width * 1.1,
    height: width * 1.1,
    top: height * 0.06,
    alignSelf: 'center',
    zIndex: 1,
  },
  sol: {
    position: 'absolute',
    width: width * 0.18,
    height: width * 0.18,
    borderRadius: width * 1,
    backgroundColor: '#F5A623',
    top: height * 0.27,
    left: width * 0.89,
    zIndex: 1,
  },
  carteira: {
    position: 'absolute',
    width: width * 0.9,
    height: width * 0.75,
    top: height * 0.23,
    left: width * 0.08,
    alignSelf: 'center',
    zIndex: 2,
  },

  // Botão voltar
  botaoVoltar: {
    position: 'absolute',
    top: height * 0.065,
    left: width * 0.05,
    zIndex: 10,
  },
  voltarTexto: {
    fontSize: width * 0.08,
    lineHeight: width * 0.09,
    color: cor.titulo,
  },

  // Botão pular
  botaoPular: {
    position: 'absolute',
    top: height * 0.068,
    right: width * 0.06,
    zIndex: 10,
  },
  pularTexto: {
    fontSize: width * 0.038,
    color: '#888',
    fontWeight: '500',
  },

  // Conteúdo
  conteudo: {
    flex: 1,
    paddingHorizontal: width * 0.07,
    paddingTop: height * 0.03,
  },
  titulo: {
    fontFamily: 'Poppins_700Bold',
    fontSize: width * 0.075,
    lineHeight: width * 0.095,
    color: cor.titulo,
    marginBottom: height * 0.02,
  },
  descricao: {
    fontSize: width * 0.038,
    color: cores.textoEscuro,
    lineHeight: width * 0.06,
  },

  // Dots
  dots: {
    position: 'absolute',
    bottom: height * 0.055,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: width * 0.02,
  },
  dot: {
    width: width * 0.04,
    height: height * 0.01,
    borderRadius: width * 0.01,
    backgroundColor: cores.cinzaClaro,
  },
  dotAtivo: {
    width: width * 0.08,
    backgroundColor: cor.dot,
  },

  // Botão próximo
  botaoProximo: {
    position: 'absolute',
    bottom: height * 0.06,
    right: width * 0.07,
    width: width * 0.13,
    height: width * 0.13,
    borderRadius: width * 0.065,
    backgroundColor: cor.botao,
    alignItems: 'center',
    justifyContent: 'center',
  },
  setaTexto: {
    color: cores.branco,
    fontSize: width * 0.08,
    lineHeight: width * 0.09,
    marginTop: -width * 0.005,
  },
})