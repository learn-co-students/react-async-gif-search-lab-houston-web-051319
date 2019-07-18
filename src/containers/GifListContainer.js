import React from 'react'
import { GifSearch } from '../components/GifSearch';
import { GifList } from '../components/GifList';

class GifListContainer extends React.Component{

    state={
        gifs: []
    }

    render(){
        return(
            <div>
                < GifSearch handleSubmit={this.handleSubmit} />
                < GifList gifs={this.state.gifs} />
            </div>
        )
    }

    componentDidMount(){
        fetch('http://api.giphy.com/v1/gifs/search?q=dolphin&api_key=dc6zaTOxFJmzC&rating=g')
        .then(res => res.json())
        .then(res => {
            this.setState({
                gifs: res.data.map((data)=> data.images.original.url)
            })
        })
    }

    handleSubmit = (queary)=>{
        fetch(`http://api.giphy.com/v1/gifs/search?q=${queary}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(res => {
            this.setState({
                gifs: res.data.map((data)=> data.images.original.url)
            })
        })
    }


}

export {GifListContainer}