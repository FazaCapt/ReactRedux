import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBgblQNo8BnjDCDyJilHIFQiifytOu9JPA'

// Create a new component. this component should produce
// Some HTML

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
    
}


// Take this component's generates HTML and put it 
// on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));