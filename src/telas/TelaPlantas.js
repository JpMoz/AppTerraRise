import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import PlantasStyle from '../estilos/TelaPlantasEstilos';
import backArrow from '../../assets/backArrow.png';
import PlantasImage from '../../assets/plantas.png';
import vaso from '../../assets/vaso.png';

export default function TelaIrrigar({navigation}) {
    const handleGoToInicial = () => {
        navigation.navigate('TelaInicial');
    };
    const handleGoToCadastrar01 = () => {
        navigation.navigate('CadastrarVaso01');
    };
    const handleGoToCadastrar02 = () => {
        navigation.navigate('CadastrarVaso02');
    };
    
    return (
        <View style={PlantasStyle.telaIrrigar}>
            <TouchableOpacity onPress={handleGoToInicial}>
                <Image style={PlantasStyle.backStyle} source={backArrow} />
            </TouchableOpacity>
            <Image style={PlantasStyle.jardimVertical} source={PlantasImage} />
            <Text style={PlantasStyle.text}>Selecione o vaso que deseja cadastrar:</Text>
            
            <View style={PlantasStyle.vasosContainer}>
                <TouchableOpacity style={PlantasStyle.vaso1} onPress={handleGoToCadastrar01}>
                    <Text style={PlantasStyle.buttonText}>Vaso 01</Text>
                    <Image style={PlantasStyle.vaso} source={vaso} />
                </TouchableOpacity>
                <TouchableOpacity style={PlantasStyle.vaso2} onPress={handleGoToCadastrar02}>
                    <Text style={PlantasStyle.buttonText}>Vaso 02</Text>
                    <Image style={PlantasStyle.vaso} source={vaso} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
