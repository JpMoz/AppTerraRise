import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import TelaInicial from '../telas/TelaInicial';
import LogarStyle from '../estilos/TelaLogarEstilos';

export default function TelaLogar({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [menssagem, setMenssagem] = useState('');

    const handleGoToInicial = () =>{
        navigation.navigate('TelaInicial')
    }

    return (
        <View style={LogarStyle.container}>
            <Image source={require('../../assets/TerraRiseLogo.png')} style={LogarStyle.logo} />
            {menssagem && (<Text>{menssagem}</Text>)}
            <TextInput
                style={LogarStyle.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={LogarStyle.input}
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={LogarStyle.button} onPress={handleGoToInicial}>
                <Text style={LogarStyle.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}