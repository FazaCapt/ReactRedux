import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. this component should produce
// Some HTML

const App = () => {
    return <div>Hi!</div>;
}



// Take this component's generates HTML and put it 
// on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));