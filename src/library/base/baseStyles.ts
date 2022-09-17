import { FlexAlignType, TextStyle } from 'react-native';

export const column = {
  flexDirection: 'column'
};

export const row: { flexDirection: 'row' | 'column' } = {
  flexDirection: 'row'
};

export const flex1 = {
  flex: 1
};

export const alignItemCenter: {
  alignSelf: 'auto' | FlexAlignType | undefined;
} = {
  alignSelf: 'center'
};

export const textDecorationLine: TextStyle = {
  textDecorationLine: 'underline'
};

export const alignItemsCenter = {
  alignItems: 'center'
};

export const textAlignCenter = {
  textAlign: 'center'
};
