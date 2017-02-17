import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepOrange300 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange300,
  },
});

const style = { margin: 12 };

class RaisedButtonExampleSimple extends React.Component{

  constructor(props) {
    super(props);
    
  }

  render(){
    return(
      <MuiThemeProvider muiTheme={muiTheme}>  
        <RaisedButton label="Primary" primary={true} style={style} onClick={this.props.sendMessage} />
      </MuiThemeProvider>
    )
  }
};

export default RaisedButtonExampleSimple;