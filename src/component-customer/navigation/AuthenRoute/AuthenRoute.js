import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import TopHeader from '../../commonComponents/TopHeader';

function AuthenRoute({
  component: Component, pageTitle, ...rest
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

export default connect(mapStateToProps)(AuthenRoute);
