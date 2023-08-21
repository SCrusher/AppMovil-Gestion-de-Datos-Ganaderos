import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Button, Platform } from 'react-native';
import { getRecintos } from '../../api';
import RecintoList from '../components/RecintoList';


const Inicio = () => {

    const [recintos, setRecintos] = useState([]);


    const loadRecintos = async () => {
        const data = await getRecintos()
        setRecintos(data)
    }

    useEffect(() => {
        loadRecintos()
    }, [])


    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.titulo}>Seleccione Recinto:</Text>
                <View>
                    <RecintoList recintos={recintos}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 120,
        justifyContent: "center",
        alignItems: "center",
    },
    titulo: {
        fontSize: 25,
        fontWeight: "700"
    },
    opcion: {
        fontSize: 30,
        textAlign: "center",
        margin: 3,
        backgroundColor: "#27ba31",
        borderRadius: 10
    }

})

export default Inicio