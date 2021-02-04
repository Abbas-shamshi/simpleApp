import { StyleSheet } from 'react-native';
import {
    Dimensions,
} from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    safeArea: {
        backgroundColor: '#00C6FF'
    },




    inputBoxContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    inputBox: {
        backgroundColor: 'lightgrey',
        width: (3 * deviceWidth) / 4,
        height: deviceHeight / 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        color: 'black',
        fontSize: deviceHeight / 30,
        textAlign: 'center',
    },
    conversionContainer: {
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderColor: 'blue',
        height: (9 * deviceHeight) / 10,
        marginTop: 10,

    },
    dropDownContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: deviceHeight / 18,
    },
    picker: {
        height: deviceHeight / 16,
        width: (3 * deviceWidth) / 8,
        transform: [
            { scaleX: 1 },
            { scaleY: 1 },
        ]
    },
    CurrencyValue: {
        fontSize: deviceHeight / 38,
        padding: 10,

    },
    currencyValueContainer: {
        justifyContent: "center",
        alignItems: 'center',
        height: deviceHeight / 10,
        backgroundColor: 'lightgrey',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderRightWidth: 1
    },
    imageConatiner: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    currencyImage: {
        width: (3 * deviceWidth) / 8,
        height: (3 * deviceWidth) / 8,
    },
    pickerHeader: {
        height: deviceHeight / 16,
        width: (2 * deviceWidth) / 3,
        transform: [
            { scaleX: 1.2 },
            { scaleY: 1.2 },
        ],
        color: 'black',
        marginLeft: 30

    },
    button:{
        backgroundColor:'#10A5F5',
        paddingHorizontal:50,
        paddingVertical:10,
        borderRadius:20
    },
    btnText: {
        color: 'white',
        fontSize: deviceHeight / 38,
    },
    ageInputBoxContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40,
    },
    ageInputBox: {
        backgroundColor: 'lightgrey',
        width: deviceWidth / 4,
        height: deviceHeight / 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        color: 'black',
        fontSize: deviceHeight / 30,
        textAlign: 'center',
    },
    resultContainer: {
        height: deviceHeight / 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultText: {
        fontSize: deviceHeight / 22,
        textAlign: 'center',

    },
    ageConversionContainer: {
        paddingBottom: 20,
        borderBottomWidth: 2,
        height: (6 * deviceHeight) / 10,
        marginTop: 10,
        justifyContent: 'center'
    },

});