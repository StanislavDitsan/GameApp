import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPress }) {
    // Function to handle press events
    function pressHandler() {
        onPress();
    }

    // State to track if the button is pressed
    const [isPressed, setIsPressed] = useState(false);

    return (
        <Pressable
            onPress={onPress}
            onPressIn={() => setIsPressed(true)} // Called when the press starts
            onPressOut={() => setIsPressed(false)} // Called when the press ends
            style={({ pressed }) => [
                styles.container,
                pressed && { opacity: 0.75 } // Reduce opacity when pressed
            ]}
        >
            {/* View to contain the button's text */}
            <View>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffd036',
        borderRadius: 28,
        margin: 4,
        padding: 8,
        paddingHorizontal: 16,
        shadowColor: 'black', // iOS
        shadowOffset: { width: 2, height: 1 },
        shadowRadius: 6,
        shadowOpacity: 0.6, // iOS end
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
    },
});
