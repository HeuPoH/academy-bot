import React, { ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { flex1, row } from '~library/base/baseStyles';

type Props<T> = {
  countCols: number;
  items: T[];
  renderItem: (item: T) => JSX.Element;
  styleContainer?: StyleProp<ViewStyle>;
};

export class Tiles<T extends Element> extends React.Component<Props<T>> {
  private row(cols: ReactNode[], i: number) {
    return (
      <View key={i} style={row}>
        {cols}
      </View>
    );
  }

  private col = (item: T, i: number) => {
    return (
      <View key={i} style={flex1}>
        {this.props.renderItem(item)}
      </View>
    );
  };

  private renderTiles() {
    const { countCols, items } = this.props;
    const tiles: ReactNode[] = [];

    for (let i = 0; i < items.length; i += countCols) {
      const cols = items.slice(i, i + countCols).map(this.col);
      tiles.push(this.row(cols, i));
    }

    return tiles;
  }

  render() {
    return <View style={this.props.styleContainer}>{this.renderTiles()}</View>;
  }
}
