import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import backArrow from '../../assets/backArrow.png';
import styles from '../estilos/TelaHistoricoEstilos';
import HistoricoImage from '../../assets/historico.png';

const TelaHistorico = ({ navigation }) => {

  const handleGoToInicial = () => {
    navigation.navigate('TelaInicial');
  };

  const id_historico = "1"
  const data = "15/12/2024"
  const hora = "13:08"
  const nomePlanta = "Samambaia"

  const id_historico2 = "2"
  const data2 = "21/12/2024"
  const hora2 = "19:16"
  const nomePlanta2 = "Orquídea"

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoToInicial}>
        <Image style={styles.backStyle} source={backArrow} />
      </TouchableOpacity>
      <Text style={styles.titulo}>Histórico de Irrigações</Text>
      <Image style={styles.logoHistorico} source={HistoricoImage} />

      <View style={styles.itemContainer}>
        <Text style={styles.textoItem}>ID: {id_historico}</Text>
        <Text style={styles.textoItem}>Data: {data}</Text>
        <Text style={styles.textoItem}>Hora: {hora}</Text>
        <Text style={styles.textoItem}>Planta: {nomePlanta}</Text>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.textoItem}>ID: {id_historico2}</Text>
        <Text style={styles.textoItem}>Data: {data2}</Text>
        <Text style={styles.textoItem}>Hora: {hora2}</Text>
        <Text style={styles.textoItem}>Planta: {nomePlanta2}</Text>
      </View>
    </View>
  );
};

export default TelaHistorico;