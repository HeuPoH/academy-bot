import { Observable } from '~library/base/Observable';
import { UniversitiesReq, University } from '~library/services/UniversitiesReq';

export class UniversitiesModel extends Observable {
  private req = UniversitiesReq;
  private universities: University[] = [];

  async fetch(direction: string) {
    const univers = await this.req.getUniversities(direction);
    this.universities = univers;
  }

  getUniversities(): University[] {
    return this.universities;
  }

  getUniversity(id: number): University | undefined {
    return this.universities.find((univ) => univ.id === id);
  }
}
