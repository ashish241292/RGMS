import React, {Component} from 'react';
import PropTypes from "prop-types";
import Toggle from 'material-ui/Toggle';

export default class Car extends Component {
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
            label="MP3"
            onToggle={(event, value)=>this.handleToggle(event, value, "mp3")}
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="DVD"
            onToggle={(event, value)=>this.handleToggle(event, value, "dvd")}
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Rareview"
            onToggle={(event, value)=>this.handleToggle(event, value, "rareview")}
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Roof-top"
            onToggle={(event, value)=>this.handleToggle(event, value, "rooftop")}
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Roof-top + DVD"
            onToggle={(event, value)=>this.handleToggle(event, value, "rooftop_dvd")}
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Dobul Den"
            onToggle={(event, value)=>this.handleToggle(event, value, "double_dane")}
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Sunvisor"
            onToggle={(event, value)=>this.handleToggle(event, value, "sunvisor")}
          />
        </div>
        <div className="col-sm-3" style={{border:"1px solid #a2a2a2"}}>
          <Toggle
            label="Base Beam/Tube"
            onToggle={(event, value)=>this.handleToggle(event, value, "base_beam")}
          />
        </div>
      </div>
    );
  }
}
