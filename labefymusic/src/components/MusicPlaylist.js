import React from 'react';
import axios from 'axios'
import styled from 'styled-components';
import MusicPic from '../img/play_circle_filled_black.svg';
import CardMusic from './CardMusic';
import PlaylistAdd from '../img/playlist_add_black.svg';

const ContainerMusicas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-bottom: 20px;
`
const Titulo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid gray;
    margin-bottom: 10px;
    h2 {
        padding-left: 10px;
        flex-grow: 1;
    }
    #AddMusic:hover {
        filter: invert(45%); 
    }
    #AddMusic:active {
        filter: invert(45%);
    }

`
const ContainerLegendaMusic = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr 5fr 5fr 1fr ;
    column-gap: 5px;
    align-items: center;
    border-bottom: 1px solid #b2b2b2;
    color: #848484;
    padding: 5px;
`
class MusicPlaylist extends React.Component {
    state = {
        tracks: [],
    }
    componentDidMount = () => {
        this.getPlaylistTracks(this.props.playlistId)
    }

    getPlaylistTracks = async(playlistId) => {
        console.log(playlistId)
        const src = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`
        try {
            const response = await axios.get(src, {
                headers: {
                    "Authorization": 'guilherme-correa-banu'
                }
            })
            this.setState({tracks: response.data.result.tracks})
        } catch (error) {
            console.log(error.response.data.result)
        }
    }

    removeTrackFromPlaylist = (playlistId, trackId) => {
        console.log('id playlist', playlistId)
        console.log('id music', trackId)
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks/${trackId}`
        axios.delete(url, {
            headers: {
              Authorization: "guilherme-correa-banu"
            }
        })
        .then((response) => {
            console.log(response.data)
            this.getPlaylistTracks(playlistId)
            alert('Music deletada com Sucesso!')
        })
        .catch((error) => {
            console.log(error.response.data)
        });
    }
    render(){
        const tracks = this.state.tracks.map((track, index) => {
            return <CardMusic 
                key={track.id}
                name={track.name}
                artist={track.artist}
                url={track.url}
                removeTrackFromPlaylist = {() => this.removeTrackFromPlaylist(this.props.playlistId, track.id)}
                trackId={track.id}
                counter={index +1}
            />
        })
        return (
            <ContainerMusicas>
                <Titulo>
                    <img alt='SuasMusicas' src={MusicPic} />
                    <h2>Suas Músicas</h2>
                    <img 
                        onClick={this.props.onChangeMusic}
                        id='AddMusic' alt='AddMusic' src={PlaylistAdd} 
                    />

                </Titulo>
                <ContainerLegendaMusic>
                    <span>ID</span>
                    <span>NOME</span>
                    <span>ARTISTA / BANDA</span>
                    <span>PLAY</span>
                    <span> </span>
                </ContainerLegendaMusic>
                {tracks}
            </ContainerMusicas>
        )
    }
}
export default MusicPlaylist