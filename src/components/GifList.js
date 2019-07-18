import React from 'react'

export class GifList extends React.PureComponent{

    render(){
        return(
            <div>
                <ul>
                    {this.props.gifs.map( (gif,id) => <li key={id} ><img src={gif} alt="Gif"/></li> )}
                </ul>
            </div>
        )
    }
}