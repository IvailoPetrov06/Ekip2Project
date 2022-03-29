import React, {Component} from 'react';
import {Text} from 'react-native';
import {FlatList} from 'react-native';
import CarCard from './CarCard';

class CarList extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        const events = require('./data.json').events;
        this.setState( {events} );
        }       
 
    render() {

        return (
            <FlatList
            data = {this.state.events}
            renderItem = { ({item}) => <CarCard eventItem = {item} />}
            ></FlatList>
        );
    };
};

export default CarList;