import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CFade as AwareFade } from '@coreui/react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import routes from '../navigation/routes';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheLayout = () => {

  return (
    <div className="c-app c-default-layout">
      <SideBar/>
      <div className="c-wrapper">
        <Header/>
        <div className="c-body">
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.pageTitle}
                  render={props => {
                    return (
                      <AwareFade>
                        <route.component {...props} />
                      </AwareFade>
                    )
                  }} />
              )
            })}
            <Redirect from="/" to="/admin/products" />
          </Switch>
        </Suspense>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default TheLayout
