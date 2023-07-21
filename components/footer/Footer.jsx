import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { DeviceHeight, DeviceWidth } from '../DeviceDimensions';


const Footer = () => {
  const deviceHeight = DeviceHeight();
  const deviceWidth = DeviceWidth();

  const split = DeviceWidth() / 7;

  const leftPadding = {
    paddingLeft: split
  };

  const rightPadding = {
    paddingRight: split
  };
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      width: '96%',
      height: deviceHeight * 0.085,
      flexDirection: 'row',
      backgroundColor: '#363535',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'center',
      marginRight: deviceWidth * 0.025,
      marginLeft: deviceWidth * 0.025,
      borderRadius: 20
    },
    imageContainer: {
      tintColor: '#FFA500'
    }
  });
  return (
    <View style={styles.container}>

      <TouchableOpacity>
          <Image style={[leftPadding, styles.imageContainer, { width: 60, height: 60 }]} source={require('../../assets/images/refresh.png')} />
      </TouchableOpacity>

      <TouchableOpacity>
          <Image style={{tintColor: '#FFA500', width: 60, height: 60}} source={require('../../assets/images/play.png')} />
      </TouchableOpacity>

      <TouchableOpacity>
          <Image style={[rightPadding, styles.imageContainer, { width: 60, height: 60 }]} source={require('../../assets/images/settings.png')} />
      </TouchableOpacity>

    </View>
  );
};

export { Footer };
