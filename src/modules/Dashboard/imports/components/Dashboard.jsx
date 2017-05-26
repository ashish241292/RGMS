import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionDone from 'material-ui/svg-icons/action/done';
import ActionWork from 'material-ui/svg-icons/action/work';
import ActionWatchLater from 'material-ui/svg-icons/action/watch-later';
import ActionStore from 'material-ui/svg-icons/action/store';
import {BarChart, DoughnutChart, LineChart} from "./Charts.jsx";

const styles = {
  card:{
    height: 120,
    width: "100%",
    display: 'inline-block',
  }
}

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row" style={{marginTop:50}}>
        <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12">
          <div className="row">
            <div className="col-sm-3">
              <Paper style={styles.card}>
                <span style={{position:"relative", top:"15px", margin:20}}>
                  <Avatar size={70} backgroundColor="#BA68C8" icon={<ActionStore />} />
                </span>
                <span style={{fontWidth:500,fontSize:35}}>100</span> Items in total
              </Paper>
             </div>
            <div className="col-sm-3">
              <Paper style={styles.card}>
                <span style={{position:"relative", top:"15px", margin:20}}>
                  <Avatar size={70} backgroundColor="#5C6BC0" icon={<ActionWork />} />
                </span>
                <span style={{fontWidth:500,fontSize:35}}>2</span> Items in Progress
              </Paper>
             </div>
            <div className="col-sm-3">
              <Paper style={styles.card}>
                <span style={{position:"relative", top:"15px", margin:20}}>
                  <Avatar size={70} backgroundColor="#FF9800" icon={<ActionWatchLater />} />
                </span>
                <span style={{fontWidth:500,fontSize:35}}>10</span> Items in waiting
              </Paper>
            </div>
            <div className="col-sm-3">
              <Paper style={styles.card}>
                <span style={{position:"relative", top:"15px", margin:20}}>
                  <Avatar size={70} backgroundColor="#689F38" icon={<ActionDone />} />
                </span>
                <span style={{fontWidth:500,fontSize:35}}>40</span> Items in completed
              </Paper>
            </div>
          </div>
          <div className="row" style={{marginTop:20}}>
            <div className="col-sm-6">
              <Paper >
                <BarChart title="Total completed"/>
              </Paper>
             </div>
            <div className="col-sm-6">
              <Paper >
                <DoughnutChart title="Total in Pending"/>
              </Paper>
             </div>
          </div>
          <div className="row" style={{marginTop:20}}>
            <div className="col-sm-6">
              <Paper>
                <LineChart title="Total in Progress"/>
              </Paper>
             </div>
            <div className="col-sm-6">
              <Paper >
                <DoughnutChart title="Total Goods"/>
              </Paper>
             </div>
          </div>
          <div className="row" style={{marginTop:20}}>
            <div className="col-sm-6">
              <Paper>
                <LineChart title="Total in Progress"/>
              </Paper>
             </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
};
