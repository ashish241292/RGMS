import React, {Component} from 'react';
import PropTypes from "prop-types";
import Toggle from 'material-ui/Toggle';

export default class Games extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row" style={{margin:20}}>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="8-bit"
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="PS-1"
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="PS-2"
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="PS-3"
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="PS-4"
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="X-Box 360"
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="X-Box One"
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="PSP"
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Hand game(8-bit)"
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Hand game(16-bit)"
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Memory Stick(PSP)"
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Memory Card(PS-2)"
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Controller"
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Adapter"
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="PS-2 Combo"
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="HDD"
          />
        </div>
      </div>
    );
  }
}
