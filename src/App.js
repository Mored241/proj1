import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {

  return (
    <>
        <Header/>
        <Main/>
        <Footer/>
    </>
  )

}


export default App;
