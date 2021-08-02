import React from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';

const Appointment = ({appointments, deletePatient}) => {
  const deleteItem = id => {
    console.log('deleted!!!', id);
    deletePatient(id);
  };

  return (
    <View style={styles.appnt}>
      <View style={styles.dataInfo}>
        <Text style={styles.label}>Patient Name: </Text>
        <Text style={styles.content}>{appointments.patientName}</Text>
      </View>
      <View style={styles.dataInfo}>
        <Text style={styles.label}>Owner: </Text>
        <Text style={styles.content}>{appointments.owner}</Text>
      </View>
      <View style={styles.dataInfo}>
        <Text style={styles.label}>Symptoms: </Text>
        <Text style={styles.content}>{appointments.symptoms}</Text>
      </View>

      <View>
        <TouchableHighlight
          onPress={() => deleteItem(appointments.id)}
          style={styles.deleteBtn}>
          <Text styles={styles.deleteText}>&times; Delete</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appnt: {
    flex: 1,
    color: '#6666',
    backgroundColor: '#F7F7F7',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    padding: 25,
  },
  dataInfo: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingVertical: 5,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  content: {
    fontSize: 20,
  },
  deleteBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'red',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    elevation: 8,
  },
  deleteText: {
    textAlign: 'center',
  },
});

export default Appointment;
