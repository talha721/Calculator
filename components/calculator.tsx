import React, {useEffect, useState} from 'react';
import {View, TextInput, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ButtonRows from './buttons/buttonRows';
import {valueHasOp} from './buttons/funcations/valueHasOp';

const Calculator = (): JSX.Element => {
  const [calculate, setCalculate] = useState<string>('');
  const [previewValue, setPreviewValue] = useState<string>('');
  const [isAnswer, setIsAnswer] = useState<boolean>(false);
  const [cursorSel, setCursorSel] = useState<{end: number; start: number}>({
    end: 0,
    start: 0,
  });
  const [isCursorSel, setIsCursorSel] = useState<boolean>(false);

  useEffect(() => {
    if (valueHasOp(calculate)) {
      let prevAns = JSON.stringify(eval(calculate));
      setPreviewValue(prevAns);
    } else {
      setPreviewValue('');
    }
  }, [calculate]);

  const handleBackSpace = () => {
    const value = calculate.slice(0, calculate.length - 1);
    setCalculate(value);
  };

  const ansColor = {
    color: isAnswer ? 'green' : 'white',
  };

  const handlePress = (text: string) => {
    setIsAnswer(false);
    const corrText = text === 'X' ? '*' : text === '+/-' ? '-' : text;
    setCursorSel({end: cursorSel.end + 1, start: cursorSel.start + 1});
    setCalculate(prev => {
      if (prev.length !== cursorSel.end && isCursorSel) {
        let leftOver = prev.slice(0, cursorSel.end);
        let rightOver = prev.slice(cursorSel.end, prev.length);

        return `${leftOver}` + `${corrText}` + `${rightOver}`;
      }
      return prev + `${corrText}`;
    });
  };

  const handleClear = () => {
    setCalculate('');
  };

  const handleEqual = () => {
    if (!previewValue) return;
    setCalculate(previewValue);
    setPreviewValue('');
    setIsAnswer(true);
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <TextInput
          style={[styles.input, ansColor]}
          value={calculate}
          onChangeText={setCalculate}
          autoFocus={true}
          textAlign="right"
          showSoftInputOnFocus={false}
          cursorColor="#8ad8d1"
          selection={cursorSel}
          onSelectionChange={e => {
            setIsCursorSel(true);
            setCursorSel(e.nativeEvent.selection);
          }}
        />
        <TextInput
          value={previewValue}
          onChangeText={setPreviewValue}
          cursorColor="#8ad8d1"
          textAlign="right"
          showSoftInputOnFocus={false}
          caretHidden={true}
          style={[styles.input, styles.prevInput]}
        />
      </View>

      <View style={styles.backButton}>
        <Pressable
          onPress={() => handleBackSpace()}
          disabled={calculate ? false : true}>
          <Icon
            name="backspace-outline"
            size={26}
            color={calculate ? 'green' : '#035903'}
          />
        </Pressable>
      </View>

      <View
        style={{
          height: 1,
          backgroundColor: '#575757',
          marginVertical: 20,
        }}
      />

      {/* Buttons Row */}
      <ButtonRows
        handleClear={handleClear}
        handlePress={handlePress}
        handleEqual={handleEqual}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 40,
    borderWidth: 1,
    padding: 10,
    color: '#fff',
    fontSize: 36,
  },
  prevInput: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 10,
    color: '#616161',
  },
  backButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default Calculator;
