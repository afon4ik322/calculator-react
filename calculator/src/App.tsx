import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import CalculatorFCPage from './pages/calculator-fc-page/calculator-fc-page';
import Layout from './components/layout/layout';
import { LinkAddress } from './constants/constants';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Navigate to='homefc' />} />
          <Route path={LinkAddress.homefc} element={<CalculatorFCPage />} />
          {/* <Route path={LinkAddress.homecc} element={<CalculatorCCPage />} /> */}
          {/* <Route path={LinkAddress.settingsfc} element={<SettingsFCPage />} /> */}
          {/* <Route path={LinkAddress.settingscc} element={<SettingsCCPage />} /> */}
          <Route path='*' element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
