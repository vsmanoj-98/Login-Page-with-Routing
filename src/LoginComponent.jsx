import React from 'react';

class LoginComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            err: ''
        }
    }
    login(e) {
        e.preventDefault();
        var username = e.target.elements.username.value;
        var password = e.target.elements.password.value;
        if ((username === "Manoj" && password === "123") || (username === "Mukesh" && password === "123")||(username === "Baburao" && password === "123")||(username === "Sowjanya" && password === "123")) {
            this.props.history.push('/welcome/:username' + username);
            localStorage.setItem('username', username);
        }
        else {
            this.setState({
                err: 'Please check User Name and Password'
            })
        }
    }
    render() {
        let format = {
            color: "red"
        }
        let fields = {
            marginLeft: '20%',
            marginTop :'10%'
        }
        let fields1 = {
            marginLeft: '5%',
          
        }
        return (

            <div>
                
                <form method="post" style={fields} onSubmit={this.login.bind(this)}>
                    <h3 >Login Page</h3><br />
                    username     <input style={fields1} type="text" name="username" /><br /><br />
                    password     <input style={fields1} type="password" name="password" /><br />
                    <span style={format}>{this.state.err !== '' ? this.state.err : ''}</span><br />
                    <input style={{marginLeft:'12%'}} type="submit" value="Login" />
                </form>
            </div>
        )
    }
}
export default LoginComponent;