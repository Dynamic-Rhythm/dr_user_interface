import { View, Text, StyleSheet, TextInput } from 'react-native';
import { DeviceHeight, DeviceWidth } from '../DeviceDimensions';
import React from 'react';

const Initialize = () => {
  const deviceHeight = DeviceHeight();
  const deviceWidth = DeviceWidth();

  const styles = StyleSheet.create({
    bpContainer: {
        width: deviceWidth * 0.65,
        height: deviceHeight * 0.15,
        borderRadius: 20,
        backgroundColor: "#363535",
        marginLeft: deviceWidth * 0.025,
        paddingLeft: 15,
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingTop: deviceHeight * 0.01875,
        paddingBottom: deviceHeight * 0.01875,
        borderWidth: 2,
        borderRightColor: "#FF4C29",
        borderBottomColor: "#FF4C29",
        borderTopColor: "#363535",
        borderLeftColor: "#363535",
    },
    text: {
        fontSize: 25,
        color: '#CAC5C5',
    },
    inputContainer: {

      width: deviceWidth * 0.20,
      height: deviceHeight * 0.15,
      borderRadius: 20,
      backgroundColor: "#363535",
      marginRight: 0,
      paddingLeft: 15,
      marginLeft: "auto",
      marginRight: deviceWidth * 0.025,
      justifyContent: "space-between",
      alignItems: "flex-start",
      paddingTop: deviceHeight * 0.01875,
      paddingBottom: deviceHeight * 0.01875,
      borderWidth: 2,
      borderRightColor: "#FF4C29",
      borderBottomColor: "#FF4C29",
      borderTopColor: "#363535",
      borderLeftColor: "#363535",
    
      },
    input: {
       
        fontSize: 30,
        color: '#FF4C29',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 8,
        },
  });

  return (
    <View style={{flexDirection: "row", marginTop: 20}}>
      <View style={[styles.bpContainer]}>
        <Text style={[styles.text]}>Beats / Minute: </Text>
        <Text style={[styles.text]}>Beats / Measure: </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input]}
          placeholder="90"
          placeholderTextColor="grey"
        />
        <TextInput
          style={[styles.input]}
          placeholder="4"
          placeholderTextColor="grey"
        />
      </View>
    </View>
  );
}

export { Initialize };
