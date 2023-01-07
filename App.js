import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './App/store'
import { Provider } from 'react-redux'
import { 
  SplashScreen,
  LoginScreen,
  HomeScreen,
  RegisterScreen,
  EhcScreen,
  EhcFormScreen,
  EhcListScreen
} from './App/pages'

const Stack = createNativeStackNavigator();

const  App = ()=> {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown: false}}/>
          <Stack.Screen name="EhcScreen" component={EhcScreen} options={{headerShown: false}}/>
          <Stack.Screen name="EhcFormScreen" component={EhcFormScreen} options={{title:'e-HAC Form'}}/>
          <Stack.Screen name="EhcListScreen" component={EhcListScreen} options={{title:'My e-HAC'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;