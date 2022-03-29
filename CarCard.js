import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function CarCard({eventItem}) {
    return (
        <View style={styles.card}>
          <View style={styles.cardHeader}>
             <Text style={styles.setFontSize}> {eventItem.title}
             </Text>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
    backgroundColor: '#d3d3d3',
    flex: 1,
    padding: 10,
    margin: 20,
    borderWidth: 3,
    border: '#d3d3d3',
    borderRadius: 20,
    borderStyle: 'solid',
    },

    cardHeader: {
        flex: 1,
        flexDirection: 'row',
    },
    setFontSize: {
        fontSize: 17,
        fontWeight: "bold"
    }
});