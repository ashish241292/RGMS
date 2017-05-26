import { injectReducer } from '../../store/reducers'
import  JobSheetContainer  from "./imports/containers/JobSheetContainer.jsx";

const JobSheetRouter =  (store) => ({
  path : '/jobsheet',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      //const reducer = require('./modules/counter').default
      injectReducer(store, { key: 'jobsheet', reducer:null })
      cb(null, JobSheetContainer)
  }, 'jobsheet')
  }
})

export {
  JobSheetRouter,
}
