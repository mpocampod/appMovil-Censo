import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { styles } from "../formularios/styles";
import { useRouter } from 'expo-router';

const censoForm = () => {

  return (
    <>
      <View>
        <Text style={styles.formulario}> Formulario de Contacto </Text>

        <Formik
          validateOnMount={true}
          validationSchema={loginValidationSchema}
          initialValues={{
            nombresyapellidos: '',
            email: '',
            telefono: '',
            mensaje: '',
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <TextInput
                style={styles.nombresyapellidos}
                placeholder="Nombres y Apellidos"
                onChangeText={handleChange('nombresyapellidos')}
                onBlur={handleBlur('nombresyapellidos')}
                value={values.nombresyapellidos}
                keyboardType="default"
              />

              {errors.nombresyapellidos && touched.nombresyapellidos && (
                <Text style={styles.errorText}>
                  {errors.nombresyapellidos}
                </Text>
              )}

              <TextInput
                style={styles.email}
                placeholder="micorreo@micorreo.com"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />

              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              <TextInput
                style={styles.telefono}
                placeholder="Nro. de Teléfono"
                onChangeText={handleChange('telefono')}
                onBlur={handleBlur('telefono')}
                value={values.telefono}
                keyboardType="number-pad"
              />

              {errors.telefono && touched.telefono && (
                <Text style={styles.errorText}>{errors.telefono}</Text>
              )}

              <TextInput
                style={styles.mensaje}
                onChangeText={handleChange('mensaje')}
                onBlur={handleBlur('mensaje')}
                value={values.mensaje}
                keyboardType="default"
                multiline={true}
                numberOfLines={4}
                placeholder="Ingresa tu Mensaje"
              />

              {errors.mensaje && touched.mensaje && (
                <Text style={styles.errorText}>{errors.mensaje}</Text>
              )}

              <TouchableOpacity
                style={styles.colorBtn}
                onPress={handleSubmit}
              >
                <Text style={styles.colorTxtBtn}>Aceptar</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </>
  );
};

 
// Mensajes de Validación del Formulario 
const loginValidationSchema = yup.object().shape({
 
  nombresyapellidos: yup
    .string("Ingresa tus Nombres y Apellidos")
    .required("*Campo requerido"),
 
  email: yup
    .string("Ingresa tu Email")
    .required("*Campo requerido")
    .email("Ingresa un Email válido"),
 
  telefono: yup
    .number("Ingresa tu Teléfono")
    .required("*Campo requerido"), 
 
  mensaje: yup
    .string("Ingresa tu Mensaje")
    .required("*Campo requerido"),
 
});
export default censoForm;
