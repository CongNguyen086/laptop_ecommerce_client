import React, { useEffect } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import TopHeader from '../../components/TopHeader';

function AuthenRoute({
  component: Component, pageTitle, path, match, ...rest
}) {
  useEffect(() => {
    updatePageTitle();

    function updatePageTitle() {
      if (!pageTitle) {
        return;
      }
      window.document.title = pageTitle;
    }
  }, [pageTitle]);

  return (
    <Route
      {...rest}
      path={`${match.url + path}`}
      render={(props) => {
        if (currentUser.id) {
          return (
            <>
              <TopHeader categoryMenu={categoryList} />
              <Component {...props} />
            </>
          );
        }
        return (
          <Redirect
            exact
            to='/homepage'
          />
        );
      }}
    />
  );
}

const mapStateToProps = (state) => ({
  currentUser: selectors.getCurrentUser(state),
});

export default compose(
  connect(mapStateToProps),
  withRouter,
)(AuthenRoute);
