import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { styles } from "../formularios/styles";
import { RadioButton } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const CensoForm = ({ route }) => {
  const { numberOfPeople } = route.params;

  // Renderizar formularios de persona según numberOfPeople
  const renderPersonForms = () => {
    const personForms = [];
    for (let i = 1; i <= numberOfPeople; i++) {
      personForms.push(
        <View key={i}>
          <Text style={styles.formulario}>Formulario de Persona {i}</Text>
          <Formik
            validateOnMount={true}
            validationSchema={loginValidationSchema}
            initialValues={{
              nombresyapellidos: '',
              sexo: '',
              edad: '',
              fechaNacimiento: '',
              origen: '',
              raza: '',
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
                  placeholder="Nombre de la Persona"
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

                <Text style={styles.formLabel}>Sexo</Text>
                <View style={styles.radioButtonContainer}>
                <TouchableOpacity
                  style={[
                    styles.radioButton,
                    {
                      backgroundColor: values.sexo === 'Femenino' ? 'blue' : 'white',
                    },
                  ]}
                  onPress={() => handleChange('sexo')('Femenino')}
                >
                  <Text style={styles.radioButtonText}>Femenino</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.radioButton,
                    {
                      backgroundColor: values.sexo === 'Masculino' ? 'blue' : 'white',
                    },
                  ]}
                  onPress={() => handleChange('sexo')('Masculino')}
                >
                  <Text style={styles.radioButtonText}>Masculino</Text>
                </TouchableOpacity>
              </View>
                <Text style={styles.formLabel}>Edad</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Edad"
                  onChangeText={handleChange('edad')}
                  onBlur={handleBlur('edad')}
                  value={values.edad}
                  keyboardType="numeric"
                />

                <Text style={styles.formLabel}>Fecha de Nacimiento</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Fecha de Nacimiento"
                  onChangeText={handleChange('fechaNacimiento')}
                  onBlur={handleBlur('fechaNacimiento')}
                  value={values.fechaNacimiento}
                  keyboardType="default"
                />

                <Text style={styles.formLabel}>Origen</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Origen"
                  onChangeText={handleChange('origen')}
                  onBlur={handleBlur('origen')}
                  value={values.origen}
                  keyboardType="default"
                />

                <Text style={styles.formLabel}>Raza</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Raza"
                  onChangeText={handleChange('raza')}
                  onBlur={handleBlur('raza')}
                  value={values.raza}
                  keyboardType="default"
                />
                
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
      );
    }
    return personForms;
  };

  return (
    <ScrollView>
      <View style={styles.containerStyle}>
        <Text style={styles.formulario}>Formulario</Text>
        {renderPersonForms()}
      </View>
    </ScrollView>
    );
};

// Mensajes de Validación del Formulario
const loginValidationSchema = yup.object().shape({
  nombresyapellidos: yup
    .string("Ingresa el nombre de la persona")
    .required("*Campo requerido"),
  sexo: yup
    .string("Ingresa el sexo")
    .required("*Campo requerido"),
  edad: yup
    .number("Ingresa la edad")
    .required("*Campo requerido"),
  fechaNacimiento: yup
    .string("Ingresa la fecha de nacimiento")
    .required("*Campo requerido"),
  origen: yup
    .string("Ingresa el origen")
    .required("*Campo requerido"),
  raza: yup
    .string("Ingresa la raza")
    .required("*Campo requerido"),
});

export default CensoForm;
 /* return (
    <>
      <View>
        <Text style={styles.formulario}> Formulario </Text>

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
                style={styles.sexo}
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
 
});*/
