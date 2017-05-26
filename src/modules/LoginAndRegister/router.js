import { injectReducer } from '../../store/reducers'
import  LoginContainer  from "./imports/containers/LoginContainer.jsx";
import  RegistrationContainer  from "./imports/containers/RegistrationContainer.jsx";
import  ForgotPasswordContainer  from "./imports/containers/ForgotPasswordContainer.jsx";

const LoginRouter =  (store) => ({
  path : '/login',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      //const reducer = require('./modules/counter').default
      injectReducer(store, { key: 'login', reducer:null })
      cb(null, LoginContainer)
  }, 'login')
  }
})

const RegistrationRouter =  (store) => ({
  path : '/registration',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      //const reducer = require('./modules/counter').default
      injectReducer(store, { key: 'registration', reducer:null })
      cb(null, RegistrationContainer)
  }, 'registration')
  }
})

const ForgotPasswordRouter =  (store) => ({
  path : '/forgot_password',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      //const reducer = require('./modules/counter').default
      injectReducer(store, { key: 'forgot_password', reducer:null })
      cb(null, ForgotPasswordContainer)
  }, 'forgot_password')
  }
})


export {
  LoginRouter,
  RegistrationRouter,
  ForgotPasswordRouter,
}
