import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Main } from './components/layout/Main';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
	  );
  }
}

export default App;
