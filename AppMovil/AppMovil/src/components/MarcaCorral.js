import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Modal, Pressable, } from 'react-native';



const MarcaCorral = ({ marca, corral }) => {


    return (
        <View style={styles.container}>
            <View>
                <Text style={{ fontSize: 20, fontWeight: "bold", margin: 5, marginVertical: 15 }}>Marca: </Text>
                <View style={styles.valorContainer}>
                    <Text style ={{fontSize: 17, fontWeight: 'bold'}}>{!marca.tipo ? 'Cargando...' : marca.tipo}</Text>
                </View>
            </View>

            <View>
                <Text style={{ fontSize: 20, fontWeight: "bold", margin: 5, marginVertical: 15 }}>Corral: </Text>
                <View style={styles.valorContainer}>
                    <Text style ={{fontSize: 17, fontWeight: 'bold'}}>{!corral ? 'Cargando...' : corral}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 45
    },
    valorContainer: {
        backgroundColor: "skyblue",
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        borderRadius: 12
    }


});

export default MarcaCorral