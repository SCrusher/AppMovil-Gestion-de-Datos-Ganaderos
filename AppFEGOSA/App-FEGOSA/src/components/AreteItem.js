import { View, Text, StyleSheet, Modal, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const AreteItem = ({ diio, deleteDiio, updateDiio }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [originalDiio, setOriginalDiio] = useState(diio);
    const [editedDiio, setEditedDiio] = useState(diio);


    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleChange = (value) => {
        setEditedDiio(value);
    };

    const saveChanges = () => {

        setOriginalDiio(editedDiio); // Actualizar el valor original con el nuevo valor editado

        // Aquí puedes agregar la lógica para guardar los cambios realizados
        console.log('Guardando cambios:', editedDiio);
        updateDiio(originalDiio, editedDiio); // Actualizar el diio en la lista de aretes
        // Cierra el modal después de guardar los cambios
        closeModal();
    };

    const handleDelete = () => {
        // Llama a la función deleteDiio pasando el diio actual
        console.log('Eliminando diio:', originalDiio);
        deleteDiio(originalDiio);
    };

    return (
        <View style={styles.areteContainer}>
            <Text style={{ fontSize: 17, marginLeft: 8 }}>{!originalDiio ? 'Cargando...' : editedDiio}</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={openModal}>
                    <View>
                        <Icon name="edit" size={25} color="black" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDelete}>
                    <View>
                        <Icon name="trash" size={25} color="black" />
                    </View>
                </TouchableOpacity>
            </View>

            {/* Modal para editar */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Editar DIIO:</Text>
                        <TextInput
                            style={styles.input}
                            value={editedDiio}
                            onChangeText={handleChange}
                            keyboardType="numeric"
                        />
                        <View style={styles.opcionesBotones}>
                            <View style={styles.buttonContainer}>
                                <Button title="Guardar" onPress={saveChanges} />
                            </View>
                            <View style={styles.buttonContainer}>
                                <Button title="Cancelar" onPress={closeModal} color="red" />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    areteContainer: {
        backgroundColor: '#27ba31',
        padding: 5,
        borderRadius: 15,
        alignItems: 'center',
        marginVertical: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        backgroundColor: 'white',
        fontSize: 17,
        borderWidth: 2,
        borderColor: 'gray',
        height: 40,
        textAlign: 'center',
        padding: 5,
        marginVertical: 5,
        borderRadius: 15,
    },
    modalView: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
    },
    button: {
        marginTop: 5,
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonContainer: {
        paddingHorizontal: 10,
    },
    opcionesBotones: {
        flexDirection: "row",
        paddingTop: 15,
    }
});

export default AreteItem;
