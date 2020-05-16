import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes';
import { AppContainer, AppCenter } from './styles';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppContainer>
          <AppCenter>
            <Routes />
          </AppCenter>
        </AppContainer>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
