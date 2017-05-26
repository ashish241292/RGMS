import React, {PropTypes} from 'react';
import { Link } from 'react-router'
import Paper from 'material-ui/Paper';
import {Text} from "ui/input";
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';

const style = {
  height: "100%",
  width: "100%",
  marginTop: "2%",
  textAlign: 'center',
  display: 'inline-block',
};
export default class Registration extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        orgination:"",
        useraName:"",
        password:"",
        showLoader: false,
      }
      this.error = {
        orgErr:"",
        usrErr:"",
        passErr:""
      }
  }

  onLogin(event){

  }

  render() {
    let {showLoader} = this.state
    return (
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <Paper style={style} zDepth={2} rounded={false} >
            {showLoader?<LinearProgress mode="indeterminate" />:null}
            <div style={{marginTop:"5%"}}>
              <h4>R.G.M.S. <small style={{color:"#a3a3a3"}}><i>(powered by: New Priti Elec.)</i></small></h4>
            </div>
            <div style={{marginTop:"3%"}}>
              <h3>Sign up</h3>
              <h6>create your RGMS Account</h6>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <Text
                  name="orgination"
                  type="text"
                  errorText={this.error.orgErr}
                  hintText="eg. ABC pvt. ltd"
                  floatingLabelText="Organitation"
                  onChange={(event, text) => {
                    if(text != ""){
                      this.setState({orgination: text});
                    }
                  }}
                />
              </div>
              <div className="col-sm-6">
                <Text
                  name="owner"
                  type="text"
                  errorText={this.error.orgErr}
                  hintText="Name of Owner"
                  floatingLabelText="Owner"
                  onChange={(event, text) => {
                    if(text != ""){
                      this.setState({owner: text});
                    }
                  }}
                />
              </div>
              <div className="col-sm-6">
                <Text
                  name="firstName"
                  type="text"
                  errorText={this.error.usrErr}
                  hintText="First Name"
                  floatingLabelText="First Name"
                  onChange={(event,text) => {
                    if(text != ""){
                      this.setState({firstName: text});
                    }
                  }}
                />
              </div>
              <div className="col-sm-6">
                <Text
                  name="lastName"
                  type="text"
                  errorText={this.error.usrErr}
                  hintText="Last Name"
                  floatingLabelText="Last Name"
                  onChange={(event,text) => {
                    if(text != ""){
                      this.setState({LastName: text});
                    }
                  }}
                />
              </div>
              <div className="col-sm-6">
                <Text
                  name="email"
                  type="text"
                  errorText={this.error.usrErr}
                  hintText="example@example.com"
                  floatingLabelText="Email"
                  onChange={(event,text) => {
                    if(text != ""){
                      this.setState({LastName: text});
                    }
                  }}
                />
              </div>
              <div className="col-sm-6">
                <Text
                  name="phone"
                  type="text"
                  errorText={this.error.usrErr}
                  hintText="Phone no#"
                  floatingLabelText="Phone no#"
                  onChange={(event,text) => {
                    if(text != ""){
                      this.setState({LastName: text});
                    }
                  }}
                />
              </div>
              <div className="col-sm-6">
                <Text
                  name="mobile"
                  type="text"
                  errorText={this.error.usrErr}
                  hintText="mobile no#"
                  floatingLabelText="mobile no#"
                  onChange={(event,text) => {
                    if(text != ""){
                      this.setState({LastName: text});
                    }
                  }}
                />
              </div>
              <div className="col-sm-6">
                <Text
                  name="address"
                  type="text"
                  errorText={this.error.usrErr}
                  hintText="Address"
                  floatingLabelText="Address"
                  onChange={(event,text) => {
                    if(text != ""){
                      this.setState({LastName: text});
                    }
                  }}
                />
              </div>
              <div className="col-sm-6">
                <Text
                  name="password"
                  type="password"
                  errorText={this.error.passErr}
                  hintText="Enter Password"
                  floatingLabelText="Password"
                  onChange={(event,text) => {
                    if(text != ""){
                      this.setState({password: text});
                    }
                  }}
                />
              </div>
              <div className="col-sm-6">
                <Text
                  name="cpassword"
                  type="password"
                  errorText={this.error.passErr}
                  hintText="Re-enter Password"
                  floatingLabelText="Re-enter Password"
                  onChange={(event,text) => {
                    if(text != ""){
                      this.setState({cpassword: text});
                    }
                  }}
                />
              </div>
              <div className="col-sm-12">
                <Text
                  style={{width:"90%"}}
                  name="description"
                  type="text"
                  errorText={this.error.orgErr}
                  hintText="Description"
                  floatingLabelText="Description"
                  onChange={(event, text) => {
                    if(text != ""){
                      this.setState({owner: text});
                    }
                  }}
                />
              </div>
            </div>
            <div className="row" style={{marginTop:"5%"}}>
              <div className="col-sm-6">
                <div style={{fontSize:14, padding:10}}>
                  <Link to='/login' activeClassName='active'>Already have an account?</Link>
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
        <div className="col-sm-3">
          <div style={{
            float:"right",
            margin:30
          }}>
            <RaisedButton
              label="Sign In"
              secondary={true}
              href="/login"
            />
          </div>
        </div>
      </div>
    );
  }
}
