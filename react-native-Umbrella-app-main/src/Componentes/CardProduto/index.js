import { View, Text, TouchableOpacity, Alert } from "react-native";
import estilos from "./estilos";
import Icon from 'react-native-vector-icons/AntDesign';
import { deletarProdutos } from "../../config/firestore";

export function CardProduto({ produto, navigation }) {
    async function deletar() {
        Alert.alert(
            'Deletar Produto',
            'Tem certeza que quer deletar?',
            [
                {
                    text: 'Não',
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    style: 'default',
                    onPress: () => { deletarProdutos(produto.id) },
                },
            ]
        )
    }
    return (
        <View style={estilos.container}>
            <View style={estilos.card} >
                <View style={estilos.textoContainer}>
                    <Text style={estilos.textoNome} numberOfLines={1}>{produto.nomeProduto}</Text>
                    <Text style={estilos.textoPreco}>R$ {produto.precoProduto}</Text>
                </View>
                <View style={estilos.buttonsContainer}>
                    <TouchableOpacity style={estilos.editButton} onPress={() => navigation.navigate('ManterProdutos', produto)}>
                        <Icon
                            name={'edit'}
                            size={17}
                            color="#FFF"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.deleteButton} onPress={() => deletar()} >
                        <Icon
                            name={'delete'}
                            size={17}
                            color="#FFF"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}