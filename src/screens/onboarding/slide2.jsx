import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import { cores } from '../../constants/cores'

const { height } = Dimensions.get('window')
const cor = cores.azul

export default function Slide2({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Ilustração */}
      <View style={[styles.ilustracao, { backgroundColor: cor.fundo }]}>
        {/* Descomente quando exportar do Figma:
        <Image
          source={require('../../../assets/images/slide2.png')}
          style={styles.imagem}
          resizeMode="contain"
        /> */}
        <Text style={styles.emoji}>📱</Text>
      </View>

      {/* Botão Voltar */}
      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.voltarTexto, { color: cor.titulo }]}>‹</Text>
      </TouchableOpacity>

      {/* Botão Pular */}
      <TouchableOpacity
        style={styles.botaoPular}
        onPress={() => navigation.navigate('Slide3')}
      >
        <Text style={styles.pularTexto}>Pular</Text>
      </TouchableOpacity>

      {/* Conteúdo */}
      <View style={styles.conteudo}>
        <Text style={[styles.titulo, { color: cor.titulo }]}>
          Controle total na{'\n'}palma da mão.
        </Text>

        <Text style={styles.descricao}>
          Defina metas mensais de gastos em Reais e acompanhe, em tempo real,
          quanto você já consumiu de água e luz.{' '}
          <Text style={{ fontWeight: '700' }}>Acabe</Text>
          {' '}com o susto na hora de abrir o boleto no fim do mês.
        </Text>

        {/* Rodapé */}
        <View style={styles.rodape}>
          <View style={styles.dots}>
            <View style={[styles.dot, { width: 8, backgroundColor: cores.cinzaClaro }]} />
            <View style={[styles.dot, { width: 24, backgroundColor: cor.dot }]} />
            <View style={[styles.dot, { width: 8, backgroundColor: cores.cinzaClaro }]} />
          </View>

          <TouchableOpacity
            style={[styles.botaoProximo, { backgroundColor: cor.botao }]}
            onPress={() => navigation.navigate('Slide3')}
          >
            <Text style={styles.setaTexto}>›</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundoClaro,
  },
  ilustracao: {
    width: '100%',
    height: height * 0.50,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  imagem: {
    width: '100%',
    height: '100%',
  },
  emoji: {
    fontSize: 100,
  },
  botaoVoltar: {
    position: 'absolute',
    top: 52,
    left: 20,
    zIndex: 10,
  },
  voltarTexto: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: '300',
  },
  botaoPular: {
    position: 'absolute',
    top: 56,
    right: 24,
    zIndex: 10,
  },
  pularTexto: {
    fontSize: 15,
    color: cores.cinzaClaro,
    fontWeight: '500',
  },
  conteudo: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 28,
    paddingBottom: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 36,
    marginBottom: 16,
  },
  descricao: {
    fontSize: 15,
    color: cores.textoEscuro,
    lineHeight: 24,
    flex: 1,
  },
  rodape: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
  botaoProximo: {
    width: 52,
    height: 52,
    borderRadius: 26,
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