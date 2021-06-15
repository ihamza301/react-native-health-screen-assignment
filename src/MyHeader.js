import React from "react";
import {Appbar} from 'react-native-paper';

import {
    StyleSheet,
    Alert
  } from 'react-native';

export default class MyHeader extends React.Component
{
    render()
    {
        return (
            <Appbar.Header style = {{backgroundColor : this.props.themeColor}}>
                <Appbar.Action
                    icon="menu"
                    onPress={() => Alert.alert("Menu Pressed")}
                    style = {styles.headerIconLeft}/>
                <Appbar.Action
                    icon="dots-vertical"
                    onPress ={() => Alert.alert("Dots Pressed")}
                    style = {styles.headerIconRight}/>
            </Appbar.Header>
        );
    }
}

const styles = StyleSheet.create({
    headerIconLeft:
    {
      flex : 1,
      flexDirection : 'row',
      justifyContent : 'flex-start'
    },
    headerIconRight:
    {
      flex : 1,
      flexDirection : 'row',
      justifyContent : 'flex-end'
    }
  });