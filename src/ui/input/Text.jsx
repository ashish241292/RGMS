import React from 'react';
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField';

export default class Text extends React.Component {
  render() {
    return (
      <TextField
        fullWidth={false}
        floatingLabelFixed={false}
        style={this.props.style || {fontSize: 14, width: "80%"}}
        underlineStyle={{borderColor:"rgb(66, 133, 244)"}}
        underlineDisabledStyle={{borderColor:"rgb(66, 133, 244)"}}
        underlineFocusStyle={{borderColor:"rgb(66, 133, 244)"}}
        floatingLabelFocusStyle={{color:"rgb(66, 133, 244)"}}
        floatingLabelShrinkStyle={{color:"rgb(66, 133, 244)"}}
        {...this.props}
      />
    );
  }
}

Text.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  hintText: PropTypes.string.isRequired,
  floatingLabelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
};
