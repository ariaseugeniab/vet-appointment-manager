import React from 'react';
import {Text, StyleSheet, View, Image, ScrollView} from 'react-native';

const ImageSelector = () => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.subtitle}>Paris</Text>
      </View>
      <ScrollView horizontal>
        <View>
          <Image
            style={styles.banner}
            source={require('../assets/img/actividad2.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.banner}
            source={require('../assets/img/actividad3.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.banner}
            source={require('../assets/img/actividad4.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.banner}
            source={require('../assets/img/actividad5.jpg')}
          />
        </View>
      </ScrollView>
      <Text style={styles.subtitle}>Acommodations</Text>
      <View style={styles.accomodation}>
        <Image
          style={styles.hospes}
          source={require('../assets/img/hospedaje1.jpg')}
        />
        <Image
          style={styles.hospes}
          source={require('../assets/img/hospedaje2.jpg')}
        />
        <Image
          style={styles.hospes}
          source={require('../assets/img/hospedaje3.jpg')}
        />
        <Image
          style={styles.hospes}
          source={require('../assets/img/hospedaje4.jpg')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: 250,
    height: 250,
    // flex: 1,
    marginRight: 20,
  },
  subtitle: {
    fontWeight: 'normal',
    textAlign: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    fontSize: 20,
  },
  accomodation: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  hospes: {
    flexBasis: '49%',
  },
});

export default ImageSelector;
