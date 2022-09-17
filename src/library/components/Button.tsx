import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import { textAlignCenter } from '~library/base/baseStyles';
import { COLOR } from '~res/colors';

export type ButtonProps = {
  title?: string | JSX.Element;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  color?: Color;
  styleBtn?: StyleProp<any>;
  styleTxt?: StyleProp<any>;
  children?: any;
};

type Color = 'pinky' | 'grey' | 'black' | 'orange' | 'transparent';

export function Button(props: ButtonProps) {
  const {
    title,
    onPress,
    disabled,
    color = 'black',
    styleBtn,
    children,
    styleTxt
  } = props;
  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        button: { ...btnStyles[`${color}Btn`], ...styleBtn },
        text: { ...btnStyles[`${color}Text`], ...styleTxt }
      }),
    [styleBtn, styleTxt, color]
  );

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={disabled}
    >
      {children}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const baseButton = {
  borderRadius: 10,
  padding: 11
};

export const btnStyles = {
  withIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  pinkyBtn: { backgroundColor: COLOR.PINKY, ...baseButton },
  pinkyText: { color: COLOR.BLACK, ...textAlignCenter },

  greyBtn: { backgroundColor: COLOR.GREY, ...baseButton },
  greyText: { color: COLOR.BLACK, ...textAlignCenter },

  blackBtn: { backgroundColor: COLOR.BLACK, ...baseButton },
  blackText: { color: COLOR.WHITE, ...textAlignCenter },

  orangeBtn: { backgroundColor: COLOR.ORANGE, ...baseButton },
  orangeText: { color: COLOR.WHITE, ...textAlignCenter },

  transparentBtn: { backgroundColor: 'transparent' },
  transparentText: {}
};
