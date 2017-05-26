import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {NavigationDrawer} from "./index";

const RightMenu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    {props.menuItem.map((item, key)=>(
      <MenuItem key={key} primaryText={item.title} onTouchTap={item.onTouchTap} />
    ))}
  </IconMenu>
);

RightMenu.muiName = 'IconMenu';

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {route, menuItem} = this.props;
    let title = route.path.substr(1).charAt(0).toLocaleUpperCase() + route.path.substr(2);
    return (
      <div style={{position:"fixed", width:"98%", zIndex:2000}}>
        <div className="row">
          <AppBar
            zDepth={2}
            title={title}
            titleStyle={{fontSize:20, fontWeight:"700", textAlign:"center"}}
            showMenuIconButton={true}
            onLeftIconButtonTouchTap={(event) => { this.refs.drawer.handleToggle();}}
            iconElementRight={menuItem?<RightMenu menuItem={menuItem}/>:null}
          />
          <NavigationDrawer ref="drawer" {...this.props}/>
        </div>
      </div>
    );
  }
}
