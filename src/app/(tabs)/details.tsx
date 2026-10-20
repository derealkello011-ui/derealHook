import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DetailsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.header}> Animations Screen</Text>
                <Text style={styles.textStyle}>This is the Details Page</Text>
            </View>
        </SafeAreaView>
    );
}

export default DetailsScreen;

const styles = StyleSheet.create( {
    container: {
        paddingHorizontal: 5
    },
    header: {
        fontWeight: '600',
        fontSize: 30,
    },
    textStyle: {
        position: 'relative'
    },

});
