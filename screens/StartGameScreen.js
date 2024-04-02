import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import * as Font from 'expo-font';

function StartGameScreen() {
    return (

        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({

    inputContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#223791',
        borderRadius: 8,
        elevation: 4, //Only for Android
        shadowColor: 'black', //iOS
        shadowOffset: { width: 2, height: 1 },
        shadowRadius: 6,
        shadowOpacity: 0.6, // iOS end
    },

    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ffd036',
        borderBottomWidth: 2,
        color: '#ffd036',
        marginVertical: 8,
        textAlign: 'center',
    }

});