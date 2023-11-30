import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "./src/Componentes/Login"
import { Cadastrar } from "./src/Componentes/CadastrarLogin"
import { Home } from "./src/Componentes/Home"
import { ManterProdutos } from "./src/Componentes/ManterProdutos"
import { ListarProdutos } from "./src/Componentes/ListarProdutos"

export function Rotas() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='ManterProdutos' component={ManterProdutos} options={{ title: 'Adicionar alvos' }} />
                <Stack.Screen name='ListarProdutos' component={ListarProdutos} options={{ title: 'Alvos localizados' }} />
                <Stack.Screen name='Cadastrar' component={Cadastrar} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}