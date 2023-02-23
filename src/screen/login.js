import React, {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import InputLabel from '../components/input_lable';
import { PASSWORD } from '../constants/app_constants';
import {white} from '../constants/color_constants';
import {ds, ds1} from '../constants/dimention_constants';
import {fw1} from '../constants/font_constants';
import {height_device, width_device} from '../device/device_dimention';
import {layout} from '../style/layout';
import {text_style} from '../style/text_style';

export default function Login() {
  return (
    <View style={layout.wrapper}>
      <Image
        source={require('../../asstes/img/login.png')}
        style={StyleSheet.create({
          width: width_device,
          height: height_device / 3,
        })}
      />
      <Text style={[text_style.ts5, {textAlign: 'center'}]}>{'ĐĂNG NHẬP'}</Text>
      <InputLabel nameLabel="Email" />
      <InputLabel nameLabel="Mật khẩu" security={PASSWORD}/>
      <TouchableOpacity style={layout.button_pri}>
        <Text style={text_style.text_color_pri}>ĐĂNG NHẬP</Text>
      </TouchableOpacity>
      <View
        style={StyleSheet.create({
          marginVertical: (height_device - height_device * (2 / 3)) / 4,
        })}>
        <TouchableOpacity>
          <Text style={[text_style.ts1, {textAlign: 'center'}]}>
            {'Quên mật khẩu?'}
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={[{textAlign: 'center'}]}>{'Version 1.0.5'}</Text>
    </View>
  );
}
