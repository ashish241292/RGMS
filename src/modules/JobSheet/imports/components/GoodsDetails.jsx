import React, {Component} from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {LCD, Games, HomeTheater, Car, Computer} from "./goods";


const companyNames = ["Selet Company"].concat([
  "SONY",
  "SAMSUNG",
  "PANASONIC",
  "LG",
  "TRUE SOUND",
  "HYBON",
  "JVD",
  "AUDIOZ",
  "INTEX",
  "F&D",
  "I-BALL",
  "ZEBRONICS",
  "WORLDTECH",
].sort());

const itemTypes = ["Select Item Type"].concat([
  "GAME",
  "LCD",
  "LED",
  "HOME THEATER",
  "CAR ACCESSORIES",
  "COMPUTER",
].sort());

export default class GoodsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company:"Selet Company",
      itemType:"Select Item Type",
    }
  }

  handleChangeCompany = (event, index, value) => {
    this.setState({company:value});
    this.handleChange(value, "company");
  }

  handleChangeItemType = (event, index, value) => {
    this.setState({itemType:value});
    this.handleChange(value, "itemType");
  }

  handleChange = (value, field)=>{
    let {dataList} = this.props;
    dataList[field] = value;
  }

  _itemComponentrender(){
    const items = {
      "GAME": Games,
      "LCD": LCD,
      "LED": LCD,
      "HOME THEATER": HomeTheater ,
      "CAR ACCESSORIES": Car,
      "COMPUTER": Computer,
    }
    let Component = items[this.state.itemType];
    return <Component {...this.props}/>
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <span style={{margin:15}}><strong>Company:</strong></span>
          <DropDownMenu
            maxHeight={300}
            value={this.state.company}
            onChange={this.handleChangeCompany}
            style={{width:"100%"}}
            autoWidth={false}
            >
            {companyNames.map((company, key) => <MenuItem value={company} key={key} primaryText={`${company}`} /> )}
          </DropDownMenu>
        </div>
        <Divider />
        <div className="col-sm-12">
          <span style={{margin:15}}><strong>Item Type:</strong></span>
          <DropDownMenu
            maxHeight={300}
            value={this.state.itemType}
            onChange={this.handleChangeItemType}
            style={{width:"100%"}}
            autoWidth={false}
            >
            {itemTypes.map((item, key) => <MenuItem value={item} key={key} primaryText={`${item}`} /> )}
          </DropDownMenu>
        </div>
        <Divider />
        <div className="col-sm-12">
          {this.state.itemType !="Select Item Type"?this._itemComponentrender():null}
        </div>
      </div>
    );
  }
}
