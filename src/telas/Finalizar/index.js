import {
   View,
   StatusBar,
} from "react-native";
import { estilos } from "./estilos";
import { useContext } from "react";
import { TemaContext } from "../../contexts/TemaContext";
import { Button } from "../../componentes/Button";

export default function Finalizar({ navigation }) {
   // Contextos adicionados
   const { temaEscolhido } = useContext(TemaContext);
   const estilo = estilos(temaEscolhido);

   return (
      <View style={estilo.container}>
         <StatusBar />
         <Button title="Finalizar" onPress={() => navigation.navigate('Principal')} />
      </View>
   );
}
