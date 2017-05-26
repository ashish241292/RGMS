import React from 'react'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
        {children}
      </div>
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
