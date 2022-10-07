import { FlexAlignType, TextStyle } from 'react-native';

import { fonts } from '~res/assets/fonts/fonts';

export const column = {
  flexDirection: 'column'
};

export const row: { flexDirection: 'row' | 'column' } = {
  flexDirection: 'row'
};

export const flex1: TextStyle = {
  flex: 1
};

export const textVetCenter: TextStyle = {
  textAlignVertical: 'center'
};

export const alignItemCenter: {
  alignSelf: 'auto' | FlexAlignType | undefined;
} = {
  alignSelf: 'center'
};

export const textDecorationLine: TextStyle = {
  textDecorationLine: 'underline'
};

export const alignItemsCenter: TextStyle = {
  alignItems: 'center'
};

export const textAlignCenter: TextStyle = {
  textAlign: 'center'
};

export const upperCase: TextStyle = {
  textTransform: 'uppercase'
};

export const justifyCenter: TextStyle = {
  justifyContent: 'center'
};

export const ffSF_ProDisplay_Black: TextStyle = {
  fontFamily: fonts.SF_ProDisplay_Black
};

export const ff14SF_ProDisplay_Black: TextStyle = {
  fontSize: 14,
  ...ffSF_ProDisplay_Black
};

export const ff17SF_ProDisplay_Black: TextStyle = {
  fontSize: 17,
  ...ffSF_ProDisplay_Black
};

export const ff20SF_ProDisplay_Black: TextStyle = {
  fontSize: 20,
  ...ffSF_ProDisplay_Black
};

export const ff24SF_ProDisplay_Black: TextStyle = {
  fontSize: 24,
  ...ffSF_ProDisplay_Black
};
