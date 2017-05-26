// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/PageLayout/PageLayout';
import {
  LoginRouter,
  RegistrationRouter,
  ForgotPasswordRouter
} from '../modules/LoginAndRegister/router';
import {
  DashboardRouter
} from "../modules/Dashboard/router";
import {
  JobSheetRouter
} from "../modules/JobSheet/router";
/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : () => null,
    childRoutes : [
      LoginRouter(store),
      RegistrationRouter(store),
      ForgotPasswordRouter(store),
      //=====Dashboard===========
      DashboardRouter(store),
      //=====JobSheet============
      JobSheetRouter(store)
   ]
})


export default createRoutes
