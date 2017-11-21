import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'rebass';

import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <div>
            <Header />
              <Main />
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
