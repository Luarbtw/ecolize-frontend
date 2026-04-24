import { useMemo, useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

import ElevatedCard from '../../components/home/ElevatedCard'
import HomeFeatureScreen from '../../components/home/HomeFeatureScreen'
import ScreenHero from '../../components/home/ScreenHero'

const chartIcon = require('../../../assets/images/home/barChart.png')
const rankingCrownIcon = require('../../../assets/images/home/rankingCrown.png')
const rankingGroupIcon = require('../../../assets/images/home/rankingGroup.png')
const waterIcon = require('../../../assets/images/home/water.png')
const energyIcon = require('../../../assets/images/home/energy.png')

const RANKING_DATA = {
  water: {
    summary: {
      position: '#4',
      participants: '1.780',
    },
    items: [
      { name: 'Gustavo Pães', savings: '27% de economia', place: 1 },
      { name: 'César Sobreira', savings: '20% de economia', place: 2 },
      { name: 'Arthur Renato', savings: '17% de economia', place: 3 },
      { name: 'Julia Reis', savings: '5% de economia', place: 4 },
    ],
  },
  energy: {
    summary: {
      position: '#7',
      participants: '1.780',
    },
    items: [
      { name: 'Marina Duarte', savings: '24% de economia', place: 1 },
      { name: 'Gustavo Pães', savings: '21% de economia', place: 2 },
      { name: 'Lívia Souza', savings: '18% de economia', place: 3 },
      { name: 'César Sobreira', savings: '9% de economia', place: 4 },
    ],
  },
}

const FILTERS = {
  water: {
    key: 'water',
    label: 'Água',
    icon: waterIcon,
    tint: '#1294C8',
    soft: '#E3F2FC',
  },
  energy: {
    key: 'energy',
    label: 'Energia',
    icon: energyIcon,
    tint: '#FFB703',
    soft: '#FFF6D5',
  },
}

function SummaryCard({ icon, label, value }) {
  return (
    <ElevatedCard style={styles.summaryCard}>
      <Image source={icon} style={styles.summaryIcon} resizeMode="contain" />

      <Text style={styles.summaryLabel}>{label}</Text>
      <Text style={styles.summaryValue}>{value}</Text>
    </ElevatedCard>
  )
}

function FilterChip({ item, active, onPress }) {
  return (
    <Pressable
      style={[
        styles.filterChip,
        active && styles.filterChipActive,
        active && { backgroundColor: '#FFFFFF' },
      ]}
      onPress={onPress}
    >
      <Image
        source={item.icon}
        style={[styles.filterIcon, { tintColor: active ? item.tint : '#6B7A93' }]}
        resizeMode="contain"
      />
      <Text style={[styles.filterLabel, active && { color: item.tint }]}>{item.label}</Text>
    </Pressable>
  )
}

function RankBadge({ place }) {
  const palette =
    place === 1
      ? { stroke: '#FBBF24', fill: '#FFF6DB', text: '#F59E0B' }
      : place === 2
        ? { stroke: '#C98012', fill: '#FDE7C7', text: '#C98012' }
        : place === 3
          ? { stroke: '#BEB7AF', fill: '#F2EFEB', text: '#BEB7AF' }
          : { stroke: '#64748B', fill: '#F2F5F9', text: '#64748B' }

  if (place > 3) {
    return (
      <View style={styles.rankNumberWrap}>
        <Text style={styles.rankNumberText}>#{place}</Text>
      </View>
    )
  }

  return (
    <View style={styles.rankBadgeWrap}>
      <View style={[styles.rankBadgeCircle, { borderColor: palette.stroke, backgroundColor: palette.fill }]}>
        <Text style={[styles.rankBadgeText, { color: palette.text }]}>{place}</Text>
      </View>
      <View style={[styles.rankRibbon, { backgroundColor: palette.stroke }]} />
    </View>
  )
}

function RankingRow({ item }) {
  return (
    <ElevatedCard style={styles.rankingRowCard}>
      <RankBadge place={item.place} />

      <View style={styles.rankingTextBlock}>
        <Text style={styles.rankingName}>{item.name}</Text>
        <Text style={styles.rankingSavings}>{item.savings}</Text>
      </View>
    </ElevatedCard>
  )
}

export default function RankingScreen({ navigation }) {
  const [activeFilter, setActiveFilter] = useState('water')

  const activeData = useMemo(() => RANKING_DATA[activeFilter], [activeFilter])

  return (
    <HomeFeatureScreen
      activeKey="trophy"
      onHomePress={() => navigation.navigate('Home')}
      onGoalsPress={() => navigation.navigate('Goals')}
      onProfilePress={() => navigation.navigate('Profile')}
    >
      <ScreenHero
        title="Rankings"
        subtitle="Compare seu desempenho."
        accentIcon={chartIcon}
        accentStyle={styles.heroChartIcon}
        titleStyle={styles.heroTitleFix}
        onBackPress={() => navigation.goBack()}
      />

      <View style={styles.summaryRow}>
        <SummaryCard
          icon={rankingCrownIcon}
          label="Posição Geral"
          value={activeData.summary.position}
        />

        <SummaryCard
          icon={rankingGroupIcon}
          label="Participantes"
          value={activeData.summary.participants}
        />
      </View>

      <View style={styles.filterWrap}>
        {Object.values(FILTERS).map((item) => (
          <FilterChip
            key={item.key}
            item={item}
            active={item.key === activeFilter}
            onPress={() => setActiveFilter(item.key)}
          />
        ))}
      </View>

      <View style={styles.rankingList}>
        {activeData.items.map((item) => (
          <RankingRow key={`${activeFilter}-${item.place}-${item.name}`} item={item} />
        ))}
      </View>
    </HomeFeatureScreen>
  )
}

const styles = StyleSheet.create({
  heroChartIcon: {
    width: 42,
    height: 42,
    tintColor: '#1CBD84',
  },
  heroTitleFix: {
    lineHeight: 42,
  },
  summaryRow: {
    marginTop: 34,
    marginHorizontal: 45,
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 16,
  },
  summaryCard: {
    flex: 1,
    aspectRatio: 1,
    minHeight: 176,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 22,
    paddingHorizontal: 14,
    paddingBottom: 18,
  },
  summaryIcon: {
    width: 54,
    height: 54,
  },
  summaryLabel: {
    marginTop: 12,
    color: '#64748B',
    fontSize: 16,
    lineHeight: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
  summaryValue: {
    marginTop: 8,
    color: '#1E293B',
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Poppins_700Bold',
    textAlign: 'center',
  },
  filterWrap: {
    marginTop: 28,
    marginHorizontal: 45,
    padding: 8,
    borderRadius: 34,
    backgroundColor: '#DCE5F1',
    flexDirection: 'row',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  filterChip: {
    flex: 1,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  filterChipActive: {
    backgroundColor: '#FFFFFF',
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
  filterLabel: {
    color: '#6B7A93',
    fontSize: 17,
    lineHeight: 20,
    fontFamily: 'Poppins_700Bold',
  },
  rankingList: {
    marginTop: 30,
    marginHorizontal: 45,
    gap: 12,
  },
  rankingRowCard: {
    minHeight: 88,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 32,
  },
  rankBadgeWrap: {
    width: 58,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rankBadgeCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rankBadgeText: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'Poppins_700Bold',
  },
  rankRibbon: {
    marginTop: -2,
    width: 20,
    height: 14,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  rankNumberWrap: {
    width: 58,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rankNumberText: {
    color: '#64748B',
    fontSize: 18,
    lineHeight: 22,
    fontFamily: 'Poppins_700Bold',
  },
  rankingTextBlock: {
    flex: 1,
    marginLeft: 14,
  },
  rankingName: {
    color: '#1E293B',
    fontSize: 17,
    lineHeight: 21,
    fontFamily: 'Poppins_600SemiBold',
  },
  rankingSavings: {
    marginTop: 6,
    color: '#1CBD84',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '500',
  },
})
