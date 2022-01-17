import React from 'react';
import './index.css';
import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
class App extends React.Component {

  render() {
    return (
      <ContainerApp>
        <Header />
        <Main />
        <Footer />
      </ContainerApp>
    )
  }
}
export default App;