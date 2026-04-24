import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const backArrowIcon = require('../../../assets/images/home/backArrowSmall.png')
const chevronRightIcon = require('../../../assets/images/home/chevronRight.png')

const personalInfoItems = [
  { label: 'Foto de perfil' },
  { label: 'Nome', value: 'Mariana Reis' },
  { label: 'Data de nascimento', value: '08/06/2004' },
  { label: 'Gênero', value: 'Feminino' },
  { label: 'País/estado', value: 'Brasil, Amazonas' },
]

function InfoRow({ label, value, isLast, onPress }) {
  return (
    <Pressable style={[styles.row, !isLast && styles.rowDivider]} onPress={onPress}>
      <Text style={styles.rowLabel}>{label}</Text>

      <View style={styles.rowRight}>
        {value ? <Text style={styles.rowValue}>{value}</Text> : null}
        <Image source={chevronRightIcon} style={styles.chevronTrailingIcon} resizeMode="contain" />
      </View>
    </Pressable>
  )
}

export default function PersonalInfoScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <View style={styles.headerRow}>
            <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
              <Image source={backArrowIcon} style={styles.backIcon} resizeMode="contain" />
            </Pressable>

            <Text style={styles.headerTitle}>Informações pessoais</Text>

            <View style={styles.headerSpacer} />
          </View>

          <View style={styles.listWrap}>
            <View style={styles.sectionDivider} />

            {personalInfoItems.map((item, index) => (
              <InfoRow
                key={item.label}
                {...item}
                isLast={index === personalInfoItems.length - 1}
              />
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
    paddingTop: 62,
    paddingBottom: 60,
  },
  headerRow: {
    marginHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: 25,
    height: 25,
  },
  headerTitle: {
    color: '#1E293B',
    fontSize: 20,
    lineHeight: 26,
    fontFamily: 'Poppins_700Bold',
    textAlign: 'center',
  },
  headerSpacer: {
    width: 42,
    height: 42,
  },
  listWrap: {
    marginTop: 24,
    marginHorizontal: 45,
  },
  sectionDivider: {
    height: 1,
    backgroundColor: '#D9E3EE',
  },
  row: {
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  rowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: '#D9E3EE',
  },
  rowLabel: {
    color: '#1E293B',
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'Poppins_600SemiBold',
  },
  rowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  rowValue: {
    color: '#64748B',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
  },
  chevronTrailingIcon: {
    width: 16,
    height: 16,
    transform: [{ scaleX: -1 }],
  },
})
