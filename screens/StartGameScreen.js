import React, { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    // Function to handle changes in the input text
    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    // Function to reset the input text
    function resetInputHandler() {
        setEnteredNumber('');
    }

    // Function to handle confirming the input
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            // Alert the user if the input is invalid
            Alert.alert('Invalid Number!',
                'Number must be between 1 and 99',
                [{ text: 'OK', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.inputContainer}>
            {/* Input field for entering the number */}
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={numberInputHandler}
            />
            {/* Layout for the buttons */}
            <View style={styles.buttonsLayout}>
                {/* Button to reset the input */}
                <View style={styles.buttonLayout}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                {/* Button to confirm the input */}
                <View style={styles.buttonLayout}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#223791',
        borderRadius: 8,
        elevation: 4, // Only for Android
        shadowColor: 'black', // iOS
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
    },
    buttonsLayout: {
        flexDirection: 'row',
    },
    buttonLayout: {
        flex: 1, // Makes the button take the full width
    }
});
