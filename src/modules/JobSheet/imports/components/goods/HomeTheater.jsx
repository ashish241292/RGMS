import React, {Component} from 'react';
import PropTypes from "prop-types";
import Toggle from 'material-ui/Toggle';

export default class HomeTheater extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row" style={{margin:20}}>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Chanel 2.1"
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Chanel 4.1"
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Chanel 5.1"
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Tower (complete set)"
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Tower (Only master)"
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Tower (Only slave)"
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Hi-FI System"
          />
        </div>
      </div>
    );
  }
}
