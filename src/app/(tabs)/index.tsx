import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.viewHeader}>
          <Text style={styles.header}>Hooks Screen</Text>
        </View>

        <View style={styles.hookView} >
          <Text style={styles.textStyle}> Various Hooks: </Text>

          <TouchableOpacity style={styles.customBtn} onPress={() => router.push('/useStateScreen')}>
            <Text style={[styles.textStyle, styles.buttonText]}>useState</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.customBtn} onPress={() => router.push('/useEffectScreen')}>
            <Text style={[styles.textStyle, styles.buttonText]}>useEffect</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.customBtn} onPress={() => router.push('/useRefScreen')}>
            <Text style={[styles.textStyle, styles.buttonText]}>useRef</Text>
          </TouchableOpacity>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        paddingHorizontal: 4
    },
  header: {
        flex: 1,
        fontWeight: '600',
        fontSize: 30,
  },
  viewHeader: {
    flex: 1,
    alignContent: 'flex-start',
    padding: 3,
  },
  hookView: {
    alignContent: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '500'
  },
  customBtn: {
    marginVertical: 10,
    backgroundColor: '#4e4bfaf8',
    borderRadius: 12,
    paddingHorizontal: 10,

  },
  buttonText: {
    color: 'white',
    padding: 10,
  }
});
