const API = 'http://10.0.2.2:3000/lectura'
const APIRECINTO = 'http://10.0.2.2:3000/recinto'
const APIMARCA = 'http://10.0.2.2:3000/marca'
const APICORRAL = 'http://10.0.2.2:3000/corral'
const APIENVIOLECTURAS = 'http://10.0.2.2:3000/addlectura'


export const getRecintos = async () => {
  const res = await fetch(APIRECINTO)
  return await res.json()
}

export const getMarcas = async () => {
  const res = await fetch(APIMARCA)
  return await res.json()
}

export const getCorrales = async () => {
  const res = await fetch(APICORRAL)
  return await res.json()
}

export const enviarLecturas = async (lecturas) => {
  const res = await fetch(APIENVIOLECTURAS, {
    method: 'POST',
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(lecturas),
  });
  return await res.json();
}
