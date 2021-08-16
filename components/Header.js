import React, {useState} from 'react';
import {Text, StyleSheet, View, Platform} from 'react-native';

const Header = () => {
  return <Text style={styles.heading}>Crypto</Text>;
};

const styles = StyleSheet.create({
  heading: {
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    fontFamily: 'Lato-Black',
    backgroundColor: '#5E49E2',
    paddingBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFF',
    marginBottom: 30,
  },
});

export default Header;
