import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TelaInicial from "./src/telas/TelaInicial";
import TelaPlantas from "./src/telas/TelaPlantas";
import TelaIrrigar from "./src/telas/TelaIrrigar";
import TelaConfig from "./src/telas/TelaConfig";
import TelaHistorico from "./src/telas/TelaHistorico";
import TelaChecar from "./src/telas/TelaChecar";
import TelaLogar from "./src/telas/TelaLogar";
import IrrigarPlanta01 from "./src/telas/IrrigarPlanta01";
import IrrigarPlanta02 from "./src/telas/IrrigarPlanta02";
import CadastrarVaso01 from "./src/telas/CadastrarVaso01";
import CadastrarVaso02 from "./src/telas/CadastrarVaso02";
import TelaVasos from "./src/telas/TelaVasos";

const Stack = createStackNavigator();

export default function App() {

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }} 
        name="TelaLogar" component={TelaLogar} />
        <Stack.Screen
          options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }} 
        name="TelaInicial" component={TelaInicial} />
        <Stack.Screen
          options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }} 
        name="TelaPlantas" component={TelaPlantas} />
        <Stack.Screen
          options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }} 
        name="TelaIrrigar" component={TelaIrrigar} />
        <Stack.Screen
          options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}
        name="TelaConfig" component={TelaConfig} />
        <Stack.Screen
          options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}
        name="TelaHistorico" component={TelaHistorico} />
        <Stack.Screen
          options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}
        name="TelaVasos" component={TelaVasos} />
        <Stack.Screen
          options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}
        name="TelaChecar" component={TelaChecar} />
        <Stack.Screen
          options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}
        name="IrrigarPlanta01" component={IrrigarPlanta01} />
        <Stack.Screen
          options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}
        name="IrrigarPlanta02" component={IrrigarPlanta02} />
        <Stack.Screen
          options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}
        name="CadastrarVaso01" component={CadastrarVaso01} />
        <Stack.Screen
          options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}
        name="CadastrarVaso02" component={CadastrarVaso02} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}