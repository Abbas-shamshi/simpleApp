import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,

} from 'react-native';
import { Picker } from '@react-native-community/picker';

import globalStyle from '../style';

export default class VolumeVC extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        ValueA: '',
        ValueB: '',
        from: 'Ltr',
        to: 'Gln',
        exchangeImage: 'https://newtonfoxbds.com/wp-content/uploads/2017/01/Two_way-data-exchange.gif',
    };


    render() {
        return (
            <ScrollView>
                <View style={globalStyle.container}>
                    <View style={globalStyle.headContainer}>
                        <View style={globalStyle.headTextContainer}>

                            {/* Navigate Different Pages */}
                            <Picker
                                style={globalStyle.pickerHeader}
                                onValueChange={(value) => this.navigator(value)}
                            >
                                <Picker.Item label="Volume Converter" value="Volume" />
                                <Picker.Item label="Currency Converter" value="Currency" />
                                <Picker.Item label="Distance Converter" value="Distance" />
                                <Picker.Item label="Weight Converter" value="Weight" />
                                <Picker.Item label="Temperature Converter" value="Temperature" />
                                <Picker.Item label="Speed Converter" value="Speed" />
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

                        {/* Select Different Conversion Options */}
                        <View style={globalStyle.dropDownContainer}>
                            <Picker
                                selectedValue={this.state.from}
                                style={globalStyle.picker}
                                onValueChange={(itemValue) => this.valuePicker(itemValue, 'picker1')}
                            >
                                <Picker.Item label="Liter" value="Ltr" />
                                <Picker.Item label="Milliliter" value="Ml" />
                                <Picker.Item label="Gallon" value="Gln" />
                                <Picker.Item label="Pint" value="Pint" />
                            </Picker>
                            <Picker
                                selectedValue={this.state.to}
                                style={globalStyle.picker}
                                onValueChange={(itemValue) => this.valuePicker(itemValue, 'picker2')}
                            >
                                <Picker.Item label="Gallon" value="Gln" />
                                <Picker.Item label="Liter" value="Ltr" />
                                <Picker.Item label="Milliliter" value="Ml" />
                                <Picker.Item label="Pint" value="Pint" />

                            </Picker>
                        </View>

                        {/* Accept input for conversion */}
                        <View style={globalStyle.inputBoxContainer}>
                            <View style={globalStyle.currencyValueContainer}>
                                <Text style={globalStyle.CurrencyValue}>
                                    {this.state.from}
                                </Text>
                            </View>
                            <TextInput
                                style={globalStyle.inputBox}
                                placeholder={'Enter Value'}

                                keyboardType={'numeric'}
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

                        {/* To Clear the Inputs */}
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
