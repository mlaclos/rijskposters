import React from 'react';
import ReactDOM from 'react-dom';

require('./scss/main.scss');
//or
//require('../css/main.css')

import {ArtSearcher} from './components/artsearcher.jsx';


class App extends React.Component {
   constructor(props){
     super(props);

   }
   render() {
     return (
         <div>
             <ArtSearcher />

         </div>
     )
   }
 }

document.addEventListener("DOMContentLoaded", function(){

  ReactDOM.render(
      <App />,
    document.querySelector('#app')
  )

})
