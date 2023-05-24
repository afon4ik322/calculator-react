import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from '@components/layout/layout';
import { LinkAddress } from '@constants/constants';
import CalculatorCCPage from '@pages/calculator-cc-page/calculator-cc-page';
import CalculatorFCPage from '@pages/calculator-fc-page/calculator-fc-page';
import SettingsCCPage from '@pages/settings-cc-page/settings-cc-page';
import SettingsFCPage from '@pages/settings-fc-page/settings-fc-page';
import { useAppSelector } from '@store';
import { GlobalStyle } from '@styles/global-style';
import { ThemeProvider } from 'styled-components';

function App() {
  const theme = useAppSelector((state) => state.theme.theme);

  const appRoutes: Array<{
    path: LinkAddress;
    element: JSX.Element;
  }> = [
    { path: LinkAddress.homefc, element: <CalculatorFCPage /> },
    { path: LinkAddress.homecc, element: <CalculatorCCPage /> },
    { path: LinkAddress.settingsfc, element: <SettingsFCPage /> },
    { path: LinkAddress.settingscc, element: <SettingsCCPage /> },
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index={true} element={<Navigate to={LinkAddress.homefc} />} />

            {appRoutes.map((route) => (
              <Route path={route.path} element={route.element} />
            ))}

            <Route path='*' element={<div>Page not found</div>} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
