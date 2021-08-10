import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import SelectedBeast from './components/SelectedBeast';




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }



    this.setstate({
      show: true
    });
  


    handleClose = () => {
      this.setstate({
        show: false
      });
    }
  
  

  render() {

    return (
      <>
        <Header />
        <SelectedBeast show={this.state.show} handleClose={this.handleClose} />
        <Main />
        <Footer />


      </>

    );
  }
};




export default App;
