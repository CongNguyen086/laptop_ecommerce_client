import React, { useEffect, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import capitalize from 'lodash/capitalize';

import { axiosInstance } from '../../axios';
import actions from '../../redux/actions';
import selectors from '../../redux/selectors';
// Router Components
import RouterConfig from '../navigation/RouterConfig';
import AuthenRoute from '../navigation/AuthenRoute';
// Render Components
import Login from '../screens/Login';
import TopHeader from '../components/TopHeader';

import './Layout.scss';

function CustomerLayout(props) {
  const { categoryList, setCategoryList } = props;

  const getCategoryMenu = useCallback(async () => {
    const response = await axiosInstance.get('/category/all');
    const categories = response.data;
    setCategoryList(categories.map((category) => ({
      text: capitalize(category.name),
      url: `/product/${category.name}`,
      onClick: () => { },
    })));
  }, []);

  useEffect(() => {
    getCategoryMenu();
  }, [getCategoryMenu]);

  const renderNonAuthenComponent = (route, index) => {
    const { component: Component, pageTitle, path, exact } = route;
    const renderComponent = () => (
      path === '/login' ? (
        <Login />
      ) : (
        <>
          <TopHeader categoryMenu={categoryList} />
          <div className='Layout__container'>
            <Component
              {...props}
              pageTitle={pageTitle}
            />
          </div>
        </>
      )
    );
    return <Route
      key={index}
      exact={exact}
      path={path}
      render={(props) => {
        window.scrollTo(0, 0);
        return renderComponent(props);
      }}
    />
  };

  return (
    <Switch>
      {RouterConfig.map((route, i) => {
        if (route.auth) {
          return <AuthenRoute key={i} {...route} />
        }
        return renderNonAuthenComponent(route, i);
      })}
    </Switch>
  );
}

const mapStateToProps = (state) => ({
  categoryList: selectors.getCategoryList(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCategoryList: (list) => dispatch(actions.setCategoryList(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerLayout);