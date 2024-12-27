import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import backArrow from '../../assets/backArrow.png';
import vasoImage from '../../assets/vaso.png';
import reservatorioImage from '../../assets/reservatorio.png';
import styles from '../estilos/TelaChecarEstilos.js';

const TelaChecar = ({navigation}) => {
    const handleGoToInicial = () => {
        navigation.navigate('TelaInicial');
  };

  const handleCheckReservoir = () => {
    alert('Checando nível do reservatório...');
  };

  const handleCheckVaso = (vaso) => {
    alert(`Checando nível de umidade do ${vaso}...`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoToInicial}>
            <Image style={styles.backStyle} source={backArrow} />
      </TouchableOpacity>
      <Text style={styles.title}>Checar Níveis</Text>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Nível do Reservatório</Text>
        <Image style={styles.imageChecar} source={reservatorioImage} />
        <View style={styles.reservoirStatus}>
          <Text style={styles.statusText}>Sensor Cheio: Ativo</Text>
          <Text style={styles.statusText}>Sensor Vazio: Inativo</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleCheckReservoir}>
          <Text style={styles.buttonText}>Checar Reservatório</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Nível de Umidade dos Vasos</Text>
        <Image style={styles.imageChecar} source={vasoImage} />
        <View style={styles.vasosContainer}>
          <TouchableOpacity style={styles.vasoButton} onPress={() => handleCheckVaso('Vaso 01')}>
            <Text style={styles.vasoText}>Vaso 01</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.vasoButton} onPress={() => handleCheckVaso('Vaso 02')}>
            <Text style={styles.vasoText}>Vaso 02</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TelaChecar;
