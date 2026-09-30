import { Stack, useTheme } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const UseEffectScreen = () => {
  const { colors } = useTheme();
  const [ count, setCount ] = useState( 0 );
  useEffect( () => {
    setTimeout( () => {
      setCount( count => count + 1 );
    }, 2000)
  })
  return (
    <View style={[ styles.screen, { backgroundColor: colors.background } ]}>
      <Stack.Screen
        options={{ headerShown: true, title: 'useStateHook', headerBackTitle: '' }}
      />
      <Text>I have rendered { count } times </Text>
    </View>
  )
}

export default UseEffectScreen

const styles = StyleSheet.create( {
  screen: {
    flex: 1,
  },
  container: {
    padding: 5,
  },
  header: {
    fontSize: 18,
    fontWeight: '500',
  },
  buttonPress: {
    alignSelf: 'center',
    backgroundColor: 'blue',
    borderRadius: 15,
    margin: 10,
    padding: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#ffffff',
    paddingHorizontal: 10,
    fontSize: 20,
  },
} );