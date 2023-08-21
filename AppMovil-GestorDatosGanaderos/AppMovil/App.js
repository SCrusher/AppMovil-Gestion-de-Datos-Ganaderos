import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { LogBox, TouchableOpacity } from 'react-native';
import Menu from './src/screens/Menu';
import Inicio from './src/screens/Inicio';
import OpcionesMarcaCorral from './src/screens/OpcionesMarcaCorral';
LogBox.ignoreLogs([
  "Overwriting fontFamily style attribute preprocessor"
]);


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name='Home'
          component={Inicio} options={{ headerShown: false }}
        />
        <Stack.Screen name='OpcionesMarcaCorral' component={OpcionesMarcaCorral}
          options={{
            title: "Selecciona Marca y Corral",
            headerStyle: {
              backgroundColor: "#00713d",
            },
            headerTitleStyle:{ color: "#ffffff"}
          }}
        />
        <Stack.Screen name='Lectura Aretes' component={Menu}
          options={{
            title: "Lectura Aretes",
            headerStyle: {
              backgroundColor: "#00713d",
            },
            headerTitleStyle:{ color: "#ffffff"}
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App