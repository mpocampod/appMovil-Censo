import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Pressable } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useRouter,  RouterProvider  } from 'expo-router';



const Main = ({}) => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedOptions, setSelectedOptions] = useState(new Set());

  const handleNext = () => {
    router.push('./censoForm');
  };


  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <Text>
          Antes de responder la primera pregunta, cuenta las personas que viven en esta casa, apartamento o casa rodante usando nuestras guias.
          * Cuenta todas las personas, incluyendo bebés. Quien vive y duerme acá casi todo el tiempo.
          * Si alguno que no tenga un lugar permanente para dormir, se ha quedado el 24 de noviembre de 2023, cuenta esa persona.
          Las conductas del censo cuenta tambien instituciones y otros lugares, entonces: 
          * No cuentes cualquiera que viva lejos de acá, ya sea en la universidad o fuerzas armadas.
          * No cuente a nadie en un hogar de ancianos, prisión, cárcel, centro de detención, etc
          * Deje fuera de su cuestionario a estas personas, incluso si regresarán a vivir aquí después de salir de la universidad, el hogar de ancianos, el servicio militar, la cárcel, etc. De lo contrario, podrían ser contados dos veces.
        </Text>

        <Text>1. ¿Cuántas personas vivian o estaban en esta casa, apartamento o casa rodante el 24 de noviembre de 2023?</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="Número de personas "
          />

        <Text>2. ¿Había alguna persona adicional alojada aquí el 24 de noviembre 2023 que no incluyó en la Pregunta 1?</Text>
                <Text>Marca con x todas las que apliquen</Text>
                {['Niños, ya sea relacionados o no, como recién nacidos, nietos o hijos adoptivos', 
                'Familiares, como hijos adultos, primos o cuñados',
                'No familiares, como compañeros de cuarto o niñeras que viven aquí', 
                'Personas que se quedan temporalmente',
                'No hay personas adicionales'].map((option) => (
                <View key={option} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                    <Checkbox 
                    value={selectedOptions.has(option)}
                    onValueChange={() => {
                        const updatedOptions = new Set(selectedOptions);
                        if (selectedOptions.has(option)) {
                        updatedOptions.delete(option);
                        } else {
                        updatedOptions.add(option);
                        }
                        setSelectedOptions(updatedOptions);
                    }}
                    />
                    <Text>{option}</Text>
                </View>
                ))}
        
        
        <Text>3. ¿Esta casa, apartamento o casa rodante es propia o alquilada?</Text>
        {/* Agrega opciones de marca * ONE box aquí (Owned with mortgage, owned free and clear, rented, occupied without payment of rent) */}

        <Text>4. ¿Cuál es tu celular?</Text>
          <TextInput
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
            placeholder="Telephone Number"
          />

        <Button title="Siguiente" onPress={handleNext} />
      </View>
    </ScrollView>
  );
};

export default Main;
