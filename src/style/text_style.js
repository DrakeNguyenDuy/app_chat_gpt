import {StyleSheet} from 'react-native';
import {primary_color, white} from '../constants/color_constants';
import {
  fw3,
  fs_5,
  fs_2,
  fw1,
  fs_3,
  fs_4,
  fw2,
} from '../constants/font_constants';

export const text_style = StyleSheet.create({
  ts5: {
    color: primary_color,
    fontSize: fs_5,
    fontWeight: fw3,
  },
  ts1: {
    color: primary_color,
    fontSize: fs_2,
    fontWeight: fw1,
  },
  text_center: {
    textAlign: 'center',
  },
  text_color_pri: {
    color: white,
    fontSize: fs_3,
    fontWeight: fw2,
  },
});
