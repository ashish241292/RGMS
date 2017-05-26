import React, {PropTypes} from 'react';
import Registration from "../components/Registration.jsx"

export default class RegistrationContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Registration />
      </div>
    );
  }
}

RegistrationContainer.propTypes = {
};
