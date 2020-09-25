import React from 'react'
import { Route } from 'react-router'
import Layout from '.././layout/Layout'
import Home from '.././pages/Home'
import UserManagement from '.././pages/UserManagement'
import CardForm from '.././pages/Card'
import LoginForm from '../pages/Login'
import ForgetPassword from '../pages/ForgetPassword'
import SignUp from '../pages/SignUp'
import CreateProject from '../pages/CreateProject'

export default () => (
  // <div>
  //   <Route  path="/loginUi" component={LoginForm} />
  // </div>
  <Layout>
    <Route exact path="/" component={Home} />
    <Route path="/userManagement" component={UserManagement} />
    <Route path="/card" component={CardForm} />
    <Route  path="/loginUi" component={LoginForm} />
    <Route path="/forgetPass" component={ForgetPassword}/>
    <Route path="/signUp" component={SignUp}/>
    <Route path="/createProject" component={CreateProject}/>
  </Layout>
);
