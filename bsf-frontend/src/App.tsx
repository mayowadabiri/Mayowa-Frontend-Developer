import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Rocket from './components/Capsules';
import Select from './components/Select';
import { dragon, status } from './constants/texts';
import Input, { InputElement } from './components/Input';
import { useGetCapsules } from './query';
import { CapsuleUI } from './types';
import Loader from './components/Loader';
import Pagination from './components/Pagination';
import Capsule from './components/Capsule';

function App() {
  const [searchQuery, setSearchQuery] = useState<{ [key: string]: any }>({
    query: {},
    options: {
      populate: ['launches'],
      page: 1,
    },
  });
  const [selectedCapsule, setSelectedCapsule] = useState<CapsuleUI>();
  const { data, isLoading, refetch } = useGetCapsules(searchQuery);
  const [filter, setFilter] = useState<{ [key: string]: string }>({
    status: '',
    type: '',
  });
  const [dragonNumber, setDragonNumber] = useState('');

  useEffect(() => {
    refetch();
  }, [searchQuery, filter, dragonNumber]);

  const capsules = useMemo<CapsuleUI[]>(() => {
    if (data) {
      return data?.docs.map((each) => ({
        id: each.id,
        dragonType: each.type,
        serial: each.serial,
        launches: each.launches.length,
        water_landings: each.water_landings,
        reuse: each.reuse_count,
        status: each.status,
        last_update: each.last_update,
      }));
    }
    return [];
  }, [data]);

  const handleStatusFilter = (
    useOptions: any[],
    name: string,
    value: string
  ) => {
    const selectValue = useOptions.find((item) => item.value === value);
    setFilter({
      ...filter,
      [name]: selectValue.value,
    });
    if (value) {
      setSearchQuery({
        ...searchQuery,
        query: {
          ...searchQuery.query,
          [name]: value,
        },
        options: {
          ...searchQuery.query,
          page: 1,
        },
      });
    } else {
      const newQuery = searchQuery;
      delete newQuery.query[name];
      setSearchQuery(newQuery);
    }
  };

  // const handleRefetchQuery = () => {
  //   refetch();
  // };

  const handlePageChange = (num: number) => {
    if (num) {
      setSearchQuery({
        ...searchQuery,
        options: {
          ...searchQuery.options,
          page: num,
        },
      });
    }
  };

  const handleDragonNumber = (e: ChangeEvent<InputElement>) => {
    setDragonNumber(e.target.value);
    if (e.target.value) {
      setSearchQuery({
        ...searchQuery,
        query: {
          ...searchQuery.query,
          reuse_count: e.target.value,
        },
      });
    } else {
      const newQuery = searchQuery;
      delete newQuery.query['reuse_count'];
      setSearchQuery(newQuery);
    }
  };

  const handleSelectCapsule = (id: string) => {
    const selected = capsules.find((each) => each.id === id);
    if (selected) {
      setSelectedCapsule(selected);
    }
  };
  return (
    <>
      <Header />
      <Banner />
      <div className="sm:px-18 px-10 mt-24 pb-32" data-testid="app_wrapper">
        <div className="sm:mb-16  grid sm:grid-cols-2 gap-20 sm:justify-center">
          <div data-testid="status">
            <Select
              options={status}
              label="Filter by Status"
              value={filter.status}
              onChange={(selectedData: any) =>
                handleStatusFilter(status, 'status', selectedData.value)
              }
            />
          </div>
          <div>
            <Select
              options={dragon}
              label="Filter by Dragon type"
              onChange={(typeData: any) =>
                handleStatusFilter(dragon, 'type', typeData.value)
              }
              value={filter.type}
            />
          </div>
          <Input
            value={dragonNumber}
            onChange={handleDragonNumber}
            type="number"
            min={1}
          />
        </div>
        {!isLoading && data?.docs.length! > 0 && (
          <>
            <div className="sm:mt-24 mt-10 grid lg:grid-cols-4 md:grid-cols-3 xsm:grid-cols-2 grid-cols-1 gap-10 justify-center">
              {(capsules || []).map((item) => (
                <Rocket
                  {...item}
                  key={item.id}
                  onSelect={() => handleSelectCapsule(item.id)}
                />
              ))}
            </div>
            <Pagination
              pages={data?.totalPages || 0}
              onPageRequest={handlePageChange}
              page={data?.page || 1}
              hasNextPage={data?.hasNextPage!}
              hasPrevPage={data?.hasPrevPage!}
            />
          </>
        )}
        {isLoading && (
          <div className="center my-32">
            <Loader
              visible={isLoading}
              height={100}
              width={100}
              label="Getting capsules"
            />
          </div>
        )}
      </div>
      {selectedCapsule && (
        <Capsule
          capsule={selectedCapsule}
          close={() => setSelectedCapsule(undefined)}
        />
      )}
    </>
  );
}

export default App;
