import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {ButtonTypes} from '../../Model/types';
/**
 *
 * @param {props} onPress - onclick operation
 * @param {props} title - button title
 * @param {props} titleStyle - button title styles
 * @param {props} btnStyle - button parent view styles
 * @param {props} rightIcon - right icon
 * @param {props} leftIcon - left icon
 * @param {props} rightIconStyle - right icon style
 * @param {props} leftIconStyle - left icon style
 * @returns
 */

const CreateButton = (props: ButtonTypes) => {
  const {
    onPress,
    title,
    titleStyle,
    btnStyle,
    rightIcon,
    leftIcon,
    rightIconStyle,
    leftIconStyle,
  } = props;

  return (
    <View>
      <TouchableOpacity style={styles.Button} onPress={onPress}>
        <Text style={styles.ButtonText}>Create New Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button2}>
        <Text style={styles.ButtonText2}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateButton;
