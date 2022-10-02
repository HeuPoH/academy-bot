import { Observable } from '~library/base/Observable';
import { Direction, SpecialtiesReq } from '~library/services/SpecialtiesReq';
import { IBaseModel } from './Models';

interface IDirectionsModel extends IBaseModel {
  getDirections(): Direction[];
  getDirection(id: number): Direction | undefined;
}

export class DirectionsModel extends Observable implements IDirectionsModel {
  private req = SpecialtiesReq;
  private directions: Direction[] = [];

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

  getConditions(id: number) {
    return this.getDirection(id)?.conds || [];
  }
}
