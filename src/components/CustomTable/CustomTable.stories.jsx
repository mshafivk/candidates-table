import React from 'react';
import CustomTable from './CustomTable';

export default {
  title: 'Table Widget',
  component: CustomTable,
};

const Tpl = (args) => <CustomTable {...args} />;

export const CustomTableDetault = Tpl.bind({});
CustomTableDetault.args = {
  columns: [
    {
      title: 'Name',
      selector: 'name',
      sortable: false,
      filterable: true,
    },
    {
      title: 'Email',
      selector: 'email',
      sortable: false,
      flexGrow: 2,
    },
    {
      title: 'Age',
      selector: 'birth_date',
      sortable: false,
      cellRenderer: function (value) {
        let birthDate = new Date(value);
        let today = new Date();
        return today.getFullYear() - birthDate.getFullYear();
      },
    },
    {
      title: 'Years of experience',
      selector: 'year_of_experience',
      sortable: true,
    },
    {
      title: 'Position Applied',
      selector: 'position_applied',
      sortable: true,
      filterable: true,
    },
    {
      title: 'Applied On',
      selector: 'application_date',
      sortable: true,
    },
    {
      title: 'Status',
      selector: 'status',
      sortable: false,
      filterable: true,
    },
  ],
  data: [
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
      birth_date: '1997-10-30',
      year_of_experience: 15,
      position_applied: 'Orchestrator',
      application_date: '2018-01-31',
      status: 'approved',
    },
    {
      id: 4,
      name: 'Cyrstal Kunze',
      email: 'lavernokon@stroman.name',
      birth_date: '1976-08-04',
      year_of_experience: 8,
      position_applied: 'Analyst',
      application_date: '2018-09-12',
      status: 'rejected',
    },
    {
      id: 5,
      name: 'Henrietta Fisher V',
      email: 'lewis@sipes.biz',
      birth_date: '1976-08-04',
      year_of_experience: 14,
      position_applied: 'Producer',
      application_date: '2018-04-25',
      status: 'waiting',
    },
    {
      id: 6,
      name: 'Luize Lane',
      email: 'luiselane@stroman.name',
      birth_date: '1984-04-25',
      year_of_experience: 5,
      position_applied: 'Analyst',
      application_date: '2018-07-12',
      status: 'waiting',
    },
  ],
};
CustomTableDetault.storyName = 'Default';

export const EmptyWidget = Tpl.bind({});
EmptyWidget.args = { columns: [], data: [] };
EmptyWidget.storyName = 'When Empty';
