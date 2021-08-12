import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import SelectedBeast from './components/SelectedBeast';
// import horned from"./components/InfoArray.json"




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedBeast: {},
      show : false,

    }
  }

    showTheModal = (item) => {
      console.log("ddddddddddddddddd")
      // let hornBeast = horned.find((beastselected) => {
      //   if (beastselected.title === this.title) {
      //     return beastselected;

      //   }
      // });



      this.setState({
        clickedBeast:item,
        show: true,
       
      })


      
    }
    
          handleClose = () => {
            this.setState({
              clickedBeast:{},
              show: false,
             
    
            });
          }

    render() {

      return (

        <div>
          <Header />

          <Main showTheModal= {this.showTheModal}/>
          
          
          <SelectedBeast
            show={this.state.show}
            handleClose={this.handleClose}
            clickedBeast={this.state.clickedBeast}
          />
          <Footer />

        </div>


      );
    }
  }


  export default App;

  