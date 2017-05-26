import { injectReducer } from '../../store/reducers'
import  DashboardContainer  from "./imports/containers/DashboardContainer.jsx";

const DashboardRouter =  (store) => ({
  path : '/dashboard',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      //const reducer = require('./modules/counter').default
      injectReducer(store, { key: 'dashboard', reducer:null })
      cb(null, DashboardContainer)
  }, 'dashboard')
  }
})

export {
  DashboardRouter,
}
