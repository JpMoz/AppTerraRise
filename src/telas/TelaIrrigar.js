import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import IrrigarStyle from '../estilos/TelaIrrigarEstilos';
import backArrow from '../../assets/backArrow.png';
import jardimVertical from '../../assets/jardimVertical.png';
import vaso from '../../assets/vaso.png';

export default function TelaIrrigar({navigation}) {
    const handleGoToInicial = () => {
        navigation.navigate('TelaInicial');
    };
    const handleGoToPlanta01 = () => {
        navigation.navigate('IrrigarPlanta01')
    };
    const handleGoToPlanta02 = () => {
        navigation.navigate('IrrigarPlanta02')
    };
    
    return (
        <View style={IrrigarStyle.telaIrrigar}>
            <TouchableOpacity onPress={handleGoToInicial}>
                <Image style={IrrigarStyle.backStyle} source={backArrow} />
            </TouchableOpacity>
            <Image style={IrrigarStyle.jardimVertical} source={jardimVertical} />
            <Text style={IrrigarStyle.text}>Selecione o vaso que deseja irrigar:</Text>
            
            <View style={IrrigarStyle.vasosContainer}>
                <TouchableOpacity style={IrrigarStyle.vaso1} onPress={handleGoToPlanta01}>
                    <Text style={IrrigarStyle.buttonText}>Vaso 01</Text>
                    <Image style={IrrigarStyle.vaso} source={vaso} />
                </TouchableOpacity>
                <TouchableOpacity style={IrrigarStyle.vaso2} onPress={handleGoToPlanta02}>
                    <Text style={IrrigarStyle.buttonText}>Vaso 02</Text>
                    <Image style={IrrigarStyle.vaso} source={vaso} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
