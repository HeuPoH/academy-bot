import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import {
  ffSF_ProDisplay_Black,
  textAlignCenter
} from '~library/base/baseStyles';
import { COLOR } from '~res/colors';

type Color = 'pinky' | 'grey' | 'black' | 'orange' | 'transparent';

export type ButtonProps = {
  title?: string | JSX.Element;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  color?: Color;
  styleBtn?: StyleProp<any>;
  styleTxt?: StyleProp<any>;
  children?: any;
};

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
        text: {
          ...btnStyles[`${color}Text`],
          ...styleTxt,
          ...ffSF_ProDisplay_Black
        }
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
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
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
