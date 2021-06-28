import React from 'react';

class WelcomeComponent extends React.Component {
    table() {
        this.props.history.push('/table');
    }
    radio() {
        this.props.history.push('/radio');
    }
    logout() {
        this.props.history.push('/');
    }
    render() {
        let fields = {
            marginLeft: '20%',
            marginTop :'10%'
        }
        return (
            <div>
                <div className="container" style={ fields}>
                    <h3>welcome <i>{localStorage.getItem("username")}</i></h3>
                    <div className="row">
                        <div className="col-sm-1">
                            <input type="button" value="Table" onClick={this.table.bind(this)} />
                        </div>
                        <div className="col-sm-1">
                            <input type="button" value="Radio" onClick={this.radio.bind(this)} />
                        </div>
                        <div className="col-sm-1">
                            <input type="button" value="Logout" onClick={this.logout.bind(this)} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WelcomeComponent;