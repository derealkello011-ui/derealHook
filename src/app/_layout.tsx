import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack screenOptions={{
      headerShown: false, 
      animation: 'ios_from_left'
    }}>
      <Stack.Screen name='(tabs)' />
      <Stack.Screen
        name='(screens)/useRefScreen'
          options={{ headerShown: true, title: 'useRef', headerBackTitle: 'Back' }}
        />
    </Stack>
  )
}

export default RootLayout