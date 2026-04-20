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
    width: 60,
    height: 60,
    borderRadius: 30,
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
    height: 4,
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
    top: 52,
    left: 20,
    zIndex: 10,
  },
  voltarTexto: {
    fontSize: 32,
    lineHeight: 36,
    color: cor.titulo,
  },

  // Botão pular
  botaoPular: {
    position: 'absolute',
    top: 56,
    right: 24,
    zIndex: 10,
  },
  pularTexto: {
    fontSize: 15,
    color: '#888',
    fontWeight: '500',
  },

  // Conteúdo
  conteudo: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 25,
  },
  titulo: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 30,
    lineHeight: 38,
    color: cor.titulo,
    marginBottom: 16,
  },
  descricao: {
    fontSize: 15,
    color: cores.textoEscuro,
    lineHeight: 24,
  },
  destaque: {
    fontWeight: '700',
    color: cores.textoEscuro,
  },

  // Dots
  dots: {
    position: 'absolute',
    bottom: 48,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 16,
    height: 8,
    borderRadius: 4,
    backgroundColor: cores.cinzaClaro,
  },
  dotAtivo: {
    width: 32,
    backgroundColor: cor.dot,
  },

  // Botão próximo
  botaoProximo: {
    position: 'absolute',
    bottom: 36,
    right: 28,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: cor.botao,
    alignItems: 'center',
    justifyContent: 'center',
  },
  setaTexto: {
    color: cores.branco,
    fontSize: 32,
    lineHeight: 36,
    marginTop: -2,
  },
})