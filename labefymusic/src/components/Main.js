import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import PlaylistManager from './PlaylistManager';
import CriarPlaylist from './CriarPlaylist';
import HomePic from '../img/home_black.svg'
import PlaylistManagerPic from '../img/playlist_play_black.svg';
import PlaylistAdd from '../img/playlist_add_black.svg';

const ContainerMain = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100%;
    margin-top: 65px;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 60px;
        width: 100vw;
    }
`
const ContainerLateral = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 135px;
    margin: 10px 0 5px 15px;
    padding: 5px;
    border-right: 1px solid gray;
    
    div {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 5px;
        img {
            height: 30px;
            padding-right: 3px;
        }
    }
    div:hover {
        filter: invert(25%);
        font-weight: bolder;
        img {
            filter: invert(25%);
        }
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        margin: 5px;
        padding: 5px;
        width: 100vw;
        border-right: none;
        border-bottom: 1px solid gray;
    }
`
const ContainerMeio = styled.div`
    margin: 10px;
    width: 100vw;
    
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        margin: 5px;
        width: 100vw;
    }
`
class Main extends React.Component {
    state = {
        telaAtual: 'Home',
    }
    onChangePagina = () => {
        switch (this.state.telaAtual) {
            case 'Home':
                return <Home />
            case  'PlaylistManager':
                return <PlaylistManager />

            case 'CriaPlay':
                return <CriarPlaylist />
            default:
                return <Home />
        }
    }
    onChangeHome = () => {
        this.setState({telaAtual: 'Home'})
    }
    onChangePlaylistManager = () => {
        this.setState({telaAtual: 'PlaylistManager'})
    }
    onChangeCriaPLay = () => {
        this.setState({telaAtual: 'CriaPlay'})
    }

    render(){
        return (
            <ContainerMain>
                <ContainerLateral>
                    <div onClick={this.onChangeHome}>
                        <img alt='Home' src={HomePic} /><span>Ínicio</span>
                    </div>
                    <div onClick={this.onChangePlaylistManager}>
                        <img alt='PlaylistManager' src={PlaylistManagerPic} /><span>Playlists</span>
                    </div>

                    <div onClick={this.onChangeCriaPLay}>
                        <img alt='AddPlaylist' src={PlaylistAdd} /><span>Criar Playlist</span>
                    </div>
                </ContainerLateral>
                <ContainerMeio>
                    {this.onChangePagina()}
                </ContainerMeio>
            </ContainerMain>
        )
    }
}
export default Main