import { Alert, Button, Image, StyleSheet, Text, View, TextInput } from "react-native";
import SimpleTouchableButton from "../components/simple-touchable-button";
import { router } from "expo-router";

const App = () => {
  return (
    <View style = {styles.container}>
      <Text style ={styles.tittle}>Hola Mundo</Text>
      <Image source={require('../../assets/images/buho.jpg')} style ={styles.image} />
      <Button color ='red'
      title='Presioname'
      onPress={() => Alert.alert('Hola EPN') }
      ></Button>
      <SimpleTouchableButton 
      title="Touchable reutilizable" 
      onPress={() => Alert.alert('Hola desde touchable Opacity')}/>
      <SimpleTouchableButton 
      title="Boton de navegacion" 
      onPress={() => router.push('/mensaje')}/>
      <SimpleTouchableButton 
      title="Boton de formulario" 
      onPress={() => router.push('/formulario')}/>
    </View>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d283'
  },
  tittle:{fontSize: 50, color:'#0a0909'},
  image: {height: 300, width: 350}
})
export default App;