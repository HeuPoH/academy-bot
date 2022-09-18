import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import { COLOR } from '~res/colors';
import { icons } from '~res/images/icons';
import { ErrorMessage } from './ErrorMessage';
import { row, column, flex1, alignItemCenter } from '~library/base/baseStyles';

type Props = {
  title?: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
  placeHolder?: string;
  disabled?: boolean;
  styleInput?: StyleProp<any>;
  blockStyle?: StyleProp<any>;
  onValidate?: (text: string) => boolean;
  errorMessage?: string;
  secureTextEntry?: boolean;
};

type State = {
  backgroundColor: string;
  borderColor: string;
  value: string;
  isError: boolean;
  secureTextEntry: boolean;
};

export class Input extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const styles = props.disabled
      ? stylesInput.disabledInput
      : stylesInput.emptyInput;

    this.state = {
      ...styles,
      value: props.defaultValue || '',
      isError: false,
      secureTextEntry: !!props.secureTextEntry
    };
  }

  private getInputStyles() {
    const { backgroundColor, borderColor } = this.state;

    return {
      ...stylesInput.baseInput,
      backgroundColor,
      borderColor,
      ...row
    };
  }

  private onChange = (text: string) => {
    let isError = !!this.props.onValidate?.(text);
    let errorStyles = isError
      ? stylesInput.inputWithError
      : stylesInput.inputFocused;

    this.props.onChange?.(text);
    this.setState({ value: text, isError, ...errorStyles });
  };

  private onFocusInput = () => {
    if (this.state.isError) {
      return;
    }

    this.setState({ ...stylesInput.inputFocused });
  };

  private onBlurInput = () => {
    if (this.state.isError) {
      return;
    }

    const styles =
      this.state.value === ''
        ? stylesInput.emptyInput
        : stylesInput.notEmptyInput;
    this.setState({ ...styles });
  };

  private onClickIcon = () => {
    this.setState((state) => ({ secureTextEntry: !state.secureTextEntry }));
  };

  render() {
    const { placeHolder, errorMessage, title, blockStyle, disabled } =
      this.props;
    const { value, isError, secureTextEntry } = this.state;

    return (
      <View style={{ ...column, ...blockStyle }}>
        <Text>{title}</Text>
        <View style={this.getInputStyles()}>
          <TextInput
            style={flex1}
            placeholder={placeHolder}
            onChangeText={this.onChange}
            value={value}
            onBlur={this.onBlurInput}
            onFocus={this.onFocusInput}
            editable={!disabled}
            placeholderTextColor={COLOR.GREY4}
            secureTextEntry={secureTextEntry}
          />
          {this.props.secureTextEntry && (
            <TouchableOpacity
              onPress={this.onClickIcon}
              style={stylesInput.image}
            >
              <Image source={icons.eye} />
            </TouchableOpacity>
          )}
        </View>
        <ErrorMessage isShow={isError} errorMessage={errorMessage} />
      </View>
    );
  }
}

const stylesInput = StyleSheet.create({
  baseInput: {
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 12,
    backgroundColor: COLOR.WHITE
  },
  emptyInput: {
    backgroundColor: COLOR.WHITE,
    borderColor: COLOR.GREY5
  },
  inputFocused: {
    backgroundColor: COLOR.WHITE2,
    borderColor: COLOR.BLUE
  },
  inputWithError: {
    borderColor: COLOR.RED,
    backgroundColor: COLOR.PINKY2
  },
  notEmptyInput: {
    backgroundColor: COLOR.WHITE2,
    borderColor: COLOR.GREY5
  },
  disabledInput: {
    backgroundColor: COLOR.GREY3,
    borderColor: COLOR.GREY2
  },
  image: {
    ...alignItemCenter,
    marginRight: 12
  }
});
