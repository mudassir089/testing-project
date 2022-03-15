import React, {useState} from 'react';
import {
  Text,
  Input,
  FormControl,
  Radio,
  Checkbox,
  View,
  useToast,
} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import data from './data.json';
function FormInput(props) {
  const [input, setInput] = useState('');
  const [radioValue, setRadioValue] = useState('Male');
  const [checkboxValue, setCheckboxValue] = useState(['Music']);
  const [showTable, setShowTable] = useState(false);
  const toast = useToast();
  const handleSaveData = () => {
    console.log(typeof checkboxValue);
    if (input == '' || checkboxValue.length == 0) {
      toast.show({
        title: 'plz enter name and hobbies',
        placement: 'top',
        backgroundColor: 'red.400',
        duration: 2000,
      });
    } else {
      setShowTable(true);
    }
  };

  return (
    <>
      {showTable ? (
        <View my={4}>
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => setShowTable(false)}>
            <Text color="gray.500" fontWeight={'bold'} fontSize={20}>
              👈 Go Back
            </Text>
          </TouchableOpacity>
          <View justifyContent={'center'} alignItems={'center'} my={3}>
            <Text fontSize={25} fontWeight={'bold'} color={'gray.500'}>
              Form Data
            </Text>
          </View>
          <View
            bg={'lightBlue.50'}
            width={'95%'}
            p={3}
            alignSelf="center"
            flexDir={'row'}>
            <Text
              w={'30%'}
              color={'gray.500'}
              fontWeight={'bold'}
              fontSize={16}>
              Name
            </Text>
            <Text
              w={'30%'}
              color={'gray.500'}
              fontWeight={'bold'}
              fontSize={16}>
              Gender
            </Text>
            <Text
              w={'40%'}
              textAlign={'center'}
              color={'gray.500'}
              fontWeight={'bold'}
              fontSize={16}>
              Hobbies
            </Text>
          </View>
          <View
            borderTopWidth={0.5}
            borderColor="black"
            bg={'gray.50'}
            width={'95%'}
            p={3}
            alignSelf="center"
            flexDir={'row'}>
            <Text px={1} w={'30%'} color={'black'} fontSize={15}>
              {input}
            </Text>
            <Text px={1} w={'30%'} color={'black'} fontSize={15}>
              {radioValue}
            </Text>
            <Text
              px={1}
              w={'40%'}
              textAlign={'center'}
              color={'black'}
              fontSize={15}>
              {checkboxValue[0]} {checkboxValue[1]} {checkboxValue[2]}
            </Text>
          </View>
        </View>
      ) : (
        <View m={5}>
          <FormControl.Label my={3}>
            <Text fontSize={18}>{data?.form[0]?.label}</Text>
          </FormControl.Label>
          <Input
            value={input}
            onChangeText={text => setInput(text)}
            fontSize={16}
            variant={'underlined'}
            type={data?.form[0]?.type}
            placeholder={'Enter Your Name'}
            _focus={{borderColor: 'orange.500', borderWidth: 1}}
          />
          <FormControl.Label my={5}>
            <Text fontSize={18}>{data?.form[1]?.label}</Text>
          </FormControl.Label>
          <Radio.Group
            defaultValue={data?.form[1]?.options[0]}
            name="choose gender"
            accessibilityLabel="Choose Your Gender"
            value={radioValue}
            onChange={val => setRadioValue(val)}>
            <Radio
              value={data?.form[1]?.options[0]}
              my={1}
              borderColor="orange.500"
              colorScheme="warning">
              {data?.form[1]?.options[0]}
            </Radio>
            <Radio
              value={data?.form[1]?.options[1]}
              my={1}
              borderColor="orange.500"
              colorScheme="warning">
              {data?.form[1]?.options[1]}
            </Radio>
          </Radio.Group>
          <FormControl.Label my={5}>
            <Text fontSize={18}>{data?.form[2]?.label}</Text>
          </FormControl.Label>
          <Checkbox.Group
            defaultValue={checkboxValue}
            onChange={val => setCheckboxValue(val || [])}>
            <Checkbox
              borderColor={'orange.500'}
              colorScheme="orange"
              value={data?.form[2]?.options[0]}
              my={1}>
              {data?.form[2]?.options[0]}
            </Checkbox>
            <Checkbox
              borderColor={'orange.500'}
              colorScheme="orange"
              value={data?.form[2]?.options[1]}
              my={1}>
              {data?.form[2]?.options[1]}
            </Checkbox>
            <Checkbox
              borderColor={'orange.500'}
              colorScheme="orange"
              value={data?.form[2]?.options[2]}
              my={1}>
              {data?.form[2]?.options[2]}
            </Checkbox>
          </Checkbox.Group>
          <View>
            <TouchableOpacity
              onPress={handleSaveData}
              style={styles.buttonContainer}>
              <Text fontSize={15} color={'#FFF'}>
                SUBMIT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#F76300',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    padding: 8,
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 4,
  },
});
export default FormInput;
