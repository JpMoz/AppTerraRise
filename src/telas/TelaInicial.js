import React from 'react';
import { View, TouchableOpacity, Text, Image, ActivityIndicator } from 'react-native';
import InicialStyle from '../estilos/TelaInicialEstilos';
import Logo from '../../assets/logoCerto.png'

export default function TelaInicial({ navigation }){
    const handleGoToPlantas = () =>{
        navigation.navigate('TelaPlantas')
    }
    const handleGoToIrrigar = () =>{
        navigation.navigate('TelaIrrigar')
    }
    const handleGoToConfig = () =>{
        navigation.navigate('TelaConfig')
    }
    const handleGoToHistorico = () => {
        navigation.navigate('TelaHistorico')
    }
    const handleGoToVasos = () => {
        navigation.navigate('TelaVasos')
    }
    const handleGoToChecar = () => {
        navigation.navigate('TelaChecar')
    }
    return(
        <View style={InicialStyle.telaInicial}>          
            <Text style={InicialStyle.text}>Bem vindo ao TerraRise</Text>
            <Image style={InicialStyle.logo} source={Logo}></Image>
            <TouchableOpacity style={InicialStyle.inicialButton} onPress={handleGoToPlantas}>
                <Text style={InicialStyle.buttonText}>Cadastrar vasos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={InicialStyle.inicialButton} onPress={handleGoToIrrigar}>
                <Text style={InicialStyle.buttonText}>Irrigação manual</Text>
            </TouchableOpacity>
            <TouchableOpacity style={InicialStyle.inicialButton} onPress={handleGoToConfig}>
                <Text style={InicialStyle.buttonText}>Agendar irrigação</Text>
            </TouchableOpacity>
            <TouchableOpacity style={InicialStyle.inicialButton} onPress={handleGoToHistorico}>
                <Text style={InicialStyle.buttonText}>Histórico de irrigações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={InicialStyle.inicialButton} onPress={handleGoToVasos}>
                <Text style={InicialStyle.buttonText}>Vasos cadastrados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={InicialStyle.inicialButton} onPress={handleGoToChecar}>
                <Text style={InicialStyle.buttonText}>Verificar níveis</Text>
            </TouchableOpacity>
        </View>
    )
}