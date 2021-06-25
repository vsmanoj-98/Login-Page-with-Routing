import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee_list: [],
      isLoaded: false
    }
  }
   componentDidMount() {    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          employee_list :json, 
          isLoaded: true,
        })
      }).catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { isLoaded, employee_list } = this.state;
    
    if (!isLoaded)
        return <div>Loading...</div>;
    else{
     
    return (
      <div className="App">
        <TableContainer  component={Paper}>
          <Table  aria-label="simple table">
            <TableHead>
              <TableRow >
                <TableCell>Employee Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">city</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employee_list.map((item) => (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell align="right">{item.email}</TableCell>
                  <TableCell align="right">{item.phone}</TableCell>
                  <TableCell align="right">{item.address.city}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )}; }          
};

export default App;
