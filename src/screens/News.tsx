/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Button } from '~library/react-controls/Button';
import { Carousel } from '~library/react-controls/Carousel';
import { COLOR } from '~res/colors';
import { icons } from '~res/images/icons';

type NewsItem = {
  name: string;
  description: string;
};

export class News extends React.Component {
  private news: NewsItem[] = [
    {
      name: 'Вузы',
      description: 'Театральная школа Райкина приостановит работу'
    },
    {
      name: 'Наука',
      description: 'Разработана новая вакцина от COVID-19'
    },
    {
      name: 'Наука',
      description: 'Курс доллара растет'
    }
  ];

  private renderItem(item: NewsItem) {
    return (
      <View style={styles.item}>
        <View style={styles.itemBody}>
          <View style={styles.itemInfo}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </View>
          <Button
            styleBtn={styles.btnMore}
            title='Подробнее'
            onPress={() => { }}
          />
        </View>
        <Image resizeMode='contain' style={styles.img} source={icons.foto1} />
      </View>
    );
  }

  private getHeader() {
    return <Text style={styles.contTitle}>Новости</Text>;
  }

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          header={this.getHeader()}
          items={this.news}
          renderItem={this.renderItem}
          columnGap={16}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contTitle: {
    fontWeight: '800',
    fontSize: 24,
    color: COLOR.BLACK
  },
  container: {
    marginBottom: 46
  },
  item: {
    backgroundColor: COLOR.PINKY,
    borderRadius: 10,
    padding: 12,
    width: 300,
    flexDirection: 'row'
  },
  itemBody: {
    flex: 1,
    marginRight: 14
  },
  itemInfo: {
    flexDirection: 'column',
    marginRight: 14,
    flex: 1
  },
  title: {
    fontWeight: '300',
    fontSize: 14,
    color: COLOR.BLACK,
    marginBottom: 6
  },
  desc: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 20,
    color: COLOR.BLACK
  },
  btnMore: {
    borderRadius: 43,
    fontWeight: '500',
    fontSize: 15
  },
  img: {
    height: 150,
    width: 80,
    borderRadius: 8
  }
});
