import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';



const FocusScreen = () => {
    const percentage = 66;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to Focus screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    },
});

export default FocusScreen;