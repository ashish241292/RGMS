import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import CustomerDetails from "./CustomerDetails.jsx";
import GoodsDetails from "./GoodsDetails.jsx";
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';

export default class JobSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      loading:false,
      dataList: {},
      errorList: {},
    }
  }

  habdlePdfGeneration = () => {

  }

  handleSubmit = (event) => {
    console.log(this.state);
  }

  render() {
    return (
      <div style={{marginTop:50}}>
        <div className="row">
          <div className="col-sm-2 col-xs-2 col-md-2 col-lg-2">
          </div>
          <div className="col-sm-7 col-xs-7 col-md-7 col-lg-7" style={{marginLeft:"4%"}}>
            <Paper zDepth={2} style={{marginBottom:20, height:"100%", width:"100%",backgroundColor:"#fafafa"}}>
              <div style={{textAlign:"center",padding:20}}>
                <h1 style={{backgroundColor:"#e3e3e3",padding:5}}>Generate a new <i>job sheet</i></h1>
              </div>
              <CustomerDetails dataList={this.state.dataList} errorList={this.state.errorList}/>
              <Divider />
              <GoodsDetails dataList={this.state.dataList} errorList={this.state.errorList} />
              <div className="col-sm-12">
                <div style={{float:"right", margin:20}}>
                  <RaisedButton
                    label="Generate!"
                    primary={true}
                    onTouchTap={this.handleSubmit}
                  />
                </div>
              </div>
              {this.state.loading?<LinearProgress mode="indeterminate" />:null}
            </Paper>
          </div>
          <div className="col-sm-2 col-xs-2 col-md-2 col-lg-2">
          </div>
        </div>
      </div>
    );
  }
}

JobSheet.propTypes = {
};
