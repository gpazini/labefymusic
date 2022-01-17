import React from 'react';
import axios from 'axios'
import styled from 'styled-components';

import AddNewMusic from '../img/play_circle_outline_black.svg';
import AddMusicPic from '../img/add_circle_black.svg';
import VoltarPic from '../img/arrow_back_ios_black.svg'

const ContainerAddMusic = styled.div`
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
    #VoltarPic:hover {
        filter: invert(45%); 
    }
    #VoltarPic:active {
        filter: invert(45%);
    }
`
const Formulario = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    padding: 5px;
    span {

    }
    input {
        border: 1px solid gray;
        background-color: #006261;
        text-decoration: none;
        box-sizing: border-box;
        outline: 0;
        box-shadow: 0;
        color: #fff;
        margin: 5px;
        padding: 7px 15px 7px 15px;
        border-radius: 25px;
        flex-grow: 1;
    }
    input::placeholder {
      color: #fff;
    }
`
const BotaoEnviar = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    img {
        height: 50px;
    }
    img:hover {
        filter: invert(25%); 
    }
    img:active {
        filter: invert(25%);
    }
`
class AddMusic extends React.Component {
    state = {
        name: '',
        artist: '',
        url: '',
    }

    addTrackToPlaylist = async(playlistId) => {
        console.log(playlistId)
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`
        const body = {
            name: this.state.name, 
            artist: this.state.artist,
            url: this.state.url
        }
        try {
            const response = await axios.post(url, body, {
                headers: {
                    "Authorization": 'guilherme-correa-banu'
                }
            })
            console.log('resposta axios', response.data.message)
            console.log('deu certo!')
            this.props.onChangeMusic()
            
        } catch (error) {
            console.log(error.response.data)
            console.log('deu rum!')
        }
    }
    
    onChangeName = (e) => {
        this.setState({name: e.target.value})
    }
    onChangeArtist = (e) => {
        this.setState({artist: e.target.value})
    }
    onChangeUrl = (e) => {
        this.setState({url: e.target.value})
    }
    

    render(){
        return (
            <ContainerAddMusic>
                <Titulo>
                    <img src={AddNewMusic} alt='Adicionar Musica'/>
                    <h2>Adicionar música na playlist</h2>
                    <img src={VoltarPic} alta='VoltarPic' id='VoltarPic'
                        onClick={this.props.onChangeMusic}/>

                </Titulo>
                <Formulario>
                    <span>Artista ou Banda:</span>
                    <input
                        type="text" name="artist" id="artist" 
                        placeholder='...'
                        size="20"
                        value={this.state.artist}
                        onChange={this.onChangeArtist}
                    />
                    <span>Nome da Música:</span>
                    <input
                        type="text" name="name" id="name"
                        placeholder='...'
                        size="30"
                        value={this.state.name}
                        onChange={this.onChangeName}
                    />
                    <span>Link da Música:</span> 
                    <input 
                        type="url" name="url" id="url"
                        placeholder="https://example.com"
                        size="30"
                        value={this.state.url}
                        onChange={this.onChangeUrl}
                    />
                </Formulario>
                <BotaoEnviar>
                    <img 
                        alt='Adicionar Playlist'
                        src={AddMusicPic}
                        onClick={() => this.addTrackToPlaylist(this.props.playlistId)}
                    />
                </ BotaoEnviar>
            </ContainerAddMusic>
        )
    }
}
export default AddMusic