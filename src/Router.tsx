import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InfoPage from './components/pages/infoPage/infoPage';
import CreatePetPage from './components/pages/createPetPage/createPetPage';
import PathPage from './components/pages/pathsPage/pathsPage';

const RouterComponent = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<InfoPage />} />
          <Route path="/create-pet" element={<CreatePetPage />} />
          <Route path="/api-paths" element={<PathPage />} />
        </Routes>
    </Router>
  );
}

export default RouterComponent;
