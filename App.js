import React from 'react';
import {NativeBaseProvider} from 'native-base';
import RegisterScreen from './src/screens/RegisterScreen';

function App(props) {
  return (
    <NativeBaseProvider>
      <RegisterScreen />
    </NativeBaseProvider>
  );
}

export default App;
