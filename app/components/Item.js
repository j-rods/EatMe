import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';
import Realm from 'realm';
import Swipeout from 'react-native-swipeout';
import { Actions } from 'react-native-router-flux';

class Item extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    let swipeoutBtns = [{
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'grey',
      onPress: () => { this.props.deleteItem(this.props.item.id) }
    }];

    var expirationDate = this.props.item.expirationDate;
    if(this.daysToExpire(expirationDate) < 7) {
      var style = this.daysToExpire(expirationDate) < 3 ? styles.shortToExpire : styles.mediumToExpire;
    }

    return(
      // <Swipeout right={swipeoutBtns} style={styles.swipeStyle}>
        <View style={[styles.textContainer, style] }>
          <Text style={ styles.textStyleName }> { this.props.item.itemName } </Text>
          <Text style={ styles.textStyleDate }> Expires: { moment(expirationDate).fromNow() } </Text>
        </View>
      // </Swipeout>
    );
  }

  daysToExpire(expirationDate) {
    var today = moment();
    var expirationDate = moment(expirationDate);
    return expirationDate.diff(today, 'days')
  }

};

const styles = StyleSheet.create( {
  textContainer: {
    height: 100,
    backgroundColor: '#9EE2CC',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: 1
  },
  mediumToExpire: {
    backgroundColor: '#F5CC99',
  },
  shortToExpire: {
    backgroundColor: '#F1BABA',
  },
  textStyleName: {
    fontSize: 15,
    color: '#4A4A4A',
    borderColor: 'blue',
    borderWidth: 1
  },
  textStyleDate: {
    fontSize: 15,
    color: '#4A4A4A',
    borderColor: 'black',
    borderWidth: 1
  },
  swipeStyle: {
    backgroundColor: 'white',
  }
});

export default Item;
