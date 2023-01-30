import useSWR from 'swr';

import { swGet1 } from '../../utils/fetcherPeople';
import Table from '../Table';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },

  {
    title: 'Height',
    dataIndex: 'height',
    key: 'height',
  },
  {
    title: 'Birth_year',
    dataIndex: 'birth_year',
    key: 'birth_year',
  },
  {
    title: 'Films',
    dataIndex: 'films',
    key: 'films',
    render: (films: string[]) => films.length,
  },
];

const People = () => {
  const { data, error } = useSWR('/people', swGet1);

  if (error) {
    return <div className="px-2">Oh oh!</div>;
  }
  if (!data) {
    return <div className="px-2">Loading...</div>;
  }

  return (
    <div>
      <Table columns={columns} data={data.results} /* :D */ />
    </div>
  );
};

export default People;
