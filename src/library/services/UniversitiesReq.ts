export class UniversitiesReq {
  static getUniversities(direction: string) {
    return Promise.resolve(univers[direction] || []);
  }
}

export type University = {
  id: number;
  name: string;
  description: string;
  city: string;
  budgetPlaces: number;
  costPerYear: number;
  address: string;
  telephone: string;
  email: string;
  site: string;
  type: 0 | 1; //частный или гос;
  direction: string;
  hasMilitary: boolean;
  hasHostel: boolean;
  points: number;
};

const univers: { [key: string]: University[] } = {
  'Управление и экономика (1)': [
    {
      id: 0,
      name: 'Национальный исследовательский университет ИТМО',
      description:
        'Университет ИТМО один из ведущих вузов России в области информационных и фотонных технологий, получивший в 2009 году статус национального исследовательского университета. С 2013 года Университет ИТМО участник программы “Проект 5-100”. Это дает университету возможность обеспечить самые комфортные условия для работы российских и зарубежных студентов и преподавателей, создать уникальную среду для развития науки и образования.',
      city: 'Санкт-Петербург',
      budgetPlaces: 1000,
      costPerYear: 120000,
      address: 'Санкт-Петербург',
      telephone: '123123123123',
      email: 'test@tset.ru',
      site: 'site.ru',
      type: 0,
      direction: 'Управление и экономика (1)',
      hasMilitary: true,
      hasHostel: true,
      points: 500
    },
    {
      id: 1,
      name: 'МИРЭА — Российский технологический университет',
      description:
        'Один из ведущих технических университетов России, готовит специалистов для быстро развивающихся наукоемких отраслей науки и техники. Основные направления обучения: электроника, радиотехнические и телекоммуникационные системы, приборостроение и кибернетика, химические технологии. Образовательные программы МИРЭА сертифицированы по российским и международным стандартам. В вузе есть собственная лаборатория Big Data и искусственного интеллекта.',
      city: 'Москва',
      budgetPlaces: 1000,
      costPerYear: 20000,
      address: 'Москва',
      telephone: '123123123123',
      email: 'test@tset.ru',
      site: 'site.ru',
      type: 0,
      direction: 'Управление и экономика (1)',
      hasMilitary: true,
      hasHostel: false,
      points: 76
    },
    {
      id: 2,
      name: 'Дальневосточный государственный институт искусств',
      description:
        'Дальневосточный государственный институт искусств — первое и единственное в России высшее образовательное учреждение, в стенах которого ведется подготовка специалистов сразу по трем видам искусств — музыка, театр, живопись.',
      city: 'Владивосток',
      budgetPlaces: 1000,
      costPerYear: 120000,
      address: 'Владивосток',
      telephone: '123123123123',
      email: 'test@tset.ru',
      site: 'site.ru',
      type: 0,
      direction: 'Управление и экономика (1)',
      hasMilitary: false,
      hasHostel: false,
      points: 89
    },
    {
      id: 3,
      name: 'Оренбургский государственный университет',
      description:
        'Оренбургский государственный университет — классический многопрофильный вуз. Университет предлагает не только программы среднего и высшего профессионального образования (специалитет, бакалавриат, магистратуру), но и аспирантуру, докторантуру, повышение квалификации и профессиональную переподготовку.',
      city: 'Оренбург',
      budgetPlaces: 1000,
      costPerYear: 120000,
      address: 'Оренбург',
      telephone: '123123123123',
      email: 'test@tset.ru',
      site: 'site.ru',
      type: 0,
      direction: 'Управление и экономика (1)',
      hasMilitary: false,
      hasHostel: false,
      points: 100
    },
    {
      id: 4,
      name: 'Сочинский филиал Всероссийского государственного университета юстиции (РПА Минюста России)',
      description:
        'Сочинский филиал Всероссийского государственного университета юстиции — это один из крупнейших юридических образовательных центров России. Университет осуществляет: проведение фундаментальных и прикладных научных исследований; информационно-аналитическое экспертное обеспечение деятельности органов государственной власти и юридических лиц.',
      city: 'Сочи',
      budgetPlaces: 1000,
      costPerYear: 120000,
      address: 'Сочи',
      telephone: '123123123123',
      email: 'test@tset.ru',
      site: 'site.ru',
      type: 0,
      direction: 'Управление и экономика (1)',
      hasMilitary: false,
      hasHostel: false,
      points: 12
    },
    {
      id: 5,
      name: 'Краснодарский кооперативный институт (филиал) Российского университета кооперации',
      description:
        'Краснодарский кооперативный институт готовит кадры для системы потребительской кооперации с 1960 года. В соответствии с рейтингом Министерства образования и науки РФ Российский университет кооперации входит в десятку ведущих экономических вузов России. Более 50 тысяч студентов в настоящее время обучаются в университете.',
      city: 'Краснодар',
      budgetPlaces: 1000,
      costPerYear: 120000,
      address: 'Краснодар',
      telephone: '123123123123',
      email: 'test@tset.ru',
      site: 'site.ru',
      type: 0,
      direction: 'Управление и экономика (1)',
      hasMilitary: false,
      hasHostel: false,
      points: 212
    },
    {
      id: 6,
      name: 'Московский государственный технический университет им. Н.Э. Баумана (национальный исследовательский университет)',
      description:
        'Университет Баумана готовит инженеров для самых передовых и высокотехнологичных отраслей науки и техники России, всего здесь открыто более 100 программ. Вуз занимает лидирующее место в Ассоциации технических университетов России. Студенты привлекаются к реальной исследовательской работе, многие из них выбирают научно-исследовательское будущее и продолжают обучение в аспирантуре. Бауманский университет учредитель фонда Сколково.',
      city: 'Москва',
      budgetPlaces: 1000,
      costPerYear: 120000,
      address: 'Москва',
      telephone: '123123123123',
      email: 'test@tset.ru',
      site: 'site.ru',
      type: 0,
      direction: 'Управление и экономика (1)',
      hasMilitary: false,
      hasHostel: false,
      points: 50
    }
  ],
  'Управление и экономика (2)': [
    {
      id: 0,
      name: 'Национальный исследовательский университет ИТМО',
      description:
        'Университет ИТМО один из ведущих вузов России в области информационных и фотонных технологий, получивший в 2009 году статус национального исследовательского университета. С 2013 года Университет ИТМО участник программы “Проект 5-100”. Это дает университету возможность обеспечить самые комфортные условия для работы российских и зарубежных студентов и преподавателей, создать уникальную среду для развития науки и образования.',
      city: 'Санкт-Петербург',
      budgetPlaces: 1000,
      costPerYear: 120000,
      address: 'Санкт-Петербург',
      telephone: '123123123123',
      email: 'test@tset.ru',
      site: 'site.ru',
      type: 0,
      direction: 'Управление и экономика (2)',
      hasMilitary: false,
      hasHostel: false,
      points: 50
    },
    {
      id: 1,
      name: 'МИРЭА — Российский технологический университет',
      description:
        'Один из ведущих технических университетов России, готовит специалистов для быстро развивающихся наукоемких отраслей науки и техники. Основные направления обучения: электроника, радиотехнические и телекоммуникационные системы, приборостроение и кибернетика, химические технологии. Образовательные программы МИРЭА сертифицированы по российским и международным стандартам. В вузе есть собственная лаборатория Big Data и искусственного интеллекта.',
      city: 'Москва',
      budgetPlaces: 1000,
      costPerYear: 20000,
      address: 'Москва',
      telephone: '123123123123',
      email: 'test@tset.ru',
      site: 'site.ru',
      type: 0,
      direction: 'Управление и экономика (2)',
      hasMilitary: false,
      hasHostel: false,
      points: 50
    },
    {
      id: 2,
      name: 'Дальневосточный государственный институт искусств',
      description:
        'Дальневосточный государственный институт искусств — первое и единственное в России высшее образовательное учреждение, в стенах которого ведется подготовка специалистов сразу по трем видам искусств — музыка, театр, живопись.',
      city: 'Владивосток',
      budgetPlaces: 1000,
      costPerYear: 120000,
      address: 'Владивосток',
      telephone: '123123123123',
      email: 'test@tset.ru',
      site: 'site.ru',
      type: 0,
      direction: 'Управление и экономика (2)',
      hasMilitary: false,
      hasHostel: false,
      points: 50
    },
    {
      id: 3,
      name: 'Оренбургский государственный университет',
      description:
        'Оренбургский государственный университет — классический многопрофильный вуз. Университет предлагает не только программы среднего и высшего профессионального образования (специалитет, бакалавриат, магистратуру), но и аспирантуру, докторантуру, повышение квалификации и профессиональную переподготовку.',
      city: 'Оренбург',
      budgetPlaces: 1000,
      costPerYear: 120000,
      address: 'Оренбург',
      telephone: '123123123123',
      email: 'test@tset.ru',
      site: 'site.ru',
      type: 0,
      direction: 'Управление и экономика (2)',
      hasMilitary: false,
      hasHostel: false,
      points: 50
    },
    {
      id: 4,
      name: 'Сочинский филиал Всероссийского государственного университета юстиции (РПА Минюста России)',
      description:
        'Сочинский филиал Всероссийского государственного университета юстиции — это один из крупнейших юридических образовательных центров России. Университет осуществляет: проведение фундаментальных и прикладных научных исследований; информационно-аналитическое экспертное обеспечение деятельности органов государственной власти и юридических лиц.',
      city: 'Сочи',
      budgetPlaces: 1000,
      costPerYear: 120000,
      address: 'Сочи',
      telephone: '123123123123',
      email: 'test@tset.ru',
      site: 'site.ru',
      type: 0,
      direction: 'Управление и экономика (2)',
      hasMilitary: false,
      hasHostel: false,
      points: 50
    },
    {
      id: 5,
      name: 'Краснодарский кооперативный институт (филиал) Российского университета кооперации',
      description:
        'Краснодарский кооперативный институт готовит кадры для системы потребительской кооперации с 1960 года. В соответствии с рейтингом Министерства образования и науки РФ Российский университет кооперации входит в десятку ведущих экономических вузов России. Более 50 тысяч студентов в настоящее время обучаются в университете.',
      city: 'Краснодар',
      budgetPlaces: 1000,
      costPerYear: 120000,
      address: 'Краснодар',
      telephone: '123123123123',
      email: 'test@tset.ru',
      site: 'site.ru',
      type: 0,
      direction: 'Управление и экономика (2)',
      hasMilitary: false,
      hasHostel: false,
      points: 50
    },
    {
      id: 6,
      name: 'Московский государственный технический университет им. Н.Э. Баумана (национальный исследовательский университет)',
      description:
        'Университет Баумана готовит инженеров для самых передовых и высокотехнологичных отраслей науки и техники России, всего здесь открыто более 100 программ. Вуз занимает лидирующее место в Ассоциации технических университетов России. Студенты привлекаются к реальной исследовательской работе, многие из них выбирают научно-исследовательское будущее и продолжают обучение в аспирантуре. Бауманский университет учредитель фонда Сколково.',
      city: 'Москва',
      budgetPlaces: 1000,
      costPerYear: 120000,
      address: 'Москва',
      telephone: '123123123123',
      email: 'test@tset.ru',
      site: 'site.ru',
      type: 0,
      direction: 'Управление и экономика (2)',
      hasMilitary: false,
      hasHostel: false,
      points: 50
    }
  ]
};
