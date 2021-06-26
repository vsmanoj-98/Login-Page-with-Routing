import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';

const actions = [
  { label: "Btech", value: 1 },
  { label: "Mtech", value: 2 },
  { label: "Degree", value: 3 }
];

class Radio1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Manoj'
        }
    }
    componentDidUpdate(prevPros, prevState) {
        console.log('prevProps', prevPros)
        console.log('prevState', prevState)
        console.log('componentDidUpdate')
    }
    changeState() {
        this.setState({ name: 'sai' });
    }
    render() {
        return (
            <div className="App">
                <div className="container">
                <div className="row">
                    name :{this.state.name}<br />
                    <div className="col-sm-3">
                    <button onClick={this.changeState.bind(this)} >Update State</button><br/>
                    </div>
                </div><br/>
                 <div className="row">
                        <div className="col-sm-3">
                        <FormControl component="fieldset">
                                <FormLabel component="legend"><b>Gender</b></FormLabel>
                                <RadioGroup aria-label="gender" name="gender1">
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className="col-sm-6">
                        <Select options={actions}/>
                        </div>
                    </div>         
                 </div>
            </div>
        );
    }
}
export default Radio1;
