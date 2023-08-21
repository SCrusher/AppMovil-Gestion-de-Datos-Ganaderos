import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { getCorrales, getMarcas } from '../../api';



const OpcionesMarcaCorral = ({ navigation, route }) => {

    const [isBothPickersSelected, setIsBothPickersSelected] = useState(false);


    const { recinto, rup } = route.params
    console.log(rup, recinto)

    //Función que carga y guarda en un array los datos de las Marcas - Permite mostrarlos en pantalla
    const [marcas, setMarcas] = useState([]);

    const loadMarcas = async () => {
        const data = await getMarcas()
        setMarcas(data)
    }
    useEffect(() => {
        loadMarcas()
    }, [])

    const [isOpen, setIsOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState();

    const items = marcas.map(marca => {
        return { label: marca.Tipo, value: marca.id, tipo: marca.Tipo }
    })



    //Función que carga y guarda en un array los datos de los Corrales - Permite mostrarlos en pantalla
    const [corrales, setCorrales] = useState([]);

    const loadCorrales = async () => {
        const data = await getCorrales()
        setCorrales(data)
    }
    useEffect(() => {
        loadCorrales()
    }, [])

    const [isOpenCorral, setIsOpenCorral] = useState(false);
    const [currentCorral, setCurrentCorral] = useState();

    const itemsCorral = corrales.map(corral => {
        return { label: corral.id, value: corral.id }
    })

    //Estado y funciones que agrega los datos a 1 solo registro que contiene Arete, Marca y Corral, es decir, la "Lectura completa del animal"

    const handlePickerChange = (value) => {
        setCurrentValue(value);
    };
    const handlePickerCorralChange = (value) => {
        setCurrentCorral(value);
    };

    const checkBothPickersSelected = () => {
        if (currentValue && currentCorral) {
            setIsBothPickersSelected(true);
        } else {
            setIsBothPickersSelected(false);
        }
    };

    useEffect(() => {
        checkBothPickersSelected();
    }, [currentValue, currentCorral]);
    return (
        <View style={styles.container}>
            <View style={styles.pickerContainer}>
                <DropDownPicker
                    style={styles.dropDownPicker}
                    containerStyle={styles.dropDownPickerContainer}
                    items={items}
                    open={isOpen}
                    setOpen={() => setIsOpen(!isOpen)}
                    value={currentValue}
                    setValue={handlePickerChange}
                    placeholder='Seleccione Marca'
                />
                <DropDownPicker
                    style={styles.dropDownPicker}
                    containerStyle={styles.dropDownPickerContainer}
                    items={itemsCorral}
                    open={isOpenCorral}
                    setOpen={() => setIsOpenCorral(!isOpenCorral)}
                    value={currentCorral}
                    setValue={handlePickerCorralChange}
                    placeholder='Seleccione Corral'
                />
            </View>
            <TouchableOpacity
                style={[styles.buttonSave, !isBothPickersSelected && styles.disabledButton]}
                onPress={() =>
                    navigation.navigate("Lectura Aretes", {
                        recinto: recinto,
                        rup: rup,
                        marca: { id: currentValue, tipo: items.find(item => item.value === currentValue)?.tipo },
                        corral: currentCorral,
                    })
                }
                disabled={!isBothPickersSelected}
            >
                <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        width: '90%',
        backgroundColor: "white",
        fontSize: 20,
        borderWidth: 2,
        borderColor: "gray",
        height: 40,
        textAlign: "center",
        padding: 5,
        marginVertical: 5,
        marginLeft: 17,
        borderRadius: 15
    },
    buttonSave: {
        width: '50%',
        marginTop: 40,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: "#19955b",
    },
    buttonText: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 20
    },
    pickerContainer: {
        flexDirection: 'row',
        marginTop: 10,
        width: '90%',
    },
    dropDownPickerContainer: {
        flex: 1,
    },
    disabledButton: {
        backgroundColor: "gray",
      },
})

export default OpcionesMarcaCorral

