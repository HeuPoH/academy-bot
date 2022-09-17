import { Observable } from '~library/base/Observable';
import { Speciality, SpecialtiesReq } from '~library/services/specialtiesReq';
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

// export type University = {
//   id: number;
//   name: string;
//   description: string;
//   city: string;
//   budgetPlaces: number;
//   costPerYear: number;
//   address: string;
//   telephone: number;
//   email: string;
//   site: string;
//   type: 0 | 1; //частный или гос;
//   speciality: number;
// };

// export type Specialties = {
//   name: string;
//   count: number;
// };

// export const universities = `CREATE TABLE IF NOT EXISTS universities(
//   id integer primary key AUTOINCREMENT,
//   name char(64) not null,
//   description text not null,
//   city char(64) not null,
//   budgetPlaces int not null,
//   costPerYear int not null,
//   address char(128) not null,
//   telephone char(20) not null,
//   email char(30) not null,
//   site char(40) not null,
//   type int not null,
//   speciality int not null
// );`;

// const univers = [
//   {
//     id: 0,
//     name: 'Национальный исследовательский университет ИТМО',
//     description: 'Университет ИТМО один из ведущих вузов России в области информационных и фотонных технологий, получивший в 2009 году статус национального исследовательского университета. С 2013 года Университет ИТМО участник программы “Проект 5-100”. Это дает университету возможность обеспечить самые комфортные условия для работы российских и зарубежных студентов и преподавателей, создать уникальную среду для развития науки и образования.',
//     city: 'Санкт-Петербург',
//     budgetPlaces: '1000',
//     costPerYear: '120000',
//     address: 'Санкт-Петербург',
//     telephone: '123123123123',
//     email: 'test@tset.ru',
//     site: 'site.ru',
//     type: 0,
//     speciality: 1
//   },
//   {
//     id: 1,
//     name: 'МИРЭА — Российский технологический университет',
//     description: 'Один из ведущих технических университетов России, готовит специалистов для быстро развивающихся наукоемких отраслей науки и техники. Основные направления обучения: электроника, радиотехнические и телекоммуникационные системы, приборостроение и кибернетика, химические технологии. Образовательные программы МИРЭА сертифицированы по российским и международным стандартам. В вузе есть собственная лаборатория Big Data и искусственного интеллекта.',
//     city: 'Москва',
//     budgetPlaces: '1000',
//     costPerYear: '120000',
//     address: 'Москва',
//     telephone: '123123123123',
//     email: 'test@tset.ru',
//     site: 'site.ru',
//     type: 0,
//     speciality: 2
//   },
//   {
//     id: 2,
//     name: 'Дальневосточный государственный институт искусств',
//     description: 'Дальневосточный государственный институт искусств — первое и единственное в России высшее образовательное учреждение, в стенах которого ведется подготовка специалистов сразу по трем видам искусств — музыка, театр, живопись.',
//     city: 'Владивосток',
//     budgetPlaces: '1000',
//     costPerYear: '120000',
//     address: 'Владивосток',
//     telephone: '123123123123',
//     email: 'test@tset.ru',
//     site: 'site.ru',
//     type: 0,
//     speciality: 3
//   },
//   {
//     id: 3,
//     name: 'Оренбургский государственный университет',
//     description: 'Оренбургский государственный университет — классический многопрофильный вуз. Университет предлагает не только программы среднего и высшего профессионального образования (специалитет, бакалавриат, магистратуру), но и аспирантуру, докторантуру, повышение квалификации и профессиональную переподготовку.',
//     city: 'Оренбург',
//     budgetPlaces: '1000',
//     costPerYear: '120000',
//     address: 'Оренбург',
//     telephone: '123123123123',
//     email: 'test@tset.ru',
//     site: 'site.ru',
//     type: 0,
//     speciality: 2
//   },
//   {
//     id: 4,
//     name: 'Сочинский филиал Всероссийского государственного университета юстиции (РПА Минюста России)',
//     description: 'Сочинский филиал Всероссийского государственного университета юстиции — это один из крупнейших юридических образовательных центров России. Университет осуществляет: проведение фундаментальных и прикладных научных исследований; информационно-аналитическое экспертное обеспечение деятельности органов государственной власти и юридических лиц.',
//     city: 'Сочи',
//     budgetPlaces: '1000',
//     costPerYear: '120000',
//     address: 'Сочи',
//     telephone: '123123123123',
//     email: 'test@tset.ru',
//     site: 'site.ru',
//     type: 0,
//     speciality: 5
//   },
//   {
//     id: 5,
//     name: 'Краснодарский кооперативный институт (филиал) Российского университета кооперации',
//     description: 'Краснодарский кооперативный институт готовит кадры для системы потребительской кооперации с 1960 года. В соответствии с рейтингом Министерства образования и науки РФ Российский университет кооперации входит в десятку ведущих экономических вузов России. Более 50 тысяч студентов в настоящее время обучаются в университете.',
//     city: 'Краснодар',
//     budgetPlaces: '1000',
//     costPerYear: '120000',
//     address: 'Краснодар',
//     telephone: '123123123123',
//     email: 'test@tset.ru',
//     site: 'site.ru',
//     type: 0,
//     speciality: 6
//   },
//   {
//     id: 6,
//     name: 'Московский государственный технический университет им. Н.Э. Баумана (национальный исследовательский университет)',
//     description: 'Университет Баумана готовит инженеров для самых передовых и высокотехнологичных отраслей науки и техники России, всего здесь открыто более 100 программ. Вуз занимает лидирующее место в Ассоциации технических университетов России. Студенты привлекаются к реальной исследовательской работе, многие из них выбирают научно-исследовательское будущее и продолжают обучение в аспирантуре. Бауманский университет учредитель фонда Сколково.',
//     city: 'Москва',
//     budgetPlaces: '1000',
//     costPerYear: '120000',
//     address: 'Москва',
//     telephone: '123123123123',
//     email: 'test@tset.ru',
//     site: 'site.ru',
//     type: 0,
//     speciality: 3
//   },
//   {
//     id: 7,
//     name: 'Московский государственный университет спорта и туризма',
//     description: 'МГИФКСиТ — это практико-ориентированный вуз. Студенты уже на этапе обучения глубоко интегрированы в деятельность предприятий сферы туризма и гостеприимства столицы: реализуют научно-исследовательские проекты, проходят практику, участвуют в проведении масштабных мероприятий Правительства Москвы и Ростуризма. Ежегодно многие студенты МГИФКСиТ проходят программу двойного диплома в ведущих профильных европейских вузах.',
//     city: 'Москва',
//     budgetPlaces: '1000',
//     costPerYear: '120000',
//     address: 'Москва',
//     telephone: '123123123123',
//     email: 'test@tset.ru',
//     site: 'site.ru',
//     type: 0,
//     speciality: 4
//   },
//   {
//     id: 8,
//     name: 'Государственный университет «Дубна»',
//     description: 'Университет имеет сеть филиалов, образованных в подмосковных городах Дмитров, Дзержинский, Котельники и Протвино и успешно выполняет роль системного интегратора образовательных процессов на уровне региона. На базе университета создан региональный сетевой научно-образовательный центр кадровой поддержки инновационной деятельности, который обеспечивает совместное участие организаций науки, высшего образования и инновационных структур в подготовке специалистов.',
//     city: 'Дубна',
//     budgetPlaces: '1000',
//     costPerYear: '120000',
//     address: 'Дубна',
//     telephone: '123123123123',
//     email: 'test@tset.ru',
//     site: 'site.ru',
//     type: 0,
//     speciality: 7
//   },
//   {
//     id: 9,
//     name: 'Российская международная академия туризма',
//     description: 'Российская международная академия туризма (РМАТ) ведущий российский образовательный и научный центр в сфере профессионального туристского образования международного уровня.',
//     city: 'Химки',
//     budgetPlaces: '1000',
//     costPerYear: '120000',
//     address: 'Химки',
//     telephone: '123123123123',
//     email: 'test@tset.ru',
//     site: 'site.ru',
//     type: 0,
//     speciality: 8
//   },
//   {
//     id: 10,
//     name: 'Набережночелнинский государственный педагогический университет',
//     description: 'Сегодня Набережночелнинский государственный педагогический университет — один из крупнейших образовательных и научно-методических центров Волго-Камского региона с высоким научно-педагогическим потенциалом. Вуз имеет необходимую для качественного обучения учебно-материальную базу: два учебных корпуса, общежитие, учебные аудитории и лаборатории, оснащённые по последнему слову техники, компьютерные кабинеты, спортивный комплекс, столовую и др.',
//     city: 'Набережные Челны',
//     budgetPlaces: '1000',
//     costPerYear: '120000',
//     address: 'Набережные Челны',
//     telephone: '123123123123',
//     email: 'test@tset.ru',
//     site: 'site.ru',
//     type: 0,
//     speciality: 10
//   }
// ];

// export class UniversitiesModel extends Observable {
//   private dbTable = new DatabaseService<University>(
//     'universities',
//     universities
//   );

//   fetch() { }

//   getUniversities(): Promise<University[]> {
//     return this.dbTable.getData();
//   }

//   getUniversity(key: string, value: string): Promise<University> {
//     return this.dbTable.getDataByKey(key, value);
//   }

//   setUniversities(items: University[]) {
//     return this.dbTable.setData(items);
//   }

//   getSpecialities(): Promise<Specialties[]> {
//     const tbName = this.dbTable.getTableName();
//     const sql = `select name, count(*) from ${tbName} group by speciality`;
//     return this.dbTable.execute(sql);
//   }
// }
