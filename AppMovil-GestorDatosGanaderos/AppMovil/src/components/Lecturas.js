import React, { useEffect, useState } from 'react';
import { StyleSheet, View} from 'react-native';
import MarcaCorral from './MarcaCorral';
import Aretes from './Aretes';

const Lecturas = ({AllAretes, marca, corral, deleteDiio, updateDiio }) => {
    return (
        <View style={styles.container}>
            <View style={{height: 400, flexDirection:"row"}}>
                <View>
                    <Aretes AllAretes={AllAretes} deleteDiio={deleteDiio} updateDiio={updateDiio}/>
                </View> 
                <View>
                    <MarcaCorral marca={marca} corral={corral}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
});




export default Lecturas