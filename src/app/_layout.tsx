import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack screenOptions={{
      headerShown: false, 
      animation: 'ios_from_left'
    }}/>
  )
}

export default RootLayout