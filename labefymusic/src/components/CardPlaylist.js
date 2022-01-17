import React from 'react';
import styled from 'styled-components';
import Delete from '../img/clear_white.svg'
import ReadMore from '../img/read_more_white.svg'

const ContainerItemPlaylist = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 5px;
    padding: 7px 15px 7px 15px;

    border: 1px solid gray;
    border-radius: 25px;
    background-color: #006261;
    color: #fff;
    span {
        flex-grow: 1;
    }
    img {
        height: 30px;
        margin-left: 10px;
    }
    img:hover {
        filter: invert(85%); 
    }
    img:active {
        filter: invert(85%);
    }
`
class CardPlaylist extends React.Component {
    render(){
        return ( <ContainerItemPlaylist>
            <span>{this.props.name}</span>
            <img 
                alt="Detalhes"
                src={ReadMore}
                onClick={() => this.props.listaMusicas(this.props.playlistId)}
            />
            <img 
                alt="Excluir"
                src={Delete}
                onClick={() => this.props.deletePlaylist(this.props.playlistId)}
            />
            
        </ContainerItemPlaylist>
        )
    }
}
export default CardPlaylist