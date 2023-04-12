import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LinkAddress } from './constants/constants';
import { useAppSelector } from './store';

import CalculatorFCPage from './pages/calculator-fc-page/calculator-fc-page';
import SettingsFCPage from './pages/settings-fc-page/settings-fc-page';
import Layout from './components/layout/layout';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global-style';

function App() {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
    </ThemeProvider>
  );
}

export default App;
