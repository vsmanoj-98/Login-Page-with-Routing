import React from 'react'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            err: ''
        }
    }
    form1=(e) => {
        e.preventDefault();
        this.props.history.push('/form1');
    }
    form2=(e) => {
        e.preventDefault();
        this.props.history.push('/form2');
    }
    render(){
    return (
        <div>
            <button onClick={this.form1.bind(this)}>Form1</button>
            <button onClick={this.form2.bind(this)}>Form2</button>
        </div>
    )
}
}

export default Home;
