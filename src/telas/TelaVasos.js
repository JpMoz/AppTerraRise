import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import backArrow from '../../assets/backArrow.png';
import vaso from '../../assets/vaso.png';
import VasosStyles from '../estilos/TelaVasosEstilos';

const TelaVasos = () => {
  const navigation = useNavigation();

  const handleGoToInicial = () => {
    navigation.navigate('TelaInicial');
  };
  const vasosCadastrados = [
    { id: '1', vaso: 'Vaso 01', planta: 'Rosa' },
    { id: '2', vaso: 'Vaso 02', planta: 'Margarida', id: '2' },
  ];

  const deletar01 = async () => {
    try {
      const response = await fetch("8080/vaso/${1}/${1}", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const resposta = await response.text();
      if (response.ok) {
        Alert.alert('Sucesso', resposta);
      } else {
        setErro('Erro ao atualizar ID da planta. Tente novamente.');
      }
    } catch (error) {
      setErro('Erro ao atualizar ID da planta. Tente novamente.');
    }
  };

  const deletar02 = async () => {
    try {
      const response = await fetch("8080/vaso/${2}/${1}", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      setErro('Erro ao atualizar ID da planta. Tente novamente.');
    }
  };
  const renderItem = ({ item }) => (
    <View style={VasosStyles.itemContainer}>
      <Text style={VasosStyles.textoItem}>Vaso: {item.vaso}</Text>
      <Text style={VasosStyles.textoItem}>Planta: {item.planta}</Text>
      <Text style={VasosStyles.textoItem}>Id: {item.id}</Text>
    </View>
  );

  const handleDeletar = () => {
    Alert.alert(
      "Deletar Vaso",
      "Informe o vaso que deseja deletar (Vaso 01 ou Vaso 02)",
      [
        { text: "Vaso 01", onPress: deletar01},
        { text: "Vaso 02", onPress: deletar02 }
      ]
    );
  };

  const handleAtualizar = () => {
    navigation.navigate('TelaPlantas');
  };

  return (
    <View style={VasosStyles.container}>
      <TouchableOpacity onPress={handleGoToInicial}>
        <Image style={VasosStyles.backStyle} source={backArrow} />
      </TouchableOpacity>
      <Text style={VasosStyles.title}>Vasos cadastrados</Text>       
      <FlatList
        data={vasosCadastrados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={VasosStyles.lista}
      />
      <TouchableOpacity style={VasosStyles.vasoButton1} onPress={handleAtualizar}>
        <Text style={VasosStyles.vasoText}>Atualizar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={VasosStyles.vasoButton2} onPress={handleDeletar}>
        <Text style={VasosStyles.vasoText}>Deletar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TelaVasos;