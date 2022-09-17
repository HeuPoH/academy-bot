/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { COLOR } from '~res/colors';
import { icons } from '~res/images/icons';
import { flex1 } from '~library/base/baseStyles';
import { Carousel } from '~library/components/Carousel';
import { Button } from '~library/components/Button';

type University = {
  name: string;
  city: string;
};

export class RecordUniversities extends React.Component {
  private universities: University[] = [
    {
      name: 'МГУ',
      city: 'Москва'
    },
    {
      name: 'РГУ им. Косыгина',
      city: 'Москва'
    },
    {
      name: 'ДВФУ',
      city: 'Владивосток'
    }
  ];

  private getHeader() {
    return <Text style={styles.contTitle}>Топ Вузы России 2022</Text>;
  }

  private renderItem = (item: University) => {
    return (
      <View style={styles.item}>
        <Image style={styles.image} source={icons.foto2} resizeMode='stretch' />
        <View style={styles.itemInfo}>
          <View style={flex1}>
            <Text style={styles.textWhite}>{item.name}</Text>
          </View>
          <Text style={styles.textGrey}>{item.city}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          renderItem={this.renderItem}
          columnGap={16}
          items={this.universities}
          header={this.getHeader()}
        />
        <Button
          onPress={() => { }}
          color='transparent'
          title='Посмотреть все'
          styleTxt={styles.txtShowMore}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 46
  },
  contTitle: {
    fontWeight: '800',
    fontSize: 24,
    color: COLOR.BLACK
  },
  item: {
    flexDirection: 'column',
    overflow: 'hidden',
    borderRadius: 10,
    width: 130,
    flex: 1,
    backgroundColor: COLOR.BLACK
  },
  image: {
    width: 130,
    height: 230
  },
  itemInfo: {
    alignItems: 'center',
    padding: 4,
    flex: 1
  },
  textWhite: {
    color: COLOR.WHITE,
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center'
  },
  textGrey: {
    fontWeight: '400',
    fontSize: 13,
    color: COLOR.GREY7
  },
  txtShowMore: {
    fontWeight: '500',
    fontSize: 17,
    color: COLOR.BLACK,
    marginTop: 20
  }
});
