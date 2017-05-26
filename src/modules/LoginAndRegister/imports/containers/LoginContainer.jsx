import React, {PropTypes} from 'react';
import Login from "../components/Login.jsx"

export default class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

LoginContainer.propTypes = {
};
