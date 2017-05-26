import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import background from "../../../public/drawer_background1.jpg";
import {List, ListItem} from 'material-ui/List';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import ActionUpdate from 'material-ui/svg-icons/action/update';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionAccountBox from 'material-ui/svg-icons/action/account-box';
import ActionOpenInBrowser from 'material-ui/svg-icons/action/open-in-browser';

export default class NavigationDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  onTouchTap = ( path ) => {
    this.handleClose();
    this.props.router.push(path);
  }

  randomColor(user){
    var allowed = "ABCDEF0123456789", S = "#";
    while(S.length < 7){
      S += allowed.charAt(Math.floor((Math.random()*user.length)+1));
    }
    return S;
  }

  render() {
    let user = "Ashish Kumar";
    let avatarColor = this.randomColor(user);
    return (
      <div>
        <Drawer
          docked={false}
          width={270}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          disableSwipeToOpen={false}
          swipeAreaWidth={30}

        >
          <div style={{
            height:"22%",
            backgroundColor:"#a3a3a3",
            backgroundImage: `url("${background}")`,
          }}>
          <div style={{
            position:"relative",
            top:"10%",
            color: "#e3e3e3",
            marginLeft:"10px"
          }}>
            <h6>R.G.M.S. <small>By: New Priti Elec.</small></h6>
          </div>
          <div style={{
            position:"relative",
            color: "#e3e3e3",
            top:"20%",
            marginLeft:"10px"
          }}>
            <Avatar
              color={"#f2f2f2"}
              backgroundColor={avatarColor}
              size={50}
              >
                A
            </Avatar> {user}
          </div>
          </div>
          <Divider />
          <div style={{
            height:"72%",
          }}>
            <List>
              <ListItem onTouchTap={()=>this.onTouchTap("/dashboard")} primaryText="Dashboard" leftIcon={<ActionDashboard />} />
              <ListItem onTouchTap={()=>this.onTouchTap("/jobsheet")} primaryText="Generate Job Sheet" leftIcon={<FileFolder />} />
              <ListItem onTouchTap={()=>this.onTouchTap("/update_status")} primaryText="Update Status" leftIcon={<ActionUpdate />} />
              <ListItem onTouchTap={()=>this.onTouchTap("/view_Detail")} primaryText="View Goods Detail" leftIcon={<ActionInfo />} />
              <ListItem onTouchTap={()=>this.onTouchTap("/setting")} primaryText="Setting" leftIcon={<ActionSettings />} />
              <ListItem onTouchTap={()=>this.onTouchTap("/profile")} primaryText="Profile" leftIcon={<ActionAccountBox />} />
              <ListItem onTouchTap={()=>this.onTouchTap("/signout")} primaryText="Sign out" leftIcon={<ActionOpenInBrowser />} />
            </List>
          </div>
           <Divider />
          <div style={{
            height:"6%",
            backgroundColor:"#f3f3f3",
            fontSize:14,
            textAlign: "center",
            color:"#8282828"
          }}>
            <small><em>Developed bY:</em> <strong>Er. Ashish Kumar</strong></small><br/>
            <small><em>Copyright &copy; </em> {new Date().getFullYear()} at <strong><a href="http://anaghahub.io">Anaghahub.io</a></strong></small>
          </div>
        </Drawer>
      </div>
    );
  }
}

NavigationDrawer.propTypes = {
};
