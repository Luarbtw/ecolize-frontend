import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import { cores } from '../../constants/cores'

const { width, height } = Dimensions.get('window')
const cor = cores.verde

export default function Slide1({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Área da ilustração */}
      <View style={styles.ilustracaoContainer}>

        {/* Blob verde escuro */}
        <Image
          source={require('../../../assets/images/onboarding/vector1.png')}
          style={styles.blob}
          resizeMode="contain"
        />

        {/* Sol amarelo */}
        <View style={styles.sol} />

        {/* Homem + árvore */}
        <Image
          source={require('../../../assets/images/onboarding/homem_arvore.png')}
          style={styles.ilustracao}
          resizeMode="contain"
        />

      </View>

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
          Controle sua casa.{'\n'}Salve o Planeta.
        </Text>

        <Text style={styles.descricao}>
          O <Text style={styles.destaque}>Ecolize</Text> é o seu aliado na gestão de recursos.
          Monitore seus gastos de energia e água em tempo real, economize no fim
          do mês e ajude a combater a crise climática através do consumo consciente.
        </Text>
      </View>

      {/* Dots centralizados */}
      <View style={styles.dots}>
        <View style={[styles.dot, styles.dotAtivo]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      {/* Botão canto inferior direito */}
      <TouchableOpacity
        style={styles.botaoProximo}
        onPress={() => navigation.navigate('Slide2')}
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
    height: height * 0.55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blob: {
    position: 'absolute',
    width: width * 1.05,
    height: width * 1.05,
    top: height * 0.07,
    alignSelf: 'center',
  },
  sol: {
    position: 'absolute',
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#F5A623',
    top: height * 0.11,
    right: 10,
  },
  ilustracao: {
    position: 'absolute',
    width: width * 0.95,
    height: width * 0.95,
    bottom: -45 ,
    alignSelf: 'center',
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
    paddingTop: 50,
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

  // Dots centralizados
  dots: {
  position: 'absolute',
  bottom: 44,  // 926 - 882 = 44px do fundo
  left: 0,
  right: 0,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,  // era 8, agora 16
  },
  dot: {
  width: 16,       // era 8, agora pílula menor
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
    bottom: 50,
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