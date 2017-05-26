import React, {Component} from 'react';
import PropTypes from "prop-types";
import Toggle from 'material-ui/Toggle';

export default class Computer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row" style={{margin:20}}>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Laptop"
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="CPU"
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Mouse"
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Keyboard"
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Moniter"
          />
        </div>
      </div>
    );
  }
}
