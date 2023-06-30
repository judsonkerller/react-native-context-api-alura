import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { estilos } from './estilos';
import { TemaContext } from '../../contexts/TemaContext';

export function Button({ title, onPress }) {
   const { temaEscolhido } = useContext(TemaContext);
   const estilo = estilos(temaEscolhido);
   return (
      <TouchableOpacity style={estilo.botao} onPress={onPress}>
         <Text style={estilo.botaoTexto}>{title}</Text>
      </TouchableOpacity>
   )
}