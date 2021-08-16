import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const CryptoForm = ({
  coin,
  setCoin,
  cryptoCoin,
  setcryptoCoin,
  setGetResults,
}) => {
  const [cryptoCoins, setcryptoCoins] = useState([]);

  const getSelectedCoin = selectedCoin => {
    console.log('coin', selectedCoin);
    setCoin(selectedCoin);
  };

  const getSelectedCrypto = selectedCrypto => {
    console.log('Crypto', selectedCrypto);
    setcryptoCoin(selectedCrypto);
  };

  const getCurrency = () => {
    console.log('getting');
    if (coin.trim() === '' || cryptoCoin.trim() === '') {
      getAlert();
      setGetResults(false);
      return;
    } else {
      setGetResults(true);
    }
  };

  const getAlert = () => {
    Alert.alert('Error', 'Complete all fields to search', [{text: 'Ok'}]);
  };

  useEffect(() => {
    const getApi = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      try {
        const response = await fetch(url);
        const res = await response.json();
        setcryptoCoins(res.Data);
        console.log(cryptoCoins);
      } catch (err) {
        console.log('fetch failed', err);
      }
    };
    getApi();
  }, []);

  return (
    <View>
      <Text style={styles.label}>Currency</Text>
      <Picker onValueChange={selectedCoin => getSelectedCoin(selectedCoin)}>
        <Picker.Item label="Select" value="" />
        <Picker.Item label="US Dolar" value="USD" />
        <Picker.Item label="ARS" value="ARS" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Pound" value="GBP" />
      </Picker>
      <Text style={styles.label}>Crypto coin</Text>
      <Picker
        onValueChange={selectedCrypto => getSelectedCrypto(selectedCrypto)}>
        <Picker.Item label="Select" value="" />
        {cryptoCoins.length > 0 &&
          cryptoCoins.map(cryp => (
            <Picker.Item
              key={cryp.CoinInfo.Id}
              label={cryp.CoinInfo.FullName}
              value={cryp.CoinInfo.Name}
            />
          ))}
      </Picker>
      <TouchableHighlight
        onPressOut={() => {
          getCurrency();
        }}
        style={styles.getBtn}>
        <Text style={styles.getBtnText}>Get Currency</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    fontSize: 20,
    textTransform: 'uppercase',
    marginVertical: 20,
  },
  getBtn: {
    padding: 10,
    marginTop: 20,
    backgroundColor: '#5E49E2',
    marginHorizontal: 20,
  },
  getBtnText: {
    color: '#FFF',
    fontSize: 19,
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    textAlign: 'center',
    width: '80%',
    marginHorizontal: 20,
  },
});

export default CryptoForm;
