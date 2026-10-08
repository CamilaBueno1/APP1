import {StyleSheet, Text, TouchableOpacity} from "react-native";
type SimpleTouchableOpacityProps ={
    title: string;
    onPress: () => void;

}

export default function SingleTouchableButton({
    title,
    onPress
}: SimpleTouchableOpacityProps){
    return(
        <TouchableOpacity onPress ={onPress} 
        style={styles.button}>
            <Text style={styles.text}>{title}</Text>

        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    button:{
        marginTop: 12,//margen externo separa el boton de lo que este arriba 
        backgroundColor: '#b3cc59',//color de fondo boton 
        paddingVertical: 10,//espacio internio entre el borde del boton y su contenido
        paddingHorizontal: 16,//espacio interno de izquierda a derecha entre el boton y el texto 
        borderRadius: 8,//redondear esquinas 
    },
    text:{
        color: '#a12222',
        fontSize: 16,
        fontWeight: '600',
    }
})