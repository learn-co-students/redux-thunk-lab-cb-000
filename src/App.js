import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'

import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
import CatList from "./CatList";

class App extends Component {

  componentDidMount() {
    this.props.fetchCats()
  };

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        {this.props.catPics ? (
          <CatList catPics={this.props.catPics} />) : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("current props")
  console.log(state)
  return {
    catPics: state.cats.pictures
  }
}

// const mapDispatchToProps = (dispatch) ={
//   return {
//     fetchCats: () => { dispatch(fetchCats()) }
//   }
// }

export default connect(mapStateToProps, { fetchCats })(App)
