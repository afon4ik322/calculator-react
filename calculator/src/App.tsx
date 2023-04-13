import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LinkAddress } from './constants/constants';
import { useAppSelector } from './store';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global-style';
import Layout from './components/layout/layout';
import CalculatorFCPage from './pages/calculator-fc-page/calculator-fc-page';
import SettingsFCPage from './pages/settings-fc-page/settings-fc-page';
import CalculatorCCPage from './pages/calculator-cc-page/calculator-cc-page';
import SettingsCCPage from './pages/settings-cc-page/settings-cc-page';

function App() {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Navigate to={LinkAddress.homefc} />} />
            <Route path={LinkAddress.homefc} element={<CalculatorFCPage />} />
            <Route path={LinkAddress.homecc} element={<CalculatorCCPage />} />
            <Route path={LinkAddress.settingsfc} element={<SettingsFCPage />} />
            <Route path={LinkAddress.settingscc} element={<SettingsCCPage />} />
            <Route path='*' element={<div>Page not found</div>} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
