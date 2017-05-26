import React, {PropTypes} from 'react';
import { Link } from 'react-router'
import Paper from 'material-ui/Paper';
import {Text} from "ui/input";
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';

const style = {
  height: "100%",
  width: "100%",
  marginTop: "20%",
  textAlign: 'center',
  display: 'inline-block',
};
export default class ForgotPasswords extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        orgination:"",
        useraName:"",
        showLoader: false,
      }
      this.error = {
        orgErr:"",
        usrErr:"",
      }
  }

  onLogin(event){

  }

  render() {
    let {showLoader} = this.state
    return (
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <Paper style={style} zDepth={2} rounded={false} >
            {showLoader?<LinearProgress mode="indeterminate" />:null}
            <div style={{marginTop:"5%"}}>
              <h4>R.G.M.S. <small style={{color:"#a3a3a3"}}><i>(powered by: New Priti Elec.)</i></small></h4>
            </div>
            <div style={{marginTop:"3%"}}>
              <h3>Forgot Password</h3>
            </div>
            <div>
              <Text
                name="orgination"
                type="text"
                errorText={this.error.orgErr}
                hintText="Name of Organitation "
                floatingLabelText="Organitation"
                onChange={(event, text) => {
                  if(text != ""){
                    this.setState({orgination: text});
                  }
                }}
              />
            </div>
            <div>
              <Text
                name="useraName"
                type="text"
                errorText={this.error.usrErr}
                hintText="Email"
                floatingLabelText="Email"
                onChange={(event,text) => {
                  if(text != ""){
                    this.setState({useraName: text});
                  }
                }}
              />
            </div>
            <div className="row" style={{marginTop:"5%"}}>
              <div className="col-sm-6">
                <div style={{fontSize:14, padding:10}}>
                  <Link to='/login' activeClassName='active'>Remember password?</Link>
                </div>
              </div>
              <div className="col-sm-6">
                <RaisedButton
                  label="Done!"
                  primary={true}
                  onTouchTap={this.onLogin.bind(this)}
                />
              </div>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}
