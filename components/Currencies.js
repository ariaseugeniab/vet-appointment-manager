import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Currencies = ({coin, cryptoCoin, result}) => {
  if (Object.keys(result).length === 0) return null;
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultText}>
        The currency of {cryptoCoin} in {coin} is{' '}
        <Text style={[styles.resultText, styles.span]}>{result.PRICE}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    backgroundColor: '#fff',
    color: '#000',
    height: 100,
    marginVertical: 20,
    padding: 20,
  },
  resultText: {
    paddingVertical: 20,
    fontFamily: 'Lato-Regular',
    fontSize: 20,
  },
  span: {
    fontFamily: 'Lato-Black',
  },
});

export default Currencies;
