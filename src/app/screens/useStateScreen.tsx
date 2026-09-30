import { Stack, useTheme } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface CarProps {
  brand: string;
  model: string;
  year: string;
  color: 'red' | 'blue';
}

const UseStateScreen = () => {
  const { colors } = useTheme();

  const [ car, setCar ] = useState<CarProps>( {
    brand: 'Ferrari',
    model: 'Roma',
    year: '2023',
    color: 'red',
  } );

  const [ count, setCount ] = useState( 0 );

  const increaseCount = () => {
    setCount( count => count + 1 );
  }

  // Derived from state, so it can never get out of sync
  const isBlue = car.color === 'blue';

  const changeColor = () => {
    setCar( ( prev ) => ( {
      ...prev,
      color: prev.color === 'blue' ? 'red' : 'blue',
    } ) );
  };

  return (
    <View style={[ styles.screen, { backgroundColor: colors.background } ]}>
      <Stack.Screen
        options={{ headerShown: true, title: 'useStateHook', headerBackTitle: 'Back' }}
      />

      <View style={styles.container}>
        <Text style={[ styles.header, { color: colors.text } ]}>
          I have a {car.color} new {car.brand} {car.model}
        </Text>
        <Pressable style={styles.buttonPress} onPress={changeColor}>
          <Text style={styles.buttonText}>{isBlue ? 'Red' : 'Blue'}</Text>
        </Pressable>
      </View>

      <View style={styles.container}>
        <Text style={[ styles.header, { borderColor: colors.text } ]}> Count: {count}</Text>
        <Pressable style={[styles.buttonPress, {borderColor: 'red', borderWidth: 2,}]} onPress={increaseCount}>
          <Text style={styles.buttonText}>Increase</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UseStateScreen;

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
