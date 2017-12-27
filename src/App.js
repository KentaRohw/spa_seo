import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'rebass';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <div>
            <Helmet
              link={[
                { rel: 'canonical', href: window.location.href },
              ]}
            />
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
