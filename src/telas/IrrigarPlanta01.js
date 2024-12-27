import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import backArrow from '../../assets/backArrow.png'
import IrrigarPlantaImage from '../../assets/IrrigarPlanta.png'
import IrrigarPlantaStyle from '../estilos/IrrigarPlantaEstilos';

const IrrigarPlanta = ({ navigation, nomePlanta = "Samambaia", quantidadeRecomendada = 15 }) => {
  const handleGoToIrrigar = () =>{
    navigation.navigate('TelaIrrigar')
  }

  const [quantidadeAgua, setQuantidadeAgua] = useState('');

  const irrigarPlanta = () => {
    if (quantidadeAgua === '' || isNaN(quantidadeAgua)) {
      Alert.alert("Erro", "Por favor, insira uma quantidade válida de água.");
      return;
    }

    Alert.alert(
      "Irrigação",
      `Você despejou ${quantidadeAgua}ml de água na planta "${nomePlanta}".`
    );
    setQuantidadeAgua('');
  };

  return (
    <View style={IrrigarPlantaStyle.container}>
      <TouchableOpacity onPress={handleGoToIrrigar}>
        <Image style={IrrigarPlantaStyle.backStyle} source={backArrow}></Image>
      </TouchableOpacity>
      <Text style={IrrigarPlantaStyle.titulo}>Vaso 01</Text>
      <Image style={IrrigarPlantaStyle.logoPlanta} source={IrrigarPlantaImage}></Image>
      <Text style={IrrigarPlantaStyle.nomePlanta}>Planta: {nomePlanta}</Text>
      <Text style={IrrigarPlantaStyle.quantidadeRecomendada}>
        Quantidade Recomendada: {quantidadeRecomendada}ml
      </Text>
      <TextInput
        style={IrrigarPlantaStyle.input}
        placeholder="Digite a quantidade de água (ml)"
        keyboardType="numeric"
        value={quantidadeAgua}
        onChangeText={setQuantidadeAgua}
      />
      <TouchableOpacity style={IrrigarPlantaStyle.button} onPress={irrigarPlanta}>
          <Text style={IrrigarPlantaStyle.buttonText}>Irrigar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IrrigarPlanta;
