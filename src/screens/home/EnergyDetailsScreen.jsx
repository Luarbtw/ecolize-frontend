import ResourceDetailsScreen from './ResourceDetailsScreen'

const energyIcon = require('../../../assets/images/home/energy.png')

const energyWeekBars = [
  { label: 'Seg', height: 112, active: false },
  { label: 'Ter', height: 136, active: false },
  { label: 'Quar', height: 124, active: false },
  { label: 'Qui', height: 104, active: false },
  { label: 'Sex', height: 132, active: false },
  { label: 'Sab', height: 174, active: true },
  { label: 'Dom', height: 152, active: false },
]

export default function EnergyDetailsScreen({ navigation }) {
  return (
    <ResourceDetailsScreen
      navigation={navigation}
      title="Controle de Luz"
      icon={energyIcon}
      currentValue="165 kWh"
      comparisonText="8% melhor que o mês passado"
      tipText="O pico no Sábado indica provável uso de equipamentos de alto consumo. Evite ligar vários aparelhos ao mesmo tempo."
      colors={{
        primary: '#FFB703',
        soft: '#FEF3C7',
      }}
      bars={energyWeekBars}
    />
  )
}
