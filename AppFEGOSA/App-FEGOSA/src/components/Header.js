import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, Alert, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';


const Header = ({ recinto, marca, corral, rup, is}) => {
  const navigation = useNavigation();
  const [aretesList, setAretesList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isDateSelected, setIsDateSelected] = useState(false);


  //CALENDARIO MODAL
  const [open, setOpen] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const handleOnPress = () => {
    setOpen(!open)
  };
  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    setIsDateSelected(true);
    handleOnPress();
    navigation.navigate('Lectura Aretes', { recinto: recinto, marca: marca, corral: corral, selectedDate: day.dateString, rup: rup });
  };

  const handleChange = (value) => {
    setAretesList(value);
  };
  const handleSubmit = () => {
    navigation.navigate('Lectura Aretes', { AllAretes: aretesList, recinto: recinto, marca: marca, corral: corral, rup: rup, selectedDate: selectedDate })
    setModalVisible(!modalVisible)
  }

  const validateNumericInput = (text) => {
    const numericRegex = RegExp(/^\d{0,12}$/); // Expresión regular para aceptar solo números con longitud máxima de 12 dígitos
    if (numericRegex.test(text)) {
      handleChange(text);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ marginRight: 70, justifyContent: "center" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}> {!recinto ? 'Cargando...' : recinto} </Text>
        <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 3 }}>{selectedDate ? selectedDate : 'Fecha no seleccionada'}</Text>
      </View>
      <View style={{ height: 100, alignContent: "center" }}>
        <View style={styles.centeredView}>
          <TouchableOpacity
            style={[styles.button, styles.buttonOpen]}
            onPress={handleOnPress}>
            <Text style={styles.textStyle}>Seleccionar Fecha</Text>
          </TouchableOpacity>
          <Modal
            animationType='slide'
            transparent={true}
            visible={open}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Calendar
                  onDayPress={(day) => {
                    handleDayPress(day);
                  }}
                  markedDates={selectedDate ? { [selectedDate]: { selected: true } } : {}}
                />
              </View>
            </View>
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TextInput
                  style={styles.input}
                  placeholder='INGRESA AQUI EL DIIO'
                  onChangeText={(text) => validateNumericInput(text)}
                  keyboardType="numeric"
                  maxLength={12}
                />
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={handleSubmit}>
                  <Text style={styles.textStyle}>Guardar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <TouchableOpacity
            style={[styles.button, styles.buttonOpen, !selectedDate && styles.disabledButton]}
            onPress={() => setModalVisible(true)}
            disabled={!isDateSelected}>
            <Text style={styles.textStyle}>Ingresa Arete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: '100%',
    backgroundColor: "white",
    fontSize: 17,
    borderWidth: 2,
    borderColor: "gray",
    height: 40,
    textAlign: "center",
    padding: 5,
    marginVertical: 5,
    borderRadius: 15
  },
  modalView: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    marginTop: 5,
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#000",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#27ba31",
  },
  campoTexto: {
    // height: 40,
    // margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200
  },
  disabledButton: {
    backgroundColor: "gray",
  },
});

export default Header