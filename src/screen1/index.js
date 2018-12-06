import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import { STARGATE_HOME, STARGATE_DETAILS } from '../constants/routes'

const AppNavigator = createStackNavigator(
  {
    [STARGATE_HOME]: HomeScreen ,
    [STARGATE_DETAILS]: DetailsScreen
  },
  {
    headerMode: 'none'
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
