import React, { Component } from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { SubmitButton, ViewContainer, UpperContainer, LowerContainer } from '../components/common';
import ListView from '../components/ListView';
import PushController from '../components/PushController';

class MyItemsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ViewContainer>
        <UpperContainer>
          <ListView deleteItem={ this.deleteItem }/>
        </UpperContainer>
        <LowerContainer style={styles.addItemStyle}>
          <SubmitButton onPress={ () => Actions.add() }>
            ADD ITEM
          </SubmitButton>
        </LowerContainer>
        <PushController />
      </ViewContainer>
    );
  }
}

const styles = {
  recipeButtonStyle: {
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 20
  },
  addItemStyle: {
    marginLeft: 20,
    marginRight: 20
  }
}

export default MyItemsScreen;
