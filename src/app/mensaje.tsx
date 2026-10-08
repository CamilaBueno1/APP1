import {router} from "expo-router";
import { Button,View, Text } from "react-native";

export default function Mensaje() {
    return(
        <View >
            <Text>Esta es la nueva pagina de mensaje </Text>
            <Button  title="Volver" onPress={() => router.back()}/>
        </View>
    )
}


