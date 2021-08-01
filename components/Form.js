import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  ScrollView,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
const USID = require('usid');

const Form = ({appointment, setAppointment, setShowForm}) => {
  const [patientName, setPatientName] = useState('');
  const [owner, setOwner] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = selectedDate => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    setDate(selectedDate.toLocaleDateString('en-US', options));
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = selectedTime => {
    const options = {hour: '2-digit', minute: '2-digit'};
    setTime(selectedTime.toLocaleTimeString('en-US', options));
    hideTimePicker();
  };

  const saveData = () => {
    if (
      patientName.trim() === '' ||
      owner.trim() === '' ||
      date.trim() === '' ||
      time.trim() === '' ||
      symptoms.trim() === ''
    ) {
      showAlert();
      console.log('saveed!');
    } else {
      const newAppoint = {patientName, owner, date, time, symptoms};
      const usid = new USID();
      const len = 5;
      newAppoint.id = usid.uuid(len);
      console.log(newAppoint);

      const appntList = [...appointment, newAppoint];
      setAppointment(appntList);
      setShowForm(false);
    }
  };

  const showAlert = () => {
    Alert.alert('Error', 'Complete all fields before save', [{text: 'Ok'}]);
  };

  return (
    <>
      <ScrollView style={styles.form}>
        <View>
          <Text style={styles.label}>Patient Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={patient => {
              setPatientName(patient);
            }}
          />
        </View>
        <View>
          <Text style={styles.label}>Owner:</Text>
          <TextInput
            style={styles.input}
            onChangeText={ownerName => {
              setOwner(ownerName);
            }}
          />
        </View>
        <View>
          <Text style={styles.label}>Date:</Text>
          <Button title="Pick the date" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirmDate}
            onCancel={hideDatePicker}
          />
          <Text>{date}</Text>
        </View>
        <View>
          <Text style={styles.label}>Time:</Text>
          <Button title="Pick the time" onPress={showTimePicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleConfirmTime}
            onCancel={hideTimePicker}
          />
          <Text>{time}</Text>
        </View>
        <View>
          <Text style={styles.label}>Symptoms:</Text>
          <TextInput
            style={styles.input}
            multiline
            onChangeText={sympt => {
              setSymptoms(sympt);
            }}
          />
        </View>
        <View>
          <TouchableHighlight
            onPress={() => saveData()}
            style={styles.saveDataBtn}>
            <Text styles={styles.deleteText}>Save Appointment</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 20,
    backgroundColor: '#fff',
    marginHorizontal: '2.5%',
  },

  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    backgroundColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 3,
  },
  saveDataBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'green',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    elevation: 8,
  },
});

export default Form;
