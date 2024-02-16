import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { NativeBaseProvider } from "native-base";

import FocusScreen from './screens/FocusScreen';
import HabitViewScreen from './screens/HabitViewScreen';
import PlanScreen from './screens/PlanScreen';
import ProfileScreen from './screens/ProfileScreen';
import store from './redux/store';

import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const mapHeaderNames = {
  Focus: { name: 'Focus', icon: 'ellipse-outline' },
  HabitView: { name: 'Habit', icon: 'create-outline' },
  Plan: { name: 'Plan', icon: 'calendar-outline' },
  Profile: { name: 'Profile', icon: 'person-circle-outline' },
};

export default function App() {
  return (
    <Provider store={store}>

      <NativeBaseProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName = mapHeaderNames[route.name].icon;

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
          >
            <Tab.Screen name="Focus" component={FocusScreen} />
            <Tab.Screen name="HabitView" component={HabitViewScreen} />
            <Tab.Screen name="Plan" component={PlanScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>

        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
