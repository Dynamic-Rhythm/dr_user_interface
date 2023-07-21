import { SafeAreaView, View, ImageBackground } from 'react-native';
import { ExportComponents } from './components/ExportComponents';


function App() {

  
  
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('./assets/images/gradient.png')} style={{ flex: 1 }}>

        <SafeAreaView/>
          <ExportComponents/>
        <SafeAreaView/>

      </ImageBackground>
    </View>

  );
}

export default App;
