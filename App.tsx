import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import Routes from './src/app/routes/rotaMain';

function App() {

  return (
    <Routes/>
    // <View style={styles.container}>
    //   <Text style={styles.titulo}>Esta funcionando! Ainda continua</Text>
    //   <Text>Apenas atualizando!</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    color: "#fff",
    fontFamily: "PlayfairDisplay-Bold",
  }
});

export default App;
