import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';


const RecintoItem = ({ recinto }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.recintoContainer}> 
            <TouchableOpacity onPress={() => navigation.navigate("OpcionesMarcaCorral", {
                recinto:recinto.Nombre,
                rup:recinto.RUP
            })}>
                <Text style= {{ fontSize: 20 }}> {recinto.Nombre} </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    recintoContainer: {
        backgroundColor: "#27ba31",
        padding: 15,
        marginVertical: 5,
        borderRadius: 15,
        alignItems: "center",
    }
})

export default RecintoItem