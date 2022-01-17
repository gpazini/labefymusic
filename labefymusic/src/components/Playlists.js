import React from 'react';
import axios from 'axios'
import styled from 'styled-components';
import SuaPlaylist from '../img/queue_music_black.svg'
import CardPlaylist from './CardPlaylist';

const ContainerPlaylist = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`
const Titulo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid gray;
    margin-bottom: 10px;
    h2 {
        padding-left: 10px;
    }
`
class Playlists extends React.Component {
    state = {
        playlists: [],
    };
    componentDidMount = () => {
        this.getAllPlaylists()
    };
    getAllPlaylists = async() => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        try {
            const response = await axios.get(url, {
                headers: {
                    "Authorization": 'guilherme-correa-banu'
                }
            })
            this.setState({playlists: response.data.result.list})  
        } catch (error) {
            console.log(error.response)
        }
    };

    deletePlaylist = (playlistId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`
        axios.delete(url, {
            headers: {
              Authorization: "guilherme-correa-banu"
            }
        })
        .then((response) => {
            this.getAllPlaylists()
            alert('Playlist deletada com Sucesso!')
        })
        .catch((error) => {
            console.log(error.response.data)
        });
    }; 
    render(){
        const playlists = this.state.playlists.map(playlist => {
            return <CardPlaylist 
                key={playlist.id}
                name={playlist.name}
                playlistId={playlist.id}
                deletePlaylist={this.deletePlaylist}
                listaMusicas={this.props.listaMusicas}
            />
        })
        return (
            <ContainerPlaylist>
                <Titulo>
                    <img alt='SuaPlaylist' src={SuaPlaylist} /><h2>Suas Playlists</h2>
                </Titulo>
                    {playlists}
            </ContainerPlaylist>
        )
    }
}
export default Playlists