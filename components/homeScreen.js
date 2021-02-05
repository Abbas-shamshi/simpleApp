import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,

} from 'react-native';

import globalStyle from '../style'

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    icon:'https://cdn.pixabay.com/photo/2018/02/27/01/53/gene-function-3184518_960_720.png'
  };

  _handleTextChange = (inputValue) => {
    this.setState({ inputValue });
  };

  navigator(value) {
    console.log("Hello navigation")

  }
  render() {
    return (
      <ScrollView>

        <View style={styles.container}>

          {/* Heading */}
          <View style={globalStyle.headContainer}>
            <Image
              style={globalStyle.logo}
              source={{ uri: this.state.icon }} />
            <Text style={globalStyle.headText}>Simple App</Text>
          </View>

          <View style={globalStyle.flexContainer}>
            {/* Distance Button Layout */}
            <TouchableOpacity onPress={() => this.navigator('Currency')}>
              <View style={globalStyle.buttonContainer}>
                <Text style={globalStyle.buttonText}>Currency</Text>
              </View>
            </TouchableOpacity>

            {/* Weight Button Layout */}
            <TouchableOpacity onPress={() => this.navigator('Distance')}>
              <View style={globalStyle.buttonContainer}>
                <Text style={globalStyle.buttonText}>Distance</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={globalStyle.flexContainer}>

            {/* Weight Button Layout */}
            <TouchableOpacity onPress={() => this.navigator('Weight')}>
              <View style={globalStyle.buttonContainer}>
                <Text style={globalStyle.buttonText}>Weight</Text>
              </View>
            </TouchableOpacity>

            {/* Temperature Button Layout */}
            <TouchableOpacity onPress={() => this.navigator('Temperature')}>
              <View style={globalStyle.buttonContainer}>
                <Text style={globalStyle.buttonText}>Temperature</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={globalStyle.flexContainer}>

            {/* Speed Button Layout */}
            <TouchableOpacity onPress={() => this.navigator('Speed')}>
              <View style={globalStyle.buttonContainer}>
                <Text style={globalStyle.buttonText}>Speed</Text>
              </View>
            </TouchableOpacity>
            {/* Volume Button */}
            <TouchableOpacity onPress={() => this.navigator('Volume')}>
              <View style={globalStyle.buttonContainer}>
                <Text style={globalStyle.buttonText}>Volume</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={globalStyle.flexContainer}>

            {/* Age Checker Button Layout */}
            <TouchableOpacity onPress={() => this.navigator('Age')}>
              <View style={globalStyle.buttonContainer}>
                <Text style={globalStyle.buttonText}>Age Checker</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View >
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    width: deviceWidth,
  },





  conversionHeadContainer: {
    marginHorizontal: 'auto',
    marginTop: 30,
    alignItems: 'center',
  },
  conversionHeadText: {
    fontSize: deviceHeight / 20,
    fontWeight: 'bold',
    color: '#76b852',
  },
  inputBoxContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  inputBox: {
    backgroundColor: 'grey',
    width: (1.4 * deviceWidth) / 4,
    height: deviceHeight / 10,
    borderRadius: 10,
    fontSize: deviceHeight / 25,
    color: 'black',

    textAlign: 'center',
  },
  conversionContainer: {
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderColor: '#76b852',
  },
  backButtonContainer: {
    backgroundColor: 'white',
    width: (1.2 * deviceWidth) / 6,
    height: deviceHeight / 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  backButtonText: {
    fontSize: deviceHeight / 24,
  },
});
