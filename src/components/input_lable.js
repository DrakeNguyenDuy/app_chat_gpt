import React, {Text, TextInput, View} from 'react-native';
import {PASSWORD} from '../constants/app_constants';
import {ds, ds1} from '../constants/dimention_constants';
import {fs_4} from '../constants/font_constants';
import {is} from '../style/input_style';
import {text_style} from '../style/text_style';
export default function InputLabel(props) {
  return (
    <View style={is.container}>
      <Text style={[text_style.ts1, {marginBottom: ds}]}>
        {props.nameLabel}
      </Text>
      <TextInput
        secureTextEntry={props.security == PASSWORD ? true : false}
        clearButtonMode="always"
        clearTextOnFocus={true}
        style={is.ip1}
      />
    </View>
  );
}
