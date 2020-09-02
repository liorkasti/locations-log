import React from 'react';
import { StyleSheet, View, Text } from "react-native";


    const Coordinates = React.memo(({ latitude, longitude }) =>

        <View style={styles.coordinates}>
            <Coordinate label={'Latitude'} value={latitude} />
            <Coordinate label={'Longitude'} value={longitude} />
        </View>
    );

    const Coordinate = React.memo(({ label, value }) => (
        <View style={styles.coordinate}>
            <Text style={{ fontWeight: 'bold' }} numberOfLines={1}>
                {label}
            </Text>
            <Text numberOfLines={1}>{value}</Text>
        </View>
    ));



const styles = StyleSheet.create({
    coordinates: {
        position: 'absolute',
        width: '100%',
        width: 320,
        //   width: windowWidth * .85,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 60,
        // top: 0,
        flexDirection: 'row',
        zIndex: 99,

    },
    coordinate: {
        flex: 1,
        padding: 16,
        margin: 16,
        backgroundColor: 'white',
        opacity: 0.8,
        borderRadius: 10,
    },
});

export default Coordinate;
