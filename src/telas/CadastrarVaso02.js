import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import backArrow from '../../assets/backArrow.png';
import vasoImage from '../../assets/vaso.png';
import CadastrarStyle from '../estilos/CadastrarVasoEstilos.js';

const CadastrarVaso01 = ({navigation}) => {
 const handleGoToPlantas = () => {
    navigation.navigate('TelaPlantas');
 };
  const [planta, setPlanta] = useState('Planta 01');
 const [erro, setErro] = useState(null);
 const atualizarIdPlanta = async () => {
  Alert.alert(
    "Alert",
    "Vaso cadastrado com sucesso!",
  );
  if (planta == "1") {
    setErro('Por favor, selecione uma planta e um vaso.');
    return;
  }
};
  
  return (
    <View style={CadastrarStyle.container}>
      <TouchableOpacity onPress={handleGoToPlantas}>
            <Image style={CadastrarStyle.backStyle} source={backArrow} />
      </TouchableOpacity>
      <Text style={CadastrarStyle.titulo}>Cadastrar vaso 02</Text>
      <Image style={CadastrarStyle.config} source={vasoImage}/>
      <View style={CadastrarStyle.secao}>
        <Text style={CadastrarStyle.label}>Selecione a planta:</Text>
        <Picker
          selectedValue={planta}
          style={CadastrarStyle.picker}
          onValueChange={(itemValue) => setPlanta(itemValue)}
        >
        <Picker.Item label="Selecione uma Planta" value="" />
        <Picker.Item label="Samambaia" value="2" />
        <Picker.Item label="Bromélia" value="3" />
        <Picker.Item label="Suculenta" value="4" />
        <Picker.Item label="Orquídea" value="5" />
        </Picker>
      </View>

      <TouchableOpacity style={CadastrarStyle.button} onPress={atualizarIdPlanta}>
        <Text style={CadastrarStyle.buttonText}>Cadastrar Planta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CadastrarVaso01;