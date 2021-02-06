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
import globalStyle from '../style'
import LinearGradient from 'react-native-linear-gradient';

export default class WeightVC extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        ValueA: '',
        ValueB: '',
        from: 'KG',
        to: 'Pound',
        exchangeImage: 'https://newtonfoxbds.com/wp-content/uploads/2017/01/Two_way-data-exchange.gif',
    };
    // ================To Navigate=======================

    navigator(value) {
        console.log("Hello navigation")

    }

    //   ==================================================

    // =====================To reset Values ===============
    clear = () => {
        this.setState({
            ValueA: '',
            ValueB: '',
        })
    }
    // =====================================================

    // ============Select different conversion options=======
    valuePicker(itemValue, pickerNO) {
        if (pickerNO == 'picker1') {
            this.setState({
                from: itemValue,
                ValueA: '',
                ValueB: '0',
            })
        } else if (pickerNO == 'picker2') {
            this.setState({
                to: itemValue,
                ValueA: '',
                ValueB: '',
            })
        }
    }
    // ================================================================

    //==============Identify Which conversion to Calcualate============

    converter(value, input) {
        console.log(input);
        if (input == 'value1') {
            this.setState({
                ValueA: value,
            })
            if (this.state.from == 'KG' && this.state.to == 'Pound') {
                this.setState({
                    ValueB: String((parseInt(value) * 2.2).toFixed(2)),
                });
                console.log('KM TO CM')
            } else if (this.state.from == 'KG' && this.state.to == 'Gram') {
                this.setState({
                    ValueB: String((parseInt(value) * 1000).toFixed(2)),
                });
                console.log('KM TO Mile')
            } else if (this.state.from == 'KG' && this.state.to == 'Ounces') {
                this.setState({
                    ValueB: String((parseInt(value) * 35.274).toFixed(2)),
                });
                console.log('KM TO Meter')
            } else if (this.state.from == 'Pound' && this.state.to == 'KG') {
                this.setState({
                    ValueB: String((parseInt(value) / 2.20).toFixed(2)),
                });
                console.log('CM TO KM')
            } else if (this.state.from == 'Pound' && this.state.to == 'Gram') {
                this.setState({
                    ValueB: String((parseInt(value) * 454).toFixed(2)),
                });
                console.log('CM TO Mile')
            } else if (this.state.from == 'Pound' && this.state.to == 'Ounces') {
                this.setState({
                    ValueB: String((parseInt(value) * 16).toFixed(2)),
                });
                console.log('CM TO Meter')
            } else if (this.state.from == 'Gram' && this.state.to == 'KG') {
                this.setState({
                    ValueB: String((parseInt(value) / 1000).toFixed(2)),
                });
                console.log('Mile TO KM')
            } else if (this.state.from == 'Gram' && this.state.to == 'Pound') {
                this.setState({
                    ValueB: String((parseInt(value) / 454).toFixed(2)),
                });
                console.log('Mile TO CM')
            } else if (this.state.from == 'Gram' && this.state.to == 'Ounces') {
                this.setState({
                    ValueB: String((parseInt(value) / 28.35).toFixed(2)),
                });
                console.log('Mile TO Meter')
            } else if (this.state.from == 'Ounces' && this.state.to == 'KG') {
                this.setState({
                    ValueB: String((parseInt(value) / 35.2).toFixed(2)),
                });
                console.log('Meter TO KM')
            } else if (this.state.from == 'Ounces' && this.state.to == 'Pound') {
                this.setState({
                    ValueB: String((parseInt(value) / 16).toFixed(2)),
                });
                console.log('Meter TO CM')
            } else if (this.state.from == 'Ounces' && this.state.to == 'Gram') {
                this.setState({
                    ValueB: String((parseInt(value) * 28.3).toFixed(2)),
                });
                console.log('Meter TO Mile')
            } else if (this.state.from == 'Ounces' && this.state.to == 'Ounces') {
                this.setState({
                    ValueB: value,
                });
                console.log('Meter TO Meter')
            } else if (this.state.from == 'Gram' && this.state.to == 'Gram') {
                this.setState({
                    ValueB: value,
                });
                console.log('Mile TO Mile')
            } else if (this.state.from == 'Pound' && this.state.to == 'Pound') {
                this.setState({
                    ValueB: value,
                });
                console.log('KM TO KM')
            } else if (this.state.from == 'KG' && this.state.to == 'KG') {
                this.setState({
                    ValueB: value,
                });
                console.log('CM TO CM')
            }
        }
    }
    // ================================================================

    render() {
        return (
            <ScrollView>
                <View style={globalStyle.container}>
                    <View style={globalStyle.headContainer}>
                        <View style={globalStyle.headTextContainer}>

                            {/* Navigate Different Pages */}
                            <Picker
                                selectedValue={this.state.fromCurrency}
                                style={globalStyle.pickerHeader}
                                onValueChange={(value) => this.navigator(value)}
                            >
                                <Picker.Item label="Weight Converter" value="Weight" />
                                <Picker.Item label="Currency Converter" value="Currency" />
                                <Picker.Item label="Distance Converter" value="Distance" />
                                <Picker.Item label="Temperature Converter" value="Temperature" />
                                <Picker.Item label="Speed Converter" value="Speed" />
                                <Picker.Item label="Volume Converter" value="Volume" />
                                <Picker.Item label="Age Checker" value="Age" />
                            </Picker>
                        </View>
                    </View>

                    {/* Exchange Image==== */}
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
                                <Picker.Item label="KG" value="KG" />
                                <Picker.Item label="Pound" value="Pound" />
                                <Picker.Item label="Gram" value="Gram" />
                                <Picker.Item label="Ounces" value="Ounces" />
                            </Picker>
                            <Picker
                                selectedValue={this.state.to}
                                style={globalStyle.picker}
                                onValueChange={(itemValue) => this.valuePicker(itemValue, 'picker2')}
                            >
                                <Picker.Item label="KG" value="KG" />
                                <Picker.Item label="Pound" value="Pound" />
                                <Picker.Item label="Gram" value="Gram" />
                                <Picker.Item label="Ounces" value="Ounces" />
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
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4878db', '#3b5998', '#192f6a']} style={globalStyle.button}>
                                    <Text style={globalStyle.btnText}>
                                        Clear
                                    </Text>
                                </LinearGradient>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
