import { Routes, Route, Navigate } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { VacanciesLayout } from './pages/VacanciesLayout';
import { VacanciesPage } from './pages/VacanciesPage';
import { AboutPage } from './pages/AboutPage';
import VacancyPage from './pages/VacancyPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/vacancies/moscow" replace />} />

        <Route path="/vacancies" element={<VacanciesLayout />}>
          <Route index element={<Navigate to="moscow" replace />} />
          <Route path="moscow" element={<VacanciesPage city="Москва" />} />
          <Route
            path="petersburg"
            element={<VacanciesPage city="Санкт-Петербург" />}
          />
        </Route>

        <Route path="/vacancies/:id" element={<VacancyPage />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;