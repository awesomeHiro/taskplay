export const state = () => ({
  list
})

export const mutations = {
  addTask(state, newTask) {
    state.tasks.push(newTask)
  }
}

export const actions = {
  addTask({ commit }) {
    const isSignedIn = true
    commit('addTask', isSignedIn)
  }
}

const list = [
  {
    id: '63E4zaTsK',
    done: false,
    repeat: null,
    estimate: 14,
    result: 58,
    section: 4,
    name: 'in felis',
    project: 'nec',
    start: '14:22',
    end: '14:56',
    date: '2019-08-01'
  },
  {
    id: 'DY4Xxj8CD',
    done: false,
    repeat: null,
    estimate: 51,
    result: 51,
    section: 3,
    name: 'lectus pellentesque',
    project: 'adipiscing',
    start: '3:39',
    end: '18:49',
    date: '2019-05-19'
  },
  {
    id: 'kxUgdxM9j',
    done: false,
    repeat: '5 8 1 4 7',
    estimate: 5,
    result: 27,
    section: 0,
    name: 'rutrum nulla',
    project: 'leo',
    start: '19:25',
    end: '23:54',
    date: '2019-07-26'
  },
  {
    id: 'F1jp0r5kE',
    done: false,
    repeat: null,
    estimate: 48,
    result: 19,
    section: 4,
    name: 'ut tellus',
    project: 'placerat',
    start: '4:17',
    end: '12:18',
    date: '2019-10-28'
  },
  {
    id: 'ie5rosmsU',
    done: false,
    repeat: null,
    estimate: 8,
    result: 34,
    section: 6,
    name: 'sapien in',
    project: 'velit',
    start: '18:52',
    end: '7:53',
    date: '2020-04-18'
  },
  {
    id: 'VpJJJ6DmJ',
    done: true,
    repeat: '4 3 2 3 7',
    estimate: 48,
    result: 41,
    section: 0,
    name: 'pede justo',
    project: 'dictumst',
    start: '0:42',
    end: '15:30',
    date: '2019-05-09'
  },
  {
    id: '92fYJbqzt',
    done: false,
    repeat: '0 5 9 0 6',
    estimate: 39,
    result: 45,
    section: 6,
    name: 'sapien varius',
    project: 'lorem',
    start: '6:23',
    end: '19:05',
    date: '2020-03-25'
  },
  {
    id: '6RJNA2XiX',
    done: false,
    repeat: null,
    estimate: 27,
    result: 51,
    section: 1,
    name: 'vulputate vitae',
    project: 'donec',
    start: '10:42',
    end: '1:41',
    date: '2019-06-04'
  },
  {
    id: 'Jmqefuvmz',
    done: false,
    repeat: '3 9 5 0 0',
    estimate: 42,
    result: 25,
    section: 3,
    name: 'justo etiam',
    project: 'in',
    start: '5:36',
    end: '17:52',
    date: '2019-11-14'
  },
  {
    id: 'ePTWfJ4iw',
    done: false,
    repeat: '7 6 9 2 4',
    estimate: 32,
    result: 46,
    section: 2,
    name: 'lorem integer',
    project: 'vestibulum',
    start: '1:57',
    end: '3:34',
    date: '2020-01-06'
  },
  {
    id: 'HN1TYkEbG',
    done: true,
    repeat: '9 0 3 8 9',
    estimate: 27,
    result: 50,
    section: 5,
    name: 'nisl venenatis',
    project: 'mauris',
    start: '1:49',
    end: '3:49',
    date: '2020-01-28'
  },
  {
    id: '7xfLx2fOa',
    done: false,
    repeat: '8 6 0 6 4',
    estimate: 47,
    result: 23,
    section: 2,
    name: 'tortor duis',
    project: 'turpis',
    start: '2:02',
    end: '6:43',
    date: '2019-12-29'
  },
  {
    id: '5Spq4WdrD',
    done: false,
    repeat: null,
    estimate: 55,
    result: 41,
    section: 3,
    name: 'elit proin',
    project: 'tortor',
    start: '16:18',
    end: '22:18',
    date: '2019-07-09'
  },
  {
    id: 'KtOIp76j0',
    done: true,
    repeat: '9 7 5 3 6',
    estimate: 21,
    result: 58,
    section: 6,
    name: 'justo lacinia',
    project: 'nisl',
    start: '17:46',
    end: '8:51',
    date: '2020-02-16'
  },
  {
    id: 'iWya9Lcfk',
    done: true,
    repeat: '5 8 5 5 2',
    estimate: 15,
    result: 48,
    section: 1,
    name: 'viverra diam',
    project: 'semper',
    start: '18:26',
    end: '11:15',
    date: '2019-12-15'
  },
  {
    id: 'cshGJEFVd',
    done: false,
    repeat: null,
    estimate: 59,
    result: 18,
    section: 1,
    name: 'tempor turpis',
    project: 'imperdiet',
    start: '16:45',
    end: '20:01',
    date: '2019-05-13'
  },
  {
    id: '7jO8iObT8',
    done: false,
    repeat: '9 2 2 6 1',
    estimate: 43,
    result: 29,
    section: 0,
    name: 'nullam orci',
    project: 'pede',
    start: '21:41',
    end: '20:52',
    date: '2020-02-15'
  },
  {
    id: '8lY32p6Mn',
    done: true,
    repeat: null,
    estimate: 10,
    result: 29,
    section: 3,
    name: 'erat curabitur',
    project: 'aenean',
    start: '19:35',
    end: '17:04',
    date: '2019-08-18'
  },
  {
    id: 'BGxGVtfi5',
    done: false,
    repeat: null,
    estimate: 22,
    result: 14,
    section: 1,
    name: 'amet eros',
    project: 'dui',
    start: '7:26',
    end: '20:49',
    date: '2020-02-09'
  },
  {
    id: '8PLzKuVty',
    done: false,
    repeat: '3 9 6 6 7',
    estimate: 14,
    result: 30,
    section: 2,
    name: 'maecenas ut',
    project: 'porttitor',
    start: '5:12',
    end: '6:18',
    date: '2020-04-03'
  },
  {
    id: 'ursUCM9Tk',
    done: true,
    repeat: '0 3 3 1 8',
    estimate: 44,
    result: 3,
    section: 2,
    name: 'cubilia curae',
    project: 'quis',
    start: '1:40',
    end: '2:29',
    date: '2019-12-22'
  },
  {
    id: 'ZNqAD0xr5',
    done: false,
    repeat: null,
    estimate: 12,
    result: 20,
    section: 2,
    name: 'ultrices libero',
    project: 'pharetra',
    start: '13:12',
    end: '4:04',
    date: '2020-02-16'
  },
  {
    id: '6yiZHPz8G',
    done: true,
    repeat: null,
    estimate: 13,
    result: 57,
    section: 4,
    name: 'elit proin',
    project: 'in',
    start: '6:28',
    end: '14:35',
    date: '2019-12-19'
  },
  {
    id: '3aOEDcC6L',
    done: true,
    repeat: '7 0 5 1 3',
    estimate: 12,
    result: 14,
    section: 0,
    name: 'vestibulum aliquet',
    project: 'vivamus',
    start: '13:55',
    end: '5:03',
    date: '2019-05-08'
  },
  {
    id: '4eafdOuHn',
    done: false,
    repeat: null,
    estimate: 37,
    result: 59,
    section: 4,
    name: 'porta volutpat',
    project: 'lectus',
    start: '13:48',
    end: '4:02',
    date: '2019-06-10'
  },
  {
    id: 'opXKQCX6x',
    done: true,
    repeat: null,
    estimate: 1,
    result: 39,
    section: 2,
    name: 'nulla eget',
    project: 'nibh',
    start: '19:57',
    end: '20:44',
    date: '2019-05-02'
  },
  {
    id: 'JClzq7XTH',
    done: true,
    repeat: '9 5 4 5 1',
    estimate: 33,
    result: 45,
    section: 3,
    name: 'tristique tortor',
    project: 'cursus',
    start: '14:16',
    end: '20:43',
    date: '2019-10-15'
  },
  {
    id: '62JXNcJtR',
    done: false,
    repeat: null,
    estimate: 51,
    result: 19,
    section: 3,
    name: 'varius ut',
    project: 'mus',
    start: '8:59',
    end: '7:14',
    date: '2019-10-21'
  },
  {
    id: 'WtS3Gd1En',
    done: true,
    repeat: '5 0 2 8 8',
    estimate: 36,
    result: 37,
    section: 3,
    name: 'venenatis tristique',
    project: 'in',
    start: '5:51',
    end: '5:01',
    date: '2019-10-04'
  },
  {
    id: 'bWzHNmfft',
    done: false,
    repeat: null,
    estimate: 23,
    result: 20,
    section: 6,
    name: 'ac nibh',
    project: 'sapien',
    start: '14:44',
    end: '1:09',
    date: '2019-12-16'
  },
  {
    id: 'lUewsvcfM',
    done: false,
    repeat: '2 9 6 9 4',
    estimate: 55,
    result: 49,
    section: 0,
    name: 'bibendum morbi',
    project: 'nonummy',
    start: '17:41',
    end: '0:05',
    date: '2019-09-07'
  },
  {
    id: 'th2WggEdi',
    done: false,
    repeat: '6 6 9 3 9',
    estimate: 2,
    result: 56,
    section: 3,
    name: 'nam dui',
    project: 'curabitur',
    start: '0:14',
    end: '15:09',
    date: '2020-02-02'
  },
  {
    id: 'ialYzNFf7',
    done: true,
    repeat: null,
    estimate: 54,
    result: 22,
    section: 0,
    name: 'luctus cum',
    project: 'non',
    start: '17:09',
    end: '2:12',
    date: '2019-08-22'
  },
  {
    id: '4kE3wEPOx',
    done: true,
    repeat: '5 9 2 8 3',
    estimate: 49,
    result: 16,
    section: 3,
    name: 'hac habitasse',
    project: 'in',
    start: '16:53',
    end: '11:23',
    date: '2019-08-16'
  },
  {
    id: 'UrMJv5PsE',
    done: true,
    repeat: null,
    estimate: 53,
    result: 4,
    section: 6,
    name: 'blandit ultrices',
    project: 'mauris',
    start: '7:22',
    end: '10:43',
    date: '2019-11-02'
  },
  {
    id: 'wgvdPMvK1',
    done: false,
    repeat: null,
    estimate: 55,
    result: 24,
    section: 0,
    name: 'curae mauris',
    project: 'sed',
    start: '3:02',
    end: '12:24',
    date: '2019-10-02'
  },
  {
    id: 'iKCJ8p2jL',
    done: true,
    repeat: null,
    estimate: 34,
    result: 17,
    section: 5,
    name: 'dui maecenas',
    project: 'pellentesque',
    start: '9:08',
    end: '10:27',
    date: '2020-01-25'
  },
  {
    id: 'dfpKTyDFX',
    done: true,
    repeat: null,
    estimate: 57,
    result: 27,
    section: 2,
    name: 'est lacinia',
    project: 'donec',
    start: '17:17',
    end: '23:01',
    date: '2020-04-24'
  },
  {
    id: 'kscB6M7OJ',
    done: true,
    repeat: '4 1 4 4 5',
    estimate: 57,
    result: 3,
    section: 0,
    name: 'nisi nam',
    project: 'tristique',
    start: '19:34',
    end: '8:01',
    date: '2020-03-02'
  },
  {
    id: 'rKeWHIFY7',
    done: false,
    repeat: null,
    estimate: 14,
    result: 49,
    section: 2,
    name: 'nascetur ridiculus',
    project: 'eros',
    start: '21:14',
    end: '4:06',
    date: '2019-09-25'
  },
  {
    id: 'sO2pNTCkH',
    done: true,
    repeat: '4 6 7 8 2',
    estimate: 48,
    result: 42,
    section: 0,
    name: 'vehicula condimentum',
    project: 'in',
    start: '6:21',
    end: '15:19',
    date: '2019-06-07'
  },
  {
    id: 'YDTCZGsGp',
    done: true,
    repeat: '0 9 9 6 4',
    estimate: 12,
    result: 24,
    section: 3,
    name: 'vivamus vestibulum',
    project: 'lacus',
    start: '3:10',
    end: '19:42',
    date: '2020-04-05'
  },
  {
    id: 'hZap8nKPL',
    done: false,
    repeat: '9 3 2 2 5',
    estimate: 34,
    result: 52,
    section: 3,
    name: 'sollicitudin ut',
    project: 'nisl',
    start: '12:32',
    end: '11:33',
    date: '2020-03-16'
  },
  {
    id: 'O31X4ejsb',
    done: true,
    repeat: null,
    estimate: 60,
    result: 32,
    section: 5,
    name: 'lobortis ligula',
    project: 'consequat',
    start: '4:32',
    end: '19:14',
    date: '2019-11-23'
  },
  {
    id: 'qTTr18596',
    done: true,
    repeat: null,
    estimate: 29,
    result: 41,
    section: 0,
    name: 'quisque arcu',
    project: 'parturient',
    start: '12:51',
    end: '1:28',
    date: '2019-07-23'
  },
  {
    id: 'j2f3UP5Or',
    done: true,
    repeat: null,
    estimate: 25,
    result: 39,
    section: 4,
    name: 'parturient montes',
    project: 'tortor',
    start: '14:37',
    end: '1:27',
    date: '2019-05-13'
  },
  {
    id: 'ZBtGIbhSa',
    done: false,
    repeat: null,
    estimate: 41,
    result: 53,
    section: 1,
    name: 'sed lacus',
    project: 'eros',
    start: '14:59',
    end: '14:15',
    date: '2020-01-31'
  },
  {
    id: 'p37T5hLtZ',
    done: false,
    repeat: null,
    estimate: 49,
    result: 33,
    section: 4,
    name: 'duis bibendum',
    project: 'sit',
    start: '9:30',
    end: '6:52',
    date: '2019-06-05'
  },
  {
    id: 'lZOK1Lmre',
    done: false,
    repeat: null,
    estimate: 55,
    result: 47,
    section: 3,
    name: 'magnis dis',
    project: 'ligula',
    start: '0:52',
    end: '12:14',
    date: '2020-03-07'
  },
  {
    id: 'wfAItt8Xf',
    done: true,
    repeat: null,
    estimate: 11,
    result: 1,
    section: 1,
    name: 'aliquam augue',
    project: 'turpis',
    start: '21:10',
    end: '1:10',
    date: '2020-04-08'
  }
]