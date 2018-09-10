import React from 'react'
import IronImage from '../assets/ironhack-logo.svg';
import IronImage2 from '../assets/menu-top.svg';
import IronImage3 from '../assets/react-logo.svg';

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <div className="main">
          <nav className="nav">
            <img src={IronImage} alt="image" />
            <img src={IronImage2} alt="image" />
          </nav>
          <div className="background">
            <img src={IronImage3} alt="image" />
          </div>
          <div className="main-child">
            <h1>Say hello to ReactJS</h1><p>You will learn a Frontend framework from scratch, to becoe a Ninja Developer.</p>
            <button >Awesomes</button></div>
        </div>
        <div className="second">
          <div className="second-child">
            <h3>Declarative</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, commodi!</p>
          </div>
          <div className="second-child">
            <h3>Declarative</h3>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, facilis?</p>
          </div>
          <div className="second-child">
            <h3>Declarative</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, commodi!</p></div>
          <div className="second-child">
            <h3>Declarative</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, commodi!</p></div>

        </div>

      </div>

    )
  }
}


export default Application