import React from 'react';
import styled from 'styled-components';
import Facebook from '../img/facebook.png'
import Instagram from '../img/instagram.png'
import Twitter from '../img/twitter.png'

const ContainerFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    background-color: #001e26;
    width: 100vw;
    color: #d4dfe0;
    padding: 10px;
    font-size: small;
    position: fixed;
    bottom: 0;
    width:100%;
    img {
        height: 25px;
        padding-left: 20px;
        filter: invert(25%);
    }
    #redesSociais:hover {
        filter: invert(55%); 
    }
    #redesSociais:active {
        filter: invert(55%);
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        padding: 5px;
    }
`
class Footer extends React.Component {
    redesSociaisFooter = () => {
        const urlFacebook = 'https://www.facebook.com/'


    }

    render(){
        return (
            <ContainerFooter>
                <span>Criar por Gui Pazini | Aluno de Backend da Labenu  - LabefyMusic © - 2021</span>
                <div>
                    <a href='https://www.facebook.com/' target="_blank">
                        <img alt='Facebook' id='redesSociais' src={Facebook} />
                    </a>
                    <a href='https://www.instagram.com/' target="_blank">
                        <img alt='Instagram' id='redesSociais' src={Instagram} />
                    </a>
                    <a href='https://www.twitter.com/' target="_blank">
                        <img alt='Twitter' id='redesSociais' src={Twitter} />
                    </a>
                    
                </div>
            </ContainerFooter>
        )
    }
}
export default Footer