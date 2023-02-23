import {StyleSheet} from 'react-native';
import {primary_color, white} from '../constants/color_constants';
import {ds, ds1} from '../constants/dimention_constants';
import {height_device} from '../device/device_dimention';

export const layout = StyleSheet.create({
  wrapper: {
    padding: ds1 * 2,
  },
  button_pri: {
    marginTop: ds1 * 2,
    color: white,
    backgroundColor: primary_color,
    borderColor: primary_color,
    height: height_device / 18,
    borderRadius: ds,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
