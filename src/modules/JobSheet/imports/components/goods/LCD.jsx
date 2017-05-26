import React, {Component} from 'react';
import PropTypes from "prop-types";
import Toggle from 'material-ui/Toggle';

export default class LCD extends React.Component {
  constructor(props) {
    super(props);
  }

  handleToggle = (event, value, field)=>{
    let {dataList} = this.props;
    dataList[field] = value?"Yes":"No";
  }

  render() {
    return (
      <div className="row" style={{margin:20}}>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="LCD/LED Set"
            onToggle={(event, value)=>this.handleToggle(event, value, "led")}
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Remoat"
            onToggle={(event, value)=>this.handleToggle(event, value, "remoat")}
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Full Stand"
            onToggle={(event, value)=>this.handleToggle(event, value, "full_stand")}
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Half Stand"
            onToggle={(event, value)=>this.handleToggle(event, value, "half_stand")}
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Power Cord"
            onToggle={(event, value)=>this.handleToggle(event, value, "Power_cord")}
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Power Supply"
            onToggle={(event, value)=>this.handleToggle(event, value, "power_supply")}
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Motherboard only"
            onToggle={(event, value)=>this.handleToggle(event, value, "mboard")}
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Motherboard + Key"
            onToggle={(event, value)=>this.handleToggle(event, value, "mboard_key")}
          />
        </div>
      </div>
    );
  }
}

LCD.propTypes = {
};
