import { useMemo, useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

import ElevatedCard from '../../components/home/ElevatedCard'
import HomeFeatureScreen from '../../components/home/HomeFeatureScreen'
import ScreenHero from '../../components/home/ScreenHero'

const trendUpIcon = require('../../../assets/images/home/trendUp.png')
const errorIcon = require('../../../assets/images/home/error.png')
const waterIcon = require('../../../assets/images/home/water.png')
const energyIcon = require('../../../assets/images/home/energy.png')
const chevronRightIcon = require('../../../assets/images/home/chevronRight.png')

const INITIAL_GOALS = {
  water: 15000,
  energy: 250,
}

const GOAL_CONFIG = {
  water: {
    title: 'Água',
    subtitle: 'Limite em litros (L).',
    icon: waterIcon,
    iconTint: '#DDF0FB',
    pillBackground: '#E5F3FB',
    valueStep: 500,
    minValue: 5000,
    currencyPerUnit: 67.7 / 15000,
  },
  energy: {
    title: 'Energia',
    subtitle: 'Limite em kWh.',
    icon: energyIcon,
    iconTint: '#FFF3CC',
    pillBackground: '#FFF6CF',
    valueStep: 10,
    minValue: 100,
    currencyPerUnit: 0.88,
  },
}

function formatCurrency(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

function GoalStepperCard({ title, subtitle, icon, iconTint, pillBackground, value, cost, onChange }) {
  return (
    <ElevatedCard style={styles.goalCard}>
      <View style={styles.goalHeader}>
        <View style={[styles.goalIconWrap, { backgroundColor: iconTint }]}>
          <Image source={icon} style={styles.goalIcon} resizeMode="contain" />
        </View>

        <View style={styles.goalTitleBlock}>
          <Text style={styles.goalTitle}>{title}</Text>
          <Text style={styles.goalSubtitle}>{subtitle}</Text>
        </View>
      </View>

      <View style={[styles.stepperPill, { backgroundColor: pillBackground }]}>
        <Text style={styles.stepperValue}>{value}</Text>

        <View style={styles.stepperControls}>
          <Pressable hitSlop={8} onPress={() => onChange(1)} style={styles.stepperButton}>
            <Image
              source={chevronRightIcon}
              style={[styles.stepperChevron, styles.stepperChevronUp]}
              resizeMode="contain"
            />
          </Pressable>

          <Pressable hitSlop={8} onPress={() => onChange(-1)} style={styles.stepperButton}>
            <Image
              source={chevronRightIcon}
              style={[styles.stepperChevron, styles.stepperChevronDown]}
              resizeMode="contain"
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.goalDivider} />

      <View style={styles.goalFooter}>
        <Text style={styles.goalCostLabel}>Custo estimado:</Text>
        <Text style={styles.goalCostValue}>{cost}</Text>
      </View>
    </ElevatedCard>
  )
}

export default function GoalsScreen({ navigation }) {
  const [goals, setGoals] = useState(INITIAL_GOALS)

  const costs = useMemo(
    () => ({
      water: formatCurrency(goals.water * GOAL_CONFIG.water.currencyPerUnit),
      energy: formatCurrency(goals.energy * GOAL_CONFIG.energy.currencyPerUnit),
    }),
    [goals]
  )

  function handleGoalChange(resourceKey, direction) {
    const config = GOAL_CONFIG[resourceKey]

    setGoals((current) => ({
      ...current,
      [resourceKey]: Math.max(
        config.minValue,
        current[resourceKey] + config.valueStep * direction
      ),
    }))
  }

  return (
    <HomeFeatureScreen
      activeKey="goals"
      onHomePress={() => navigation.navigate('Home')}
      onTrophyPress={() => navigation.navigate('Ranking')}
      onProfilePress={() => navigation.navigate('Profile')}
    >
      <ScreenHero
        title="Metas"
        subtitle="Ajuste seus limites mensais."
        accentIcon={trendUpIcon}
        onBackPress={() => navigation.goBack()}
      />

      <View style={styles.tipCardWrap}>
        <View style={styles.tipShadow} />
        <View style={styles.tipCard}>
          <View style={styles.tipIconWrap}>
            <Image source={errorIcon} style={styles.tipIcon} resizeMode="contain" />
          </View>

          <View style={styles.tipTextBlock}>
            <Text style={styles.tipTitle}>Dica Ecolize</Text>
            <Text style={styles.tipDescription}>
              Tente reduzir 10% da sua meta anterior para um desafio sustentavel e possivel.
            </Text>
          </View>
        </View>
      </View>

      <GoalStepperCard
        title={GOAL_CONFIG.water.title}
        subtitle={GOAL_CONFIG.water.subtitle}
        icon={GOAL_CONFIG.water.icon}
        iconTint={GOAL_CONFIG.water.iconTint}
        pillBackground={GOAL_CONFIG.water.pillBackground}
        value={goals.water}
        cost={costs.water}
        onChange={(direction) => handleGoalChange('water', direction)}
      />

      <GoalStepperCard
        title={GOAL_CONFIG.energy.title}
        subtitle={GOAL_CONFIG.energy.subtitle}
        icon={GOAL_CONFIG.energy.icon}
        iconTint={GOAL_CONFIG.energy.iconTint}
        pillBackground={GOAL_CONFIG.energy.pillBackground}
        value={goals.energy}
        cost={costs.energy}
        onChange={(direction) => handleGoalChange('energy', direction)}
      />
    </HomeFeatureScreen>
  )
}

const styles = StyleSheet.create({
  tipCardWrap: {
    marginTop: 30,
    marginHorizontal: 45,
  },
  tipShadow: {
    position: 'absolute',
    top: 8,
    left: 9,
    right: 9,
    bottom: -8,
    borderRadius: 38,
    backgroundColor: '#000000',
    opacity: 0.08,
  },
  tipCard: {
    borderRadius: 34,
    backgroundColor: '#1CBD84',
    paddingVertical: 24,
    paddingHorizontal: 26,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  tipIconWrap: {
    width: 72,
    height: 72,
    borderRadius: 18,
    backgroundColor: '#15C98A',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },
  tipIcon: {
    width: 38,
    height: 38,
    tintColor: '#FFFFFF',
  },
  tipTextBlock: {
    flex: 1,
    marginLeft: 16,
  },
  tipTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    lineHeight: 22,
    fontFamily: 'Poppins_700Bold',
  },
  tipDescription: {
    marginTop: 8,
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
  },
  goalCard: {
    marginTop: 28,
    marginHorizontal: 45,
    paddingTop: 24,
    paddingHorizontal: 28,
    paddingBottom: 22,
  },
  goalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goalIconWrap: {
    width: 62,
    height: 62,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  goalIcon: {
    width: 32,
    height: 32,
  },
  goalTitleBlock: {
    flex: 1,
    marginLeft: 16,
  },
  goalTitle: {
    color: '#1E293B',
    fontSize: 18,
    lineHeight: 24,
    fontFamily: 'Poppins_700Bold',
  },
  goalSubtitle: {
    marginTop: 6,
    color: '#64748B',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
  },
  stepperPill: {
    alignSelf: 'center',
    width: '78%',
    minHeight: 68,
    borderRadius: 34,
    marginTop: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 28,
    paddingRight: 20,
  },
  stepperValue: {
    color: '#1E293B',
    fontSize: 22,
    lineHeight: 26,
    fontFamily: 'Poppins_700Bold',
  },
  stepperControls: {
    gap: 4,
  },
  stepperButton: {
    width: 26,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepperChevron: {
    width: 15,
    height: 15,
  },
  stepperChevronUp: {
    transform: [{ rotate: '90deg' }],
  },
  stepperChevronDown: {
    transform: [{ rotate: '-90deg' }],
  },
  goalDivider: {
    marginTop: 24,
    height: 2,
    borderRadius: 999,
    backgroundColor: '#E5EAF0',
  },
  goalFooter: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  goalCostLabel: {
    color: '#64748B',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
  },
  goalCostValue: {
    color: '#1E293B',
    fontSize: 18,
    lineHeight: 22,
    fontFamily: 'Poppins_700Bold',
  },
})
