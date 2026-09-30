import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

const TabLayout = () => {
  return (
      <Tabs>
          <Tabs.Screen name='index'
              options={{
                  headerShown: false,
                  title: 'Home',
                  tabBarIcon: ({focused, color, size}) => <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={size}  />
              }}
          />
          <Tabs.Screen
              name='details'
              options={{
                  headerShown: false,
                  title: 'Details',
                  tabBarIcon: ( {focused, color, size} ) => <Ionicons name={focused ? 'desktop-sharp': 'desktop-outline'} color={color} size={size} />
              }}
          />
    </Tabs>
  )
}

export default TabLayout