/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import Appointment from './components/Appointment';
import Form from './components/Form';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [appointments, setAppointment] = useState([]);

  const deletePatient = id => {
    setAppointment(actualAppnt => {
      return actualAppnt.filter(appnt => appnt.id !== id);
    });
  };
  console.log('desde consola! new');

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Vet Appointment Manager </Text>

      <TouchableHighlight
        onPress={() => setShowForm(!showForm)}
        style={styles.addNewApptBtn}>
        <Text styles={styles.deleteText}>
          {showForm ? 'Hide Form' : 'Add New Appointment'}
        </Text>
      </TouchableHighlight>

      <View style={styles.mainContent}>
        {showForm ? (
          <>
            <Text style={styles.subtitle}>New Appointment</Text>
            <Form
              appointment={appointments}
              setAppointment={setAppointment}
              setShowForm={setShowForm}
            />
          </>
        ) : (
          <>
            <Text style={styles.subtitle}>
              {appointments.length > 1
                ? `You have ${appointments.length} appointments`
                : appointments.length === 1
                ? 'You have one appointment'
                : 'You dont have any appointments'}
            </Text>

            <FlatList
              style={styles.list}
              data={appointments}
              renderItem={({item}) => (
                <Appointment
                  appointments={item}
                  deletePatient={deletePatient}
                />
              )}
              keyExtractor={appnt => appnt.id}
            />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00A3D8',
    flex: 1,
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
    fontSize: 30,
    color: '#F7F7F7',
  },

  addNewApptBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'green',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    elevation: 8,
  },
  subtitle: {
    fontWeight: 'normal',
    textAlign: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    fontSize: 20,
  },
  mainContent: {
    flex: 1,
    // marginHorizontal: '2,5%',
  },
  list: {
    flex: 1,
  },
});

export default App;
