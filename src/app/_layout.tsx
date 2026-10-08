//Importar un slot desde expo router.
//Slot es un componente que servira como  espacio donde se va a renderizar la pantalla "activa" segun la ruta
import { Slot,Stack } from "expo-router";
//layout raiz de la app 
//este componente envuelve todas las rutas y vistas dentro de la carpeta app
export default function RootLayout() {
  return <Slot />;
}