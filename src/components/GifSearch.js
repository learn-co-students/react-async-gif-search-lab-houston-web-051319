import React from 'react'

export class GifSearch extends React.PureComponent{

    state={
        queary: ""
    }

    render(){
        return(
            <form onSubmit={(e)=>{
                e.preventDefault()
                this.props.handleSubmit(this.state.queary)
                this.setState({ queary: "" })
            }}>
                <div>
                    <input type="text" placeholder="Search Here" value={this.state.queary} onChange={(event)=> this.setState({queary:event.target.value})}/>
                </div>
                <input type="submit" className="btn btn-success"/>
            </form>
        )
    }
}