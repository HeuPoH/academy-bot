import { Observable } from '~library/base/Observable';
import { Direction, SpecialtiesReq } from '~library/services/specialtiesReq';
import { IBaseModel } from './Models';

interface IDirectionsModel extends IBaseModel {
  getDirections(): Direction[];
  getDirection(id: number): Direction | undefined;
  getColor(id: number): string;
}

export class DirectionsModel extends Observable implements IDirectionsModel {
  private req = SpecialtiesReq;
  private directions: Direction[] = [];
  private colors = [
    '#F6E58D',
    '#F9CA24',
    '#FFBE76',
    '#F0932B',
    '#FF7979',
    '#EB4D4B',
    '#BADC58',
    '#6AB04C',
    '#C7ECEE',
    '#7ED6DF',
    '#22A6B3',
    '#E056FD',
    '#BE2EDD',
    '#686DE0',
    '#4834D4',
    '#30336B',
    '#535C68',
    '#000000'
  ];

  async fetch({ specId }: { specId: number }) {
    const directions = await this.req.getDirections(specId);
    this.directions = directions;
    this.notifyObservers();
  }

  getDirections() {
    return this.directions;
  }

  getDirection(id: number) {
    return this.directions.find((d) => d.id === id);
  }

  getColor(id: number) {
    if (id >= this.colors.length) {
      id = id - this.colors.length;
    }

    return this.colors[id];
  }

  getConditions(id: number) {
    return this.getDirection(id)?.conds || [];
  }
}
