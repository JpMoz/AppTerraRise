import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, Alert, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import backArrow from '../../assets/backArrow.png';
import ConfigImage from '../../assets/historico1.png';
import ConfigStyles from '../estilos/TelaConfigEstilos.js';

const TelaConfig = ({navigation}) => {
 const handleGoToInicial = () => {
    navigation.navigate('TelaInicial');
 };

  const [data, setData] = useState(new Date());
  const [hora, setHora] = useState(new Date());
  const [vaso, setVaso] = useState('Vaso1');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  async function Salvar() {
    if (!data || !hora || !vaso) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
  }
  try {
      let reqs = await fetch("8080/agendar", {
          headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({
              data: data,
              hora: hora,
              vasos:vaso
          })
      });

      if (!reqs.ok) {
          throw new Error('Erro na requisição: ' + reqs.status);
      }

      let resposta = await reqs.json();
      Alert.alert('Sucesso', 'Agendamento Salvo ');
  } catch (error) {
      console.error('Erro ao cadastrar planta:', error);
      Alert.alert('Erro', 'Não foi possível salvar o Agendamento. Tente novamente.');
  }
    
  }
  return (
    <View style={ConfigStyles.container}>
      <TouchableOpacity onPress={handleGoToInicial}>
            <Image style={ConfigStyles.backStyle} source={backArrow} />
      </TouchableOpacity>
      <Text style={ConfigStyles.titulo}>Agendar Irrigação</Text>
      <Image style={ConfigStyles.config} source={ConfigImage}/>
      <View style={ConfigStyles.secao}>
        <Text style={ConfigStyles.label}>Selecione a Data:</Text>
        <Button
          title={data.toLocaleDateString()}
          onPress={() => setShowDatePicker(true)}
        />
        {showDatePicker && (
          <DateTimePicker
            value={data}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) setData(selectedDate);
            }}
          />
        )}
      </View>

      <View style={ConfigStyles.secao}>
        <Text style={ConfigStyles.label}>Selecione o Horário:</Text>
        <Button
          title={hora.toLocaleTimeString()}
          onPress={() => setShowTimePicker(true)}
        />
        {showTimePicker && (
          <DateTimePicker
            value={hora}
            mode="time"
            display="default"
            onChange={(event, selectedTime) => {
              setShowTimePicker(false);
              if (selectedTime) setHora(selectedTime);
            }}
          />
        )}
      </View>

      <View style={ConfigStyles.secao}>
        <Text style={ConfigStyles.label}>Selecione o Vaso:</Text>
        <Picker
          selectedValue={vaso}
          style={ConfigStyles.picker}
          onValueChange={(itemValue) => setVaso(itemValue)}
        >
          <Picker.Item label="Vaso 01" value="Vaso1" />
          <Picker.Item label="Vaso 02" value="Vaso2" />
        </Picker>
      </View>

      <Button title="Salvar" onPress={Salvar} />
    </View>
  );
};

export default TelaConfig;