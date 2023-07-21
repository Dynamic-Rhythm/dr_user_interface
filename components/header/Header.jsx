import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { DeviceHeight, DeviceWidth } from '../DeviceDimensions';
import React from 'react';


const Header = () => {
  
  const devHeight = DeviceHeight();
  const deviceWidth = DeviceWidth();


  const styles = StyleSheet.create({
  
    container: {
      flexDirection: "row",
      width: "auto",
      marginTop: devHeight*.030,
      alignItems: "center",
      marginBottom: 0,
      justifyContent: 'center',
      height: (75/675)*devHeight,
    },
    text: {
      color: "#CAC5C5",
      fontSize: deviceWidth*.09,
      marginLeft: deviceWidth*.075,
      flex: 1,
    },
    circle: {
      width: deviceWidth*.1,
      height: deviceWidth*.1,
      marginRight: deviceWidth*.025,
      borderRadius: 100,
      backgroundColor: "#FFA500",
      alignItems: "center",
      justifyContent: "center",
    },
    imagePlus: {
      width: deviceWidth*.05,
      height: deviceWidth*.05,
    },
  });
  
  return (
    <View>
      <View style={[styles.container]}>

        <Text style={styles.text}>Dynamic Rhythm</Text>

        <TouchableOpacity>
          <View style={styles.circle}>
            <Image style={styles.imagePlus} source={require('../../assets/images/plus.png')} />
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );

  
}

export { Header };

