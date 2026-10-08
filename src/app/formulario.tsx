import { Text, TextInput, View,Button } from "react-native";
import {router} from "expo-router";
export default function Formulario() {
    return(
        <View >
            <Text>Nombre </Text>
            <TextInput style={styles.input}/>
            <Text>Apellido</Text>
            <TextInput style={styles.input}/>
            <Text>Materia</Text>
            <TextInput style = {styles.input}/>
            <Button  title="Volver" onPress={() => router.back()}/>
        </View>
    )
}

const styles = {
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
}
}
