import React from 'react';
import {StyleSheet, View} from 'react-native';
import Rows from './row';
import Buttons from './buttons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RowSeparator = () => <View style={styles.rowSeparator} />;

const ButtonRows = ({
  handleClear,
  handlePress,
  handleEqual,
}: any): JSX.Element => {
  return (
    <>
      <View style={styles.buttonContainer}>
        <Rows>
          <Buttons type="clear" label={'C'} handlePress={handleClear} icon="" />
          <Buttons
            type="operator"
            label={'( )'}
            handlePress={handlePress}
            icon={
              <MaterialCommunityIcons
                name="code-parentheses"
                size={30}
                color="green"
                style={{fontWeight: 'bold'}}
              />
            }
          />
          <Buttons
            type="operator"
            label={'%'}
            handlePress={handlePress}
            icon={<FontAwesome5 name="percent" size={24} color="green" />}
          />
          <Buttons
            type="operator"
            label={'/'}
            handlePress={handlePress}
            icon={<FontAwesome5 name="divide" size={24} color="green" />}
          />
        </Rows>
        <RowSeparator />
        <Rows>
          <Buttons type="" handlePress={handlePress} label={'7'} icon={''} />
          <Buttons type="" handlePress={handlePress} label={'8'} icon={''} />
          <Buttons type="" handlePress={handlePress} label={'9'} icon={''} />
          <Buttons
            type="operator"
            label={'*'}
            handlePress={handlePress}
            icon={<FontAwesome5 name="times" size={24} color="green" />}
          />
        </Rows>
        <RowSeparator />
        <Rows>
          <Buttons type="" handlePress={handlePress} label={'4'} icon={''} />
          <Buttons type="" handlePress={handlePress} label={'5'} icon={''} />
          <Buttons type="" handlePress={handlePress} label={'6'} icon={''} />
          <Buttons
            type="operator"
            label={'-'}
            handlePress={handlePress}
            icon={<FontAwesome5 name="minus" size={24} color="green" />}
          />
        </Rows>
        <RowSeparator />
        <Rows>
          <Buttons type="" handlePress={handlePress} label={'1'} icon={''} />
          <Buttons type="" handlePress={handlePress} label={'2'} icon={''} />
          <Buttons type="" handlePress={handlePress} label={'3'} icon={''} />
          <Buttons
            type="operator"
            label={'+'}
            handlePress={handlePress}
            icon={<FontAwesome5 name="plus" size={24} color="green" />}
          />
        </Rows>
        <RowSeparator />
        <Rows>
          <Buttons type="" handlePress={handlePress} label={'+/-'} icon={''} />
          <Buttons type="" handlePress={handlePress} label={'0'} icon={''} />
          <Buttons type="" handlePress={handlePress} label={'.'} icon={''} />
          <Buttons
            type="equal"
            label={'='}
            handlePress={handleEqual}
            icon={<FontAwesome5 name="equals" size={24} color="white" />}
          />
        </Rows>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {flex: 4},
  rowSeparator: {
    height: 10,
  },
});

export default ButtonRows;
