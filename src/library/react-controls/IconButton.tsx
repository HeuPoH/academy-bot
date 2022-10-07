import React from 'react';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { btnStyles, Button, ButtonProps } from './Button';

type ButtonIconProps = {
  src: ImageSourcePropType | string;
  type?: 'img' | 'svg';
} & ButtonProps;

export function IconButton(props: ButtonIconProps) {
  const { src, styleBtn, type = 'img', ...args } = props;

  return (
    <Button styleBtn={{ ...btnStyles.withIcon, ...styleBtn }} {...args}>
      {type === 'img' ? (
        <Image style={styles.image} source={src as ImageSourcePropType} />
      ) : (
        <SvgXml style={styles.image} xml={src as string} />
      )}
      {props.children}
    </Button>
  );
}

const styles = StyleSheet.create({
  image: {
    marginRight: 10
  }
});
