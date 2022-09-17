import React from 'react';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';

import { btnStyles, Button, ButtonProps } from './Button';

type ButtonIconProps = {
  src: ImageSourcePropType;
} & ButtonProps;

export function IconButton(props: ButtonIconProps) {
  const { src, styleBtn, ...args } = props;

  return (
    <Button styleBtn={{ ...btnStyles.withIcon, ...styleBtn }} {...args}>
      <Image style={styles.image} source={src} />
    </Button>
  );
}

const styles = StyleSheet.create({
  image: {
    marginRight: 10
  }
});
