import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Bag from './components/Bag';
import Header from './components/Header';
import Search from './components/Search';
import Routes from './routes';
import store from './store';
import { AppContainer, AppCenter } from './styles';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <AppContainer>
          <AppCenter>
            <Routes />
            <Search />
            <Bag />
          </AppCenter>
        </AppContainer>
      </BrowserRouter>
      <GlobalStyle />
    </Provider>
  );
};

export default App;
