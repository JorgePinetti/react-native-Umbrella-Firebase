import {React, useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput,} from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Welcome(){
    const navigation=useNavigation();
    return(
        
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image source={require('../../assets/umbrella.png')}
                style={{width: '45%'}}
                resizeMode='contain'/>
            </View>
            <View style={styles.containerForm}>
                <Text style={styles.title}>
               Umbrella corporation</Text>
                <Text style={styles.text}>Aperte em acessar para prosseguir</Text>
                <TextInput style={styles.input} placeholder="Login"  placeholderTextColor="#fff"/>
                <TextInput style={styles.input} placeholder="Senha"  placeholderTextColor="#fff"/>
                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#111'

    },
    containerLogo:{
        flex: 2,
        backgroundColor: '#111',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm:{
        flex: 2,
        backgroundColor: '#111',
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 0,
        marginBottom: 12,
        textAlign: 'center',
        color: '#fff',
    },
    text:{
        color: '#a1a1a1',
        justifyContent: 'center',
        textAlign: 'center',
    },
    button:{
        position: 'absolute',
        backgroundColor: '#800000',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    buttonText:{
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',

    },
    buttonView:{
        paddingTop: 50,
    },
    input:{
        height: 50,
        width: 300,
        borderColor: '#fff', 
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        color: '#fff',
        fontSize: 20,
        padding: 10,
        borderRadius: 23,
        marginBottom: 20,
        marginTop: 2,
        
        

    }
})