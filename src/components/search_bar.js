import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render () {   
        return (    
            // this.state.term = event.target.value // Bad!!
        <div>                    
            <input onChange= { event => this.setState({ term: event.target.value })} />
            <br/>
            Value of the input: { this.state.term }
        </div>
        )  
    }
}

export default SearchBar;