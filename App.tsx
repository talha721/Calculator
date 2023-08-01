import React from 'react';
import {StyleSheet, View} from 'react-native';

// components
import Calculator from './components/calculator';

function App(): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.row}>
        <Calculator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#010101',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;
