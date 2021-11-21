import { candidateReducer, initialState } from './candidateReducer';
import { SET_CANDIDATES } from './actions';
describe('candidateReducer Test', () => {
  const candidatesMock = [
    {
      id: 1,
      name: 'Alvin Satterfield',
      email: 'cornellbartell@connellyleannon.biz',
      birth_date: '1997-09-07',
      year_of_experience: 5,
      position_applied: 'Technician',
      application_date: '2018-07-02',
      status: 'rejected',
    },
    {
      id: 2,
      name: 'Colette Morar',
      email: 'corinnestark@pacocha.co',
      birth_date: '1998-08-03',
      year_of_experience: 3,
      position_applied: 'Designer',
      application_date: '2017-11-18',
      status: 'waiting',
    },
    {
      id: 3,
      name: 'Rosalind Rath DDS',
      email: 'sandyankunding@marks.io',
      birth_date: '1980-03-28',
      year_of_experience: 15,
      position_applied: 'Orchestrator',
      application_date: '2018-01-31',
      status: 'approved',
    },
    {
      id: 4,
      name: 'Cyrstal Kunze',
      email: 'lavernokon@stroman.name',
      birth_date: '1997-10-30',
      year_of_experience: 8,
      position_applied: 'Analyst',
      application_date: '2018-09-12',
      status: 'rejected',
    },
    {
      id: 5,
      name: 'Henrietta Fisher V',
      email: 'lewis@sipes.biz',
      birth_date: '1974-09-14',
      year_of_experience: 14,
      position_applied: 'Producer',
      application_date: '2018-04-25',
      status: 'waiting',
    },
  ];
  test('candidate reducer to return state for default action ', () => {
    const newState = candidateReducer(initialState, { type: 'ANY' });
    expect(newState).toEqual(initialState);
  });
  test('should update candidates list properly for SET_CANDIDATES Action', () => {
    const newState = candidateReducer(initialState, {
      type: SET_CANDIDATES,
      payload: candidatesMock,
    });
    expect(newState.candidates).toEqual(candidatesMock);
  });
});
