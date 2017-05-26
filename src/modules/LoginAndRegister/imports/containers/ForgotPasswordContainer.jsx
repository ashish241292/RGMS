import React, {PropTypes} from 'react';
import ForgotPassword from "../components/ForgotPassword.jsx"

export default class ForgotPasswordContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ForgotPassword />
      </div>
    );
  }
}
