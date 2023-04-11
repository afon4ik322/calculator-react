import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LinkAddress } from './constants/constants';
import { Provider } from 'react-redux';
import { store } from './store';

import CalculatorFCPage from './pages/calculator-fc-page/calculator-fc-page';
import SettingsFCPage from './pages/settings-fc-page/settings-fc-page';
import Layout from './components/layout/layout';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Navigate to='homefc' />} />
            <Route path={LinkAddress.homefc} element={<CalculatorFCPage />} />
            {/* <Route path={LinkAddress.homecc} element={<CalculatorCCPage />} /> */}
            <Route path={LinkAddress.settingsfc} element={<SettingsFCPage />} />
            {/* <Route path={LinkAddress.settingscc} element={<SettingsCCPage />} /> */}
            <Route path='*' element={<div>Page not found</div>} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
