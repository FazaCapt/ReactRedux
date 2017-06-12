import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBgblQNo8BnjDCDyJilHIFQiifytOu9JPA';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
    console.log(data);
});

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