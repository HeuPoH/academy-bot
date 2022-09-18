import React from 'react';
import {
  FlatList,
  Image,
  LayoutChangeEvent,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import { COLOR } from '~res/colors';
import { icons } from '~res/images/icons';
import { flex1 } from '~library/base/baseStyles';

type Props = {
  value: string | number;
  options: (string | number)[];
  onSelect?: (item: string | number) => void;
};

type State = {
  isShowPanel: boolean;
  value: string | number;
};

export class Select extends React.Component<Props, State> {
  private topOffsetForFlatList = 0;

  constructor(props: Props) {
    super(props);
    this.state = { isShowPanel: false, value: props.value };
  }

  private renderItem({ item }: ListRenderItemInfo<string | number>) {
    return (
      <Text style={styles.option} onPress={() => this.onSelect(item)}>
        {item}
      </Text>
    );
  }

  private onSelect(value: string | number) {
    this.setState((prevState) => ({
      value,
      isShowPanel: !prevState.isShowPanel
    }));
    this.props.onSelect?.(value);
  }

  private onLayout = (event: LayoutChangeEvent) => {
    this.topOffsetForFlatList = event.nativeEvent.layout.height;
  };

  private onToggleDisplayPanel = () => {
    this.setState((prevState) => ({ isShowPanel: !prevState.isShowPanel }));
  };

  render() {
    const { options } = this.props;
    const iconArrow = this.state.isShowPanel ? icons.arrowUp : icons.arrowDown;

    return (
      <View>
        <TouchableWithoutFeedback
          onLayout={this.onLayout}
          onPress={this.onToggleDisplayPanel}
        >
          <View
            style={{
              ...styles.selected,
              ...(this.state.isShowPanel ? styles.selectedWithShowOptions : {})
            }}
          >
            <Text style={flex1}>{this.state.value}</Text>
            <Image source={iconArrow} />
          </View>
        </TouchableWithoutFeedback>
        {this.state.isShowPanel && (
          <FlatList
            style={{ ...styles.flatList, top: this.topOffsetForFlatList }}
            data={options}
            renderItem={(item) => this.renderItem(item)}
            keyExtractor={(item, i) => `${item!.toString()}-${i}`}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  selected: {
    backgroundColor: COLOR.WHITE,
    borderColor: COLOR.GREY5,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 13,
    flexDirection: 'row',
    alignItems: 'center'
  },
  selectedWithShowOptions: {
    borderBottomColor: COLOR.GREY3,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  option: {
    paddingHorizontal: 12,
    paddingVertical: 13
  },
  flatList: {
    position: 'absolute',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: COLOR.WHITE,
    borderWidth: 1,
    borderColor: COLOR.GREY5,
    borderTopWidth: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  }
});
