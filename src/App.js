import React, {useState} from 'react';

import Background from './components/Background';
import Search from './components/Search';
import Results from './components/Results'
import Popup from './components/Popup'
import Alert from './components/Alert.js'

import initializer from './util/initializer'



function App() {

  const apiCall = 'http://www.omdbapi.com/?apikey=2744f713';

  const [state, setState] = useState({
    s:"",
    results: initializer,
    selected: {},
    validSearch: 1
  });


  //function called when something is typed
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }



  //function called everytime a search is requested
  const searchGo = document.querySelector('.search-go')
  const search = (e) => {

    if(e.key === 'Enter' || e.target === searchGo) {

      fetch(`${apiCall}&s=${state.s}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)

        if(data.Response == "False") {
          setState(prevState =>{
            return{...prevState, validSearch: 0}
          })
        }else {
          setState(prevState => {
            return{...prevState, results: data.Search, validSearch: 1}
          })
        }
      })
    }
  }

//function called when a result is clicked
  const openPopup = id => {
    fetch(`${apiCall}&i=${id}`)
    .then(response => response.json())
    .then(data => {
      
      setState(prevState => {
        return{...prevState, selected: data}
      })
    })
  }


  //function called when the close button is clicked
  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  //function called after the alert has been up for 2 sec
  const alertClose = () => {
    setTimeout(function(){
      setState(prevState => {
        return{ ...prevState, validSearch: 1}
      })
    }
     , 2000)
  }

  

  return (
    <div>
      <Background />
      <Search handleInput={handleInput} search={search} />

      {(!state.validSearch) ? <Alert alertClose={alertClose} /> : false}

      <Results results={state.results} openPopup={openPopup}/>

      {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}

    </div>
  );
}

export default App;
