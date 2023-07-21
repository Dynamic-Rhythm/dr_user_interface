import { Header } from './header/Header';
import { Initialize } from './initialize/Initialize';
import { Footer } from './footer/Footer';
import { ChangeTime } from './changeTime/ChangeTime';
import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { DeviceWidth } from './DeviceDimensions';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const ExportComponents = () => {

  var deviceWidth = DeviceWidth();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
    },
    deleteButton: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      width: 100,
    },
    deleteButtonContent:{
      backgroundColor: 'rgba(255, 0, 0, 0.4)',
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      height: 100,
      borderRadius: 20,
      marginRight: deviceWidth*.05,
    },
    deleteButtonBox: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 60,
      height: 60,
  
    },
    deleteButtonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });  

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.content}>

        <Header/>
        <Initialize/>

        <ScrollView>
          <ChangeTime/>
        </ScrollView>

      </View>

      <View>
        <Footer/>
      </View>
    </GestureHandlerRootView>
  );

};

export { ExportComponents };
