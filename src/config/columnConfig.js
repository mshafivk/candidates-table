export const columnConfig = [
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
];
