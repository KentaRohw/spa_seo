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
              title="Home"
              meta={[
                { name: 'twitter:card', content: 'summary' },
                { name: 'twitter:title', content: 'Home' },
                { name: 'twitter:description', content: 'description of Home' },
                { name: 'twitter:image', content: 'http://path/to/image' },
                { property: 'og:title', content: 'Home' },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'http://path/to/this/url' },
                { property: 'og:image', content: 'http://path/to/image' },
                { property: 'og:description', content: 'description of Home' },
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
