import React from 'react';
import axios from 'axios'
import styled from 'styled-components';

import PlaylistAdd from '../img/playlist_add_black.svg';
import PlaylistAddMore from '../img/add_circle_outline_white.svg';


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
const CriarNovaPlay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 5px;
  padding: 7px 15px 7px 15px;
  border: 1px solid gray;
  border-radius: 25px;
  background-color: #006261;

  text-decoration: none;
  input {
    border: none;
    background-color: #006261;
    text-decoration: none;
    box-sizing: border-box;
    outline: 0;
    box-shadow: 0;
    color: #fff;
    width: 100%;
  }
  input::placeholder {
    color: #fff;
  }
  img {
    height: 30px;
    margin-left: 10px;
  }
  button {
    margin-left: 10px;
  }
  img:hover {
    filter: invert(85%); 
  }
  img:active {
    filter: invert(85%);
  }

`

class CriarPlaylist extends React.Component {
  state = {
    name: '',
  }

  createPlaylist = async() => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
    const body = {
      name: this.state.name
    }
    try {
      const response = await axios.post(url, body, {
        headers: {
          "Authorization": 'guilherme-correa-banu'
        }
      })
      console.log(response.data)
      console.log('deu certo!')
      this.setState({name: ""})

    } catch (error) {
      console.log(error.response)
      console.log('deu rum!') 
    }
  }
  onChangeNome = (e) => {
    this.setState({name: e.target.value})
  }

  render(){
    return (
      <ContainerPlaylist>
        <Titulo>
          <img src={PlaylistAdd} alt='Criar Playlist'/><h2>Criar uma playlists</h2>
        </Titulo>
        <CriarNovaPlay>
          <input
            type='text'
            placeholder='Digite o nome da Playlist' 
            value={this.state.name}
            onChange={this.onChangeNome}
          />
          <img
            alt='Adicionar Playlist'
            src={PlaylistAddMore}
            onClick={this.createPlaylist}
          />
        </CriarNovaPlay>
      </ContainerPlaylist>
    )
  }
}
export default CriarPlaylist