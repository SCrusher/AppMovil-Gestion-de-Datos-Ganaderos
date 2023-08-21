import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Modal, Alert, Pressable } from 'react-native';
import AreteList from './AreteList';


const Aretes = ({AllAretes, deleteDiio, updateDiio}) => {

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: "bold", margin: 5, marginVertical: 15 }}> Aretes Leídos: </Text>
            <AreteList AllAretes={AllAretes} deleteDiio={deleteDiio} updateDiio={updateDiio}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: "#ccc",
        height: "100%",
        width: 220,
    },
});

export default Aretes