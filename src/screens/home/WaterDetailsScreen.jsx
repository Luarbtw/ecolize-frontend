import ResourceDetailsScreen from './ResourceDetailsScreen'

const waterIcon = require('../../../assets/images/home/water.png')

const waterWeekBars = [
  { label: 'Seg', height: 123, active: false },
  { label: 'Ter', height: 146, active: false },
  { label: 'Quar', height: 123, active: false },
  { label: 'Qui', height: 108, active: false },
  { label: 'Sex', height: 138, active: false },
  { label: 'Sab', height: 174, active: true },
  { label: 'Dom', height: 153, active: false },
]

export default function WaterDetailsScreen({ navigation }) {
  return (
    <ResourceDetailsScreen
      navigation={navigation}
      title="Controle de Água"
      icon={waterIcon}
      currentValue="12.4m³"
      comparisonText="12% melhor que o mês passado"
      tipText="O pico no Sábado indica provável uso da máquina de lavar. Tente acumular mais roupas para uma única lavagem!"
      colors={{
        primary: '#0096C7',
        soft: '#E0F2FE',
      }}
      bars={waterWeekBars}
    />
  )
}
