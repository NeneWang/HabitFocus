import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Badge, HStack, Box, Pressable } from 'native-base';



const FocusScreen = () => {
    const percentage = 66;
    const buttons = ['Algorithms', 'Study', 'Engineering']; // Replace with your array

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