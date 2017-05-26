import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dashboard from "../components/Dashboard.jsx"
import {NavigationBar} from "../../../../ui/navigation/index.js";


export default class DashboardContainer extends Component {
  constructor(props) {
    super(props);
  }
  menuItem(){
    return [
      {
        title:"Refresh",
        onTouchTap: () => {
          console.log("asdasdasdasdasdasd");
        }
      },
      {
        title:"Setting",
        onTouchTap: () => {
          console.log("asdasdasdasdasdasd");
        }
      },
      {
        title:"Sign out",
        onTouchTap: () => {
          console.log("asdasdasdasdasdasd");
        }
      },
    ]
  }
  render() {
    return (
    <div className="row">
      <div className="col-xs-12 col-xs-12 col-md-12 col-lg-12">
        <NavigationBar menuItem={this.menuItem.bind(this)()} {...this.props} />
      </div>
      <div className="col-xs-12 col-xs-12 col-md-12 col-lg-12">
        <Dashboard {...this.props} />
      </div>
    </div>);
  }
}

DashboardContainer.propTypes = {
};
