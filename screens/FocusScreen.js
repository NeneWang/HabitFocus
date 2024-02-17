import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Badge, HStack, Box, Pressable } from 'native-base';
import { useRef } from 'react';
import { CircularProgress, ProgressRef } from 'react-native-circular-progress-indicator';




const FocusScreen = () => {
    const percentage = 66;
    const buttons = ['Algorithms', 'Study', 'Engineering']; // Replace with your array

    const progressRef = useRef < ProgressRef > (null);

    const handleStart = () => {

        // to play animation
        progressRef.current.play();
    }

    const handlePause = () => {
        progressRef.current.pause();
    }

    const handleReset = () => {

        // to re-play animation
        progressRef.current.reAnimate();
    }


    return (
        <View style={styles.container}>
            <Box style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}  >

                <Pressable borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">

                    <Text style={styles.text}>Focus Screen</Text>
                    <HStack alignItems='center' justifyContent='center'>
                        <FlatList
                            data={buttons}
                            horizontal
                            contentContainerStyle={{ justifyContent: 'center' }}
                            renderItem={({ item }) => (
                                <Badge
                                    colorScheme="darkBlue"
                                    _text={{ color: "white" }}
                                    variant="solid"
                                    rounded="4"
                                    m="1"
                                >
                                    {item}
                                </Badge>
                            )}
                            keyExtractor={(item) => item}
                        />
                    </HStack>
                    <CircularProgress
                        value={0}
                        radius={50}
                        maxValue={10}
                        initialValue={10}
                        progressValueColor={'#fff'}
                        activeStrokeWidth={15}
                        inActiveStrokeWidth={15}
                        duration={10000}
                        onAnimationComplete={() => alert('time out')}
                    />
                    <Text>25 minutes</Text>
                    <Text mt="5" fontSize="sm" color="coolGray.700">
                        Rules: do an algorithm then play 10 minutes of a game (Take a break)
                    </Text>
                </Pressable>
            </Box>
        </View>
    )
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