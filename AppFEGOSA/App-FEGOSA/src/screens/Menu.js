import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Modal, Image } from 'react-native';
import Header from '../components/Header';
import Lecturas from '../components/Lecturas';
import { enviarLecturas } from '../../api'; // Ajusta la ruta según la ubicación de tu archivo api.js


const Menu = ({ route, navigation }) => {

  const { recinto, rup, AllAretes, marca, corral, selectedDate } = route.params

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [aretesLeidos, setAretesLeidos] = useState([])

  const [lectura, setLectura] = useState([])

  const deleteDiio = (diio) => {
    const updatedAretes = aretesLeidos.filter((item) => item !== diio);
    setAretesLeidos(updatedAretes);
    setLectura((prevLecturas) => prevLecturas.filter((lectura) => lectura.arete !== diio));

  };

  const updateDiio = (oldDiio, newDiio) => {
    const updatedAretes = aretesLeidos.map((item) => (item === oldDiio ? newDiio : item));
    setAretesLeidos(updatedAretes);
    setLectura((prevLecturas) =>
      prevLecturas.map((lectura) => (lectura.arete === oldDiio ? { ...lectura, arete: newDiio } : lectura))
    );
  };

  useEffect(() => {
    if (AllAretes) {
      setAretesLeidos((prevAretes) => [...prevAretes, AllAretes]);
    }
  }, [AllAretes]);

  useEffect(() => {
    console.log('AllAretes:', AllAretes);
    console.log('selectedDate:', selectedDate);
    if (AllAretes) {
      const nuevaLectura = {
        arete: AllAretes,
        fecha: new Date(selectedDate).toISOString().split('T')[0],
        marca: marca.id,
        corral: corral,
        rup: rup,
      };
      if (nuevaLectura.arete && nuevaLectura.arete.trim() !== '') {
        setLectura((prevLecturas) => [...prevLecturas, nuevaLectura]);
      }
    }
  }, [AllAretes, marca.id, corral, rup, selectedDate]);

  const mostrarresultados = () => {
    if (!selectedDate) {
      console.log('Fecha no seleccionada');
      return;
    }

    if (lectura.length === 0) {
      console.log('No hay lecturas registradas.');
      return;
    }

    console.log('Lecturas:');
    console.log(lectura);
  }

  const navigateToOpcionesMarcaCorral = () => {
    setShowSuccessModal(false); // Oculta la ventana modal
    navigation.navigate('OpcionesMarcaCorral', { recinto, rup, selectedDate }); // Navega de regreso a OpcionesMarcaCorral
  };

  const enviarDatos = async () => {
    try {
      if (lectura.length > 0) {
        const response = await enviarLecturas(lectura);
        console.log('Respuesta del servidor:', response);
        // Aquí puedes manejar la respuesta del servidor después de enviar los datos
        // Navegar de regreso a la pantalla "OpcionesMarcaCorral"
        setShowSuccessModal(true); // Mostrar la ventana modal de éxito
      } else {
        console.log('No hay datos válidos para enviar.');
      }
    } catch (error) {
      console.error('Error al enviar las lecturas:', error);
      // Aquí puedes manejar el error si ocurre algún problema con la solicitud
    }
  };

  return (
    <View>
      <Header recinto={recinto} marca={marca} corral={corral} rup={rup} selectedDate={selectedDate} />
      <Lecturas navigation={navigation} AllAretes={aretesLeidos} marca={marca} corral={corral} deleteDiio={deleteDiio} updateDiio={updateDiio} />
      <View style={{ justifyContent: "center", alignItems: "center", alignContent: "center" }}>
        <TouchableOpacity style={styles.botonRegistro} onPress={enviarDatos}>
          <Text > Enviar Registro </Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity onPress={mostrarresultados}>
        <Text>PRUEBA DE LECTURAS</Text>
      </TouchableOpacity> */}
      <Modal visible={showSuccessModal} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Registros enviados correctamente!</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={navigateToOpcionesMarcaCorral} // Navegar a OpcionesMarcaCorral al presionar el botón
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={{ flex: 1 }}>
        <Image
          source={require('../../../App-FEGOSA/assets/LogoFegosa.png')}
          style={{ width: '80%', height: undefined, aspectRatio: 1024 / 390, marginLeft: 30}}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  botonRegistro: {
    alignItems: 'center',
    backgroundColor: '#2596be',
    padding: 10,
    borderRadius: 10
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: '#2596be',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
})

export default Menu