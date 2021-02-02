import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import {Picker} from '@react-native-community/picker';

import globalStyle from '../style'

export default class TemperatureVC extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    ValueA: '',
    ValueB: '',
    from: 'Celsius',
    to: 'Kelvin',
    exchangeImage: 'https://newtonfoxbds.com/wp-content/uploads/2017/01/Two_way-data-exchange.gif',
  };



  render() {
    return (
      <ScrollView>
        <View style={globalStyle.container}>
          <View style={globalStyle.headContainer}>
            <View style={globalStyle.headTextContainer}>
              <Picker
                style={globalStyle.pickerHeader}
                onValueChange={(value) => this.navigator(value)}
              >
                <Picker.Item label="Temperature Converter" value="Temperature" />
                <Picker.Item label="Currency Converter" value="Currency" />
                <Picker.Item label="Distance Converter" value="Distance" />
                <Picker.Item label="Weight Converter" value="Weight" />
                <Picker.Item label="Speed Converter" value="Speed" />
                <Picker.Item label="Volume Converter" value="Volume" />
                <Picker.Item label="Age Checker" value="Age" />

              </Picker>
            </View>
          </View>


          <View style={globalStyle.conversionContainer}>
            <View style={globalStyle.imageConatiner}>
              <Image
                style={globalStyle.currencyImage}
                source={{ uri: this.state.exchangeImage }} />

            </View>

            <View style={globalStyle.dropDownContainer}>
              <Picker
                selectedValue={this.state.from}
                style={globalStyle.picker}
                onValueChange={(itemValue) => this.valuePicker(itemValue, 'picker1')}
              >
                <Picker.Item label="Celsius" value="Celsius" />
                <Picker.Item label="Kelvin" value="Kelvin" />
                <Picker.Item label="Fahrenheit " value="Frhn" />
              </Picker>
              <Picker
                selectedValue={this.state.to}
                style={globalStyle.picker}
                onValueChange={(itemValue) => this.valuePicker(itemValue, 'picker2')}
              >
                <Picker.Item label="Celsius" value="Celsius" />
                <Picker.Item label="Kelvin" value="Kelvin" />
                <Picker.Item label="Fahrenheit " value="Frhn" />

              </Picker>
            </View>

            <View style={globalStyle.inputBoxContainer}>
              <View style={globalStyle.currencyValueContainer}>
                <Text style={globalStyle.CurrencyValue}>
                  {this.state.from}
                </Text>
              </View>
              <TextInput
                style={globalStyle.inputBox}
                keyboardType={'numeric'}
                placeholder={'Enter Value'}

                value={this.state.ValueA}
                onChangeText={(value) => this.converter(value, 'value1')}
              />


            </View>
            <View style={globalStyle.inputBoxContainer}>
              <View style={globalStyle.currencyValueContainer}>
                <Text style={globalStyle.CurrencyValue}>
                  {this.state.to}
                </Text>
              </View>
              <TextInput
                editable={false}

                style={globalStyle.inputBox}
                keyboardType={'numeric'}
                value={this.state.ValueB}
                onChangeText={(value) => this.converter(value, 'value2')}
              />


            </View>
            <TouchableOpacity
              onPress={this.clear}>
              <View style={globalStyle.inputBoxContainer}>
                <View style={globalStyle.button} >
                  <Text style={globalStyle.btnText}>
                    Clear
                  </Text>
                </View>

              </View>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    );
  }
}
