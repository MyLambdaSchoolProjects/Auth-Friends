import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      login: ""
    },
    isLoggedIn: false
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then(res => {
        console.log("response", res);
        const { data } = res;

        sessionStorage.setItem("token", data.payload);
        this.setState({ ...this.state, isLoggedIn: true });
      });
  };

  componentDidMount() {
    sessionStorage.getItem("token")
      ? this.setState({ ...this.state, isLoggedIn: true })
      : this.setState({ ...this.state, isLoggedIn: false });
  }

  render() {
    return (
      <div style={{width: '40%',margin: '0 auto'}}>
        <h2>{this.state.isLoggedIn ? 'Logged In!' : 'Please Login'}</h2>

        <form onSubmit={this.login} >
            <input 
                type='text'
                name='username'
                value={this.state.credentials.username}
                placeholder='Username'
                onChange={this.handleChange}/>
            <input 
                type='password'
                name='password'
                value={this.state.credentials.password}
                placeholder='Password'
                onChange={this.handleChange}/>
            <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
