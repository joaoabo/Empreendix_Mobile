import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';

function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Esta funcionando! Ainda continua</Text>
      <Text>Apenas atualizando!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    color: "#fff"
  }
});

export default App;
