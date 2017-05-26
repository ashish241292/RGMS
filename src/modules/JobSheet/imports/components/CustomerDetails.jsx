import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text} from "ui/input";
import DatePicker from 'material-ui/DatePicker';

export default class CustomerDetails extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event, text, field)=>{
    let {dataList} = this.props;
    dataList[field] = text;
  }

  render() {
    return (
      <div className="row" style={{padding:20}}>
        <div className="col-sm-6">
          <h6>Job no#</h6> <strong>102</strong>
        </div>
        <div className="col-sm-6">
          <DatePicker
            hintText="Date"
            floatingLabelText="Date"
            textFieldStyle={{width:"100%"}}
            onChange={(event, text) => this.handleChange(event, text, "date")}
          />
        </div>
        <div className="col-sm-6">
          <Text
            name="firstname"
            type="text"
            hintText="Customer First Name"
            floatingLabelText="First Name"
            style={{width:"100%"}}
            onChange={(event, text) => this.handleChange(event, text, "firstname")}
          />
        </div>
        <div className="col-sm-6">
          <Text
            name="lastname"
            type="text"
            hintText="Customer Last Name"
            floatingLabelText="Last Name"
            style={{width:"100%"}}
            onChange={(event, text) => this.handleChange(event, text, "lastname")}
          />
        </div>
        <div className="col-sm-12">
          <Text
            name="address"
            type="text"
            hintText="Customer Address"
            floatingLabelText="Address"
            fullWidth={true}
            style={{width:"100%"}}
            onChange={(event, text) => this.handleChange(event, text, "address")}
          />
        </div>
        <div className="col-sm-6">
          <Text
            name="contact1"
            type="text"
            hintText="Customer Contact Number-1"
            floatingLabelText="Contact Number-1"
            style={{width:"100%"}}
            onChange={(event, text) => this.handleChange(event, text, "contaact1")}
          />
        </div>
        <div className="col-sm-6">
          <Text
            name="contact2"
            type="text"
            hintText="Customer Contact Number-2"
            floatingLabelText="Contact Number-2"
            style={{width:"100%"}}
            onChange={(event, text) => this.handleChange(event, text, "contact2")}
          />
        </div>
        <div className="col-sm-12">
          <Text
            name="fault"
            type="text"
            hintText="Fault in Goods"
            floatingLabelText="Fault"
            fullWidth={true}
            style={{width:"100%"}}
            onChange={(event, text) => this.handleChange(event, text, "fault")}
          />
        </div>
        <div className="col-sm-6">
          <DatePicker
            floatingLabelText="Date of Reciving"
            hintText="Date of Reciving"
            textFieldStyle={{width:"100%"}}
            onChange={(event, text) => this.handleChange(event, text, "reciving_date")}
          />
        </div>
        <div className="col-sm-6">
          <DatePicker
            hintText="Due Date"
            floatingLabelText="Due Date"
            textFieldStyle={{width:"100%"}}
            onChange={(event, text) => this.handleChange(event, text, "due_date")}
          />
        </div>
      </div>
    );
  }
}
