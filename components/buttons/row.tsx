import React from 'react';
import {StyleSheet, View} from 'react-native';

const Rows = ({children}: any): JSX.Element => {
  return <View style={styles.row}>{children}</View>;
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default Rows;
