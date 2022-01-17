import React from 'react';
import styled from 'styled-components';
import MusicPlaylist from './MusicPlaylist';
import Playlists from './Playlists';
import AddMusic from './AddMusic';

const ContainerPlaylistManager = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }
`
const SuasPlalistsContainer = styled.div`
    padding-right: 10px;
    border-right: 1px solid gray;
    min-width: 270px;
    flex-grow: 0;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        border: none;
    }

`
const DetailContainer = styled.div`
    margin-left: 10px;
    flex-grow: 2;
`
class PlaylistManager extends React.Component {
    state = {
        telaAtual: false,
        playlistId: '',
        AddTracks: false,
        trackId: '',
    }

    onChangePagina = (playlistId) => {
        this.setState({telaAtual: !this.state.telaAtual})
        this.setState({playlistId: playlistId})

    }
    renderizarDetalhes = () => {
        if (this.state.telaAtual) {
            if(this.state.AddTracks) {
                return <AddMusic 
                onChangeMusic={this.onChangeMusic}
                playlistId={this.state.playlistId}
                />
            } else {
                return <MusicPlaylist 
                    playlistId={this.state.playlistId}
                    onChangeMusic={this.onChangeMusic}
                    trackId={this.state.trackId}

                />
    
            } 
        }
    }
    onChangeMusic = () => {
        this.setState({AddTracks: !this.state.AddTracks})
    }

    render(){
        return (
        <ContainerPlaylistManager>
            <SuasPlalistsContainer>
                <Playlists 
                    listaMusicas={this.onChangePagina} 
                />
            </SuasPlalistsContainer>
            <DetailContainer>
                {this.renderizarDetalhes()}
            </DetailContainer>
        </ContainerPlaylistManager>
        )
    }
}
export default PlaylistManager