import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import globalStyle from '../style';

export default class ageChecker extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        year: undefined,
        month: undefined,
        day: undefined,
        message: undefined,

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
                                <Picker.Item label="Age Checker" value="Age" />
                                <Picker.Item label="Currency Converter" value="Currency" />
                                <Picker.Item label="Distance Converter" value="Distance" />
                                <Picker.Item label="Weight Converter" value="Weight" />
                                <Picker.Item label="Temperature Converter" value="Temperature" />
                                <Picker.Item label="Speed Converter" value="Speed" />
                                <Picker.Item label="Volume Converter" value="Volume" />
                            </Picker>
                        </View>
                    </View>

                    {/* To Print Date based on input date  */}
                    <View style={globalStyle.ageConversionContainer}>
                        <View style={globalStyle.resultContainer}>
                            <Text style={globalStyle.resultText}>
                                {this.state.message}
                            </Text>
                        </View>

                        {/* Accept input for the Date */}
                        <View style={globalStyle.ageInputBoxContainer}>
                            <TextInput
                                style={globalStyle.ageInputBox}
                                placeholder={'Day'}

                                keyboardType={'numeric'}
                                onChangeText={(value) => this.setState({ day: value })}
                            />
                            <TextInput
                                style={globalStyle.ageInputBox}
                                placeholder={'Month'}

                                keyboardType={'numeric'}
                                onChangeText={(value) => this.setState({ month: value })}
                            />
                            <TextInput
                                style={globalStyle.ageInputBox}
                                placeholder={'Year'}

                                keyboardType={'numeric'}
                                onChangeText={(value) => this.setState({ year: value })}
                            />
                        </View>

                        {/* Calcuate Button */}
                        <TouchableOpacity
                            onPress={this.Calculate}>
                            <View style={globalStyle.inputBoxContainer}>
                                <View style={globalStyle.button} >
                                    <Text style={globalStyle.btnText}>
                                        Calculate
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
