import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import 'react-native-gesture-handler'
import {Host} from 'react-native-portalize'

import {HomeScreen, MyBooksScreen, SearchScreen} from './src/screens'
import {BookProvider} from './src/context'
import {TabParamList} from './src/types'

const Tab = createBottomTabNavigator<TabParamList>()

export const App = () => {
  return (
    <BookProvider>
      <NavigationContainer>
        <Host>
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName: string = 'help-circle-outline'

                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home-outline'
                } else if (route.name === 'Rechercher') {
                  iconName = focused ? 'search' : 'search-outline'
                } else if (route.name === 'Mes Livres') {
                  iconName = focused ? 'book' : 'book-outline'
                }

                return <Icon name={iconName} size={size} color={color} />
              },
              tabBarShowLabel: false,
              tabBarStyle: {
                backgroundColor: '#D5A55C',
                height: 60,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
                elevation: 0,
                zIndex: 4,
              },
              tabBarInactiveTintColor: '#fff',
              tabBarActiveTintColor: '#fff',
            })}>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Tab.Screen
              name="Rechercher"
              component={SearchScreen}
              options={{headerShown: false}}
            />
            <Tab.Screen
              name="Mes Livres"
              component={MyBooksScreen}
              options={{headerShown: false}}
            />
          </Tab.Navigator>
        </Host>
      </NavigationContainer>
    </BookProvider>
  )
}
