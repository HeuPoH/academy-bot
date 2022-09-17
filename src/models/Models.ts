import { DirectionsModel } from './Directions';
import { SpecialtiesModel } from './Specialties';

let specialtiesModel: SpecialtiesModel;
let directionsModel: DirectionsModel;

export interface IBaseModel {
  fetch(data?: any): Promise<void>;
}

export class Models {
  static SpecialtiesModel() {
    if (!specialtiesModel) {
      specialtiesModel = new SpecialtiesModel();
    }

    return specialtiesModel;
  }

  static DirectionsModel() {
    if (!directionsModel) {
      directionsModel = new DirectionsModel();
    }

    return directionsModel;
  }
}
