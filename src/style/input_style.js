import {StyleSheet} from 'react-native';
import {primary_color, white} from '../constants/color_constants';
import {ds, ds1} from '../constants/dimention_constants';

export const is = StyleSheet.create({
  container: {
    paddingVertical: ds1,
  },
  ip1: {
    // borderColor: primary_color,
    borderWidth: 0.5,
    borderCurve: 'circular',
    borderRadius: ds,
    tintColor: white,
  },
});
