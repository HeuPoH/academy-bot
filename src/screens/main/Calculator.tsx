import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Tiles } from '~library/react-controls/Tiles';
import { COLOR } from '~res/colors';
import { icons } from '~res/images/icons';
import { Button } from '~library/react-controls/Button';

type Item = {
  id: number;
  icon: any;
  name: string;
  countSpecialties: number;
};

type State = {
  selected: number[];
};

export class Calculator extends React.Component<{}, State> {
  private items: Item[] = [
    {
      id: 0,
      icon: icons.math,
      name: 'Математика',
      countSpecialties: 10
    },
    {
      id: 1,
      icon: icons.text,
      name: 'Русский язык',
      countSpecialties: 1
    },
    {
      id: 2,
      icon: icons.notebook,
      name: 'Литература',
      countSpecialties: 23
    },
    {
      id: 3,
      icon: icons.light,
      name: 'Физика',
      countSpecialties: 18
    },
    {
      id: 4,
      icon: icons.computer,
      name: 'Информатика',
      countSpecialties: 2
    },
    {
      id: 5,
      icon: icons.bio,
      name: 'Биология',
      countSpecialties: 35
    },
    {
      id: 6,
      icon: icons.lab,
      name: 'Химия',
      countSpecialties: 42
    },
    {
      id: 7,
      icon: icons.camera,
      name: 'История',
      countSpecialties: 67
    },
    {
      id: 8,
      icon: icons.pin,
      name: 'География',
      countSpecialties: 10
    },
    {
      id: 9,
      icon: icons.chat,
      name: 'Обществознание',
      countSpecialties: 19
    },
    {
      id: 10,
      icon: icons.microphone,
      name: 'Английский язык',
      countSpecialties: 90
    }
  ];

  constructor(props: {}) {
    super(props);
    this.state = { selected: [] };
  }

  private onSelect(id: number) {
    const filtered = this.state.selected.filter((sel) => sel !== id);
    const isChanged = this.state.selected.length !== filtered.length;
    if (this.state.selected.length === 4 && !isChanged) {
      return;
    }

    if (!isChanged) {
      filtered.push(id);
    }

    this.setState({ selected: filtered });
  }

  private renderItem = (item: Item) => {
    const isActive = this.state.selected.includes(item.id);
    const colorTxt = isActive ? styles.blackTxt : styles.pinkyTxt;
    const iconSize = isActive ? styles.itemIconActive : styles.itemIcon;

    return (
      <Button
        color='transparent'
        onPress={() => this.onSelect(item.id)}
        title={item.name}
        styleTxt={colorTxt}
        styleBtn={styles.item}
      >
        <View>
          <View style={styles.whiteCircle} />
          <Image style={iconSize} source={item.icon} />
        </View>
      </Button>
    );
  };

  private getItemInfoById(id: number): Item | undefined {
    return this.items.find((item) => item.id === id);
  }

  private getSummSelectedSpecs() {
    let count = 0;
    this.state.selected.forEach(
      (sel) => (count += this.getItemInfoById(sel)?.countSpecialties || 0)
    );

    return count;
  }

  render() {
    return (
      <>
        <Text style={styles.contTitle}>Набор ЕГЭ калькулятор</Text>
        <View style={styles.header}>
          <View style={styles.link}>
            <Text style={styles.whiteTxt}>Специальностей</Text>
            <Image style={styles.arrowIcon} source={icons.arrowRight} />
          </View>
          <Text style={styles.resultCount}>{this.getSummSelectedSpecs()}</Text>
        </View>
        <Tiles
          items={this.items}
          renderItem={this.renderItem}
          styleContainer={styles.body}
          countCols={3}
        />
        <Text style={styles.textInfo}>
          Минимальный выбор для калькулятора 3 предмета, максимальный 4 предмета
        </Text>
      </>
    );
  }
}

const styles = StyleSheet.create({
  contTitle: {
    fontWeight: '800',
    fontSize: 24,
    color: COLOR.BLACK,
    marginBottom: 30
  },
  header: {
    height: 100,
    backgroundColor: COLOR.BLACK,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  body: {
    backgroundColor: COLOR.RED2,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },
  whiteTxt: {
    color: COLOR.WHITE
  },
  pinkyTxt: {
    color: COLOR.PINKY
  },
  blackTxt: {
    color: COLOR.BLACK
  },
  resultCount: {
    position: 'absolute',
    bottom: 22,
    fontWeight: '800',
    fontSize: 24,
    color: COLOR.WHITE,
    alignSelf: 'flex-end',
    paddingRight: 40
  },
  item: {
    alignItems: 'center',
    paddingVertical: 13,
    flex: 1
  },
  itemIcon: {
    width: 52,
    height: 52,
    position: 'absolute',
    transform: [{ translateY: 5 }]
  },
  itemIconActive: {
    position: 'absolute',
    width: 72,
    height: 72,
    transform: [{ translateX: -10 }, { translateY: -5 }]
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 24,
    marginTop: 16
  },
  arrowIcon: {
    marginLeft: 12,
    width: 19,
    height: 12
  },
  whiteCircle: {
    marginTop: 8,
    backgroundColor: COLOR.PINKY,
    height: 52,
    width: 52,
    borderRadius: 26
  },
  textInfo: {
    fontSize: 15,
    textAlign: 'center',
    color: COLOR.GREY,
    lineHeight: 20,
    marginVertical: 18
  }
});
