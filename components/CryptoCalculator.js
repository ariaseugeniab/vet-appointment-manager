import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Header from '../components/Header';
import CryptoForm from '../components/CryptoForm';
import Currencies from '../components/Currencies';

const CryptoCalculator = () => {
  const [coin, setCoin] = useState('');
  const [cryptoCoin, setcryptoCoin] = useState('');
  const [getResults, setGetResults] = useState(false);
  const [result, setResults] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (getResults) {
      setLoading(true);
      const getApiResults = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${coin}`;
        console.log('get results changed', url);
        try {
          const response = await fetch(url);
          const res = await response.json();
          // setcryptoCoins(res.Data);
          setResults(res.DISPLAY[cryptoCoin][coin]);
          setGetResults(false);
          setLoading(false);
        } catch (err) {
          console.log('fetch failed', err);
        }
      };
      getApiResults();
    }
  }, [getResults, coin, cryptoCoin]);

  return (
    <ScrollView>
      <View>
        <Header />
        <Image
          style={styles.cryptoImage}
          source={require('../assets/img/cryptomonedas.png')}
        />
        <View style={styles.cryptoContainer}>
          <CryptoForm
            coin={coin}
            cryptoCoin={cryptoCoin}
            setCoin={setCoin}
            setcryptoCoin={setcryptoCoin}
            setGetResults={setGetResults}
          />
        </View>
        {loading ? (
          <View style={{paddingTop: 20}}>
            <ActivityIndicator size="large" color="#FFF" />
          </View>
        ) : (
          <Currencies coin={coin} cryptoCoin={cryptoCoin} result={result} />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cryptoImage: {
    width: '98%',
    height: 150,
    // marginHorizontal: '2,5%',
  },
  cryptoContainer: {
    width: '98%',
    marginHorizontal: 20,
  },
});

export default CryptoCalculator;
