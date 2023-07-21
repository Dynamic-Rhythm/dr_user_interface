import { Text, View, TextInput, StyleSheet } from 'react-native';
import { DeviceWidth } from '../DeviceDimensions';

import React from 'react';

const ChangeTime = () => {

  const deviceWidth = DeviceWidth();
 
const styles = StyleSheet.create({
  container: {
    marginLeft: deviceWidth * 0.025,
    marginRight: deviceWidth * 0.025,
    backgroundColor: '#232B2B',
    borderLeftColor: '#363535',
    borderTopColor: '#363535',
    borderRightColor: '#6AC6DA',
    borderBottomColor: '#6AC6DA',
    borderWidth: 2,
    marginTop: 10,
    borderRadius: 15,
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },
  line1Container: {
    paddingTop: 10,
    flexDirection: 'row',
  },
  line2Container: {
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  text: {
    color: '#CAC5C5',
    fontSize: deviceWidth *.05,
    paddingRight: 10,
  },
  input: {
    fontSize: 20,
    color: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'grey',
    flex: 1,
    fontSize: 20,
    paddingRight: 0,
  },
});

  return (
    <View style={styles.container}>
      <View style={styles.line1Container}>
        <Text style={styles.text}>After</Text>
        <TextInput
          style={styles.input}
          placeholder="5"
          placeholderTextColor="grey"
        />
        <Text style={[styles.text, {paddingLeft: 10}]}>measures set to</Text>
        <TextInput
          style={[styles.input, { width: 90 }]}
          placeholder="60"
          placeholderTextColor="grey"
        />  
      </View>
      <View style={styles.line2Container}>
        
        <Text style={styles.text}>Beats / Minute at</Text>
        <TextInput
          style={[styles.input, { width: 90 }]}
          placeholder="3"
          placeholderTextColor="grey"
        />
        <Text style={[styles.text, {paddingLeft: 10}]}>Beats / Measure</Text>
      </View>
    </View>
  );
};



export { ChangeTime };