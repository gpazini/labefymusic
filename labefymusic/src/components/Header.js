import React from 'react';
import styled from 'styled-components';
import ImgPLay from '../img/playbuttonclear.png';

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;surge ./build
  position: fixed;
  top: 0;
  background-color: #001e26;
  width: 100vw;
  color: #d4dfe0;
  padding: 10px;
  img {
    width: 50px;
  }
  h1 {
    padding-left: 10px;
  }

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 100vw;
  }
`
class Header extends React.Component {
    render(){
        return (
            <ContainerHeader>
                <img src={ImgPLay} alt='Play'/>
                <h1>LabefyMusic</h1>
            </ContainerHeader>
        )
    }
}
export default Header