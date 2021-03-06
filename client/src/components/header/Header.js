import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
    }
    this.logoutUser= this.logoutUser.bind(this);
  }

  logoutUser(event) {
    event.preventDefault();
    axios.post('/api/anglers/logout?access_token=' + localStorage.getItem("gillznskillzAT"))
      .then ((res) => {
        localStorage.removeItem("gillznskillzAT") 
        this.props.history.push('/');
     })
      .catch((error) => {
    })
  }

  render() {
    return (
      <header>
        <div className="container-fluid">
          <div className="row">
            <nav className="navbar navbar-default navbar-fixed-top">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <div className="navbar-brand" >
                    <Link to="/">
                      <img src="/gillznskills-icon.png" style={{width:30}} alt='A leaping fish filled with multi-colored glitter'/>
                        Gillz-N-Skillz
                    </Link>
                  </div>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown"><a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My Account <span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><Link to="/login">Login</Link></li>
                        <li><a href="" onClick={this.logoutUser.bind(this)}>Logout</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header> 
    );
  }
}

export default Header;
