import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import FormInput from '../components/FormInput';
function RegisterScreen(props) {
  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <FormInput />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default RegisterScreen;
