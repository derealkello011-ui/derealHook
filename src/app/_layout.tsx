import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack screenOptions={{
      headerShown: false, 
      animation: 'ios_from_left'
    }}>
      <Stack.Screen name='screens/useStateScreen' />
    </Stack>
  )
}

export default RootLayout