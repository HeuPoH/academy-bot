import React from 'react';
import { FlatList, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { alignItemsCenter } from '~library/base/baseStyles';

type Props<T> = {
  renderItem: (item: T, index: number) => JSX.Element;
  items: T[];
  stylesContainer?: StyleProp<ViewStyle>;
  wrapperStyles?: StyleProp<ViewStyle>;
  header?: JSX.Element;
  numColumnsHor?: number;
  rowGap?: number;
  columnGap?: number;
};

type Item<T> = { item: T | T[]; index: number };

export class Carousel<T> extends React.Component<Props<T>> {
  private renderItem = ({ item, index }: Item<T>) => {
    const { rowGap, columnGap, renderItem } = this.props;
    const mrgRight = index !== this.prepareData().length - 1 ? columnGap : 0;
    const styleCol = { marginRight: mrgRight };
    const styleRow = { ...alignItemsCenter, marginBottom: rowGap } as any;

    if (Array.isArray(item)) {
      return (
        <View key={index} style={styleCol}>
          {item.map((el, i) => (
            <View key={`${index}-${i}`} style={styleRow}>
              {renderItem(el, i)}
            </View>
          ))}
        </View>
      );
    }

    return (
      <View key={index} style={styleCol}>
        {renderItem(item, index)}
      </View>
    );
  };

  private prepareData(): T[] | T[][] {
    const { items, numColumnsHor = 1 } = this.props;
    if (numColumnsHor === 1) {
      return items;
    }

    const newItems = [];
    for (let i = 0; i < items.length; i = i + numColumnsHor) {
      newItems.push(items.slice(i, i + numColumnsHor));
    }

    return newItems;
  }

  render() {
    const { header, wrapperStyles = {}, stylesContainer } = this.props;

    return (
      <View style={wrapperStyles}>
        <View style={header ? styles.header : {}}>{header}</View>
        <FlatList
          contentContainerStyle={stylesContainer}
          renderItem={this.renderItem}
          data={this.prepareData() as any}
          horizontal
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 24
  }
});
