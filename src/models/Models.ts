import { DirectionsModel } from './Directions';
import { SpecialtiesModel } from './Specialties';
import { UniversitiesModel } from './Universities';

let specialtiesModel: SpecialtiesModel;
let directionsModel: DirectionsModel;
let universitiesModel: UniversitiesModel;

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

  static UniversitiesModel() {
    if (!universitiesModel) {
      universitiesModel = new UniversitiesModel();
    }

    return universitiesModel;
  }
}
