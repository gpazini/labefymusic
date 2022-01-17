import React from 'react';
import styled from 'styled-components';
import Delete from '../img/delete_black.svg'

const HeaderMusic = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr 5fr 5fr 1fr ;
    column-gap: 5px;
    align-items: center;
    border-bottom: 1px solid #b2b2b2;
    color: #595959;
    padding: 5px;
    img {
        height: 30px;
        filter: invert(35%); 
    }
    img:hover {
        filter: invert(55%); 
    }
    img:active {
        filter: invert(55%);
    }
`
class CardMusic extends React.Component {
    render(){
        return (
            <HeaderMusic>
                <span>{this.props.counter}</span>
                <span>{this.props.name}</span>
                <span>{this.props.artist}</span>
                <audio controls='controls'>
                    <source src={this.props.url} type="audio/ogg" />
                </audio>
                <img src={Delete} alt='Deletar'
                    onClick={this.props.removeTrackFromPlaylist} />
            </HeaderMusic>
        )
    }
}
export default CardMusic