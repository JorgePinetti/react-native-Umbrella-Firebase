import { StyleSheet } from "react-native"
export const estilos = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#111'
    },
    input: {
        height: 50,
        width: "90%",
        borderColor: "#e6e6e6",
        
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: "#fff",
    },
    botao: {
        alignItems: 'center',
        backgroundColor: '#800000',
        padding: 10,
        width: 105,
        height: 40,
        margin: 6,
        borderRadius: 50,
    },
    texto: {
        color: '#fff'
    },
    title2:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 0,
        marginBottom: 12,
        textAlign: 'center',
        color: '#fff',
    },
    containerLogo:{
        flex: 1,
        backgroundColor: '#111',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm:{
        flex: 1,
        backgroundColor: '#111',
        paddingStart: '5%',
        paddingEnd: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})