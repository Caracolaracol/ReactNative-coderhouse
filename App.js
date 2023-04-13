import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>!Hola Coder, esta es mi app. Planeo hacer una app de booking pero con lugares ficticios_</Text>
      <Text>Pieza disponible en mi casa en Tatooine</Text>
      <Text>Habitación de lujo en Minas Tirith</Text>
      <Text>Apartanento en Revachol</Text>
      <Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
