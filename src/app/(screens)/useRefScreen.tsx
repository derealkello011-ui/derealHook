import { useTheme } from 'expo-router';
import { Button } from 'expo-router/build/react-navigation';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const UseRefScreen = () => {
    const { colors } = useTheme();
    const [ value, setValue ] = useState( 0 );
    const count = useRef( 0 );

    useEffect( () => {
        count.current = count.current + 1;
    } );

    return (
      
      <View style={[ styles.screen, { backgroundColor: colors.background } ]}>
            <Button onPressIn={ () => {setValue(prev => prev - 1)}}> - 1 </Button>
            <Text style={styles.textStyle}>{value}</Text>
            <Button onPressIn={() => { setValue( prev => prev + 1 ) }} style={{ bottom: '80%' }}> + 1 </Button>
    </View>
  )
}

export default UseRefScreen

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
    textStyle: {
      fontWeight: '400',
      fontSize: 18,
      alignSelf: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      flex: 1,
      flexGrow: 2,
  }
} );