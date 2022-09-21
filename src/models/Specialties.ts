import { Observable } from '~library/base/Observable';
import { Speciality, SpecialtiesReq } from '~library/services/SpecialtiesReq';
import { IBaseModel } from './Models';

interface ISpecialtiesModel extends IBaseModel {
  getSpecialties(): Speciality[];
}

export class SpecialtiesModel extends Observable implements ISpecialtiesModel {
  private specialties: Speciality[] = [];
  private req = SpecialtiesReq;

  async fetch() {
    const specs = await this.req.getSpecialties();
    this.specialties = specs;
    this.notifyObservers();
  }

  getSpecialties() {
    return this.specialties;
  }
}
