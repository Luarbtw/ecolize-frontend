import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import { cores } from '../../constants/cores'

const { width, height } = Dimensions.get('window')
const cor = cores.azul

export default function Slide2({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Área da ilustração */}
      <View style={styles.ilustracaoContainer}>

        {/* Blob azul */}
        <Image
          source={require('../../../assets/images/onboarding/vector2.png')}
          style={styles.blob}
          resizeMode="contain"
        />

        {/* Sol amarelo — centralizado no topo */}
        <View style={styles.sol} />

        {/* Tablet — centro */}
        <Image
          source={require('../../../assets/images/onboarding/tablet.png')}
          style={styles.tablet}
          resizeMode="contain"
        />

        {/* Linha azul — chão */}
        <Image
          source={require('../../../assets/images/onboarding/linha_azul.png')}
          style={styles.linha}
          resizeMode="stretch"
        />

        {/* Árvores azuis — canto inferior esquerdo, sobre a linha */}
        <Image
          source={require('../../../assets/images/onboarding/arvores_azuis.png')}
          style={styles.arvores}
          resizeMode="contain"
        />

        {/* Mulher — canto inferior direito, sobre a linha */}
        <Image
          source={require('../../../assets/images/onboarding/mulher.png')}
          style={styles.mulher}
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
        onPress={() => navigation.navigate('Slide3')}
      >
        <Text style={styles.pularTexto}>Pular</Text>
      </TouchableOpacity>

      {/* Conteúdo textual */}
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>
          Controle total na{'\n'}palma da mão.
        </Text>

        <Text style={styles.descricao}>
          Defina metas mensais de gastos em Reais e acompanhe, em tempo real,
          quanto você já consumiu de água e luz.{' '}
          <Text style={styles.destaque}>Acabe</Text>
          {' '}com o susto na hora de abrir o boleto no fim do mês.
        </Text>
      </View>

      {/* Dots centralizados */}
      <View style={styles.dots}>
        <View style={styles.dot} />
        <View style={[styles.dot, styles.dotAtivo]} />
        <View style={styles.dot} />
      </View>

      {/* Botão próximo */}
      <TouchableOpacity
        style={styles.botaoProximo}
        onPress={() => navigation.navigate('Slide3')}
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
    width: width * 1.2,
    height: height * 0.5,
    top: height * 0.09,
    alignSelf: 'center',
  },
  sol: {
    position: 'absolute',
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: width * 0.075,
    backgroundColor: '#F5A623',
    top: height * 0.05,
    alignSelf: 'center',
    zIndex: 1,
  },
  tablet: {
    position: 'absolute',
    width: width * 0.55,
    height: width * 0.70,
    alignSelf: 'center',
    top: height * 0.17,
    zIndex: 2,
  },
  linha: {
    position: 'absolute',
    width: width * 0.65,
    height: height * 0.005,
    bottom: height * 0.01,
    alignSelf: 'center',
    zIndex: 2,
  },
  arvores: {
    position: 'absolute',
    width: width * 0.18,
    height: width * 0.18,
    bottom: height * 0.01,
    left: width * 0.17,
    zIndex: 3,
  },
  mulher: {
    position: 'absolute',
    width: width * 0.18,
    height: width * 0.32,
    bottom: height * 0.014,
    right: width * 0.2,
    zIndex: 3,
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
  destaque: {
    fontWeight: '700',
    color: cores.textoEscuro,
  },

  // Dots
  dots: {
    position: 'absolute',
    bottom: height * 0.06,
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
    bottom: height * 0.045,
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