import { Tabs } from '@mantine/core';
import { useNavigate, useLocation } from 'react-router-dom';

const CITIES = [
  { value: 'moscow', label: 'Москва', path: '/vacancies/moscow' },
  { value: 'petersburg', label: 'Санкт-Петербург', path: '/vacancies/petersburg' },
];

export const CityTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeTab =
    CITIES.find((city) => location.pathname === city.path)?.value ||
    'moscow';

  return (
    <Tabs
      value={activeTab}
      onChange={(value) => {
        const city = CITIES.find((c) => c.value === value);
        if (city) {
          navigate(city.path);
        }
      }}
    >
      <Tabs.List>
        {CITIES.map((city) => (
          <Tabs.Tab key={city.value} value={city.value}>
            {city.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  );
};