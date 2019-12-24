import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

import * as actions from "actions";

const App = props => {
  const renderButton = () => {
    return (
      <>
        {props.auth ? (
          <button type="button" onClick={() => props.changeAuth(false)}>
            Sign Out
          </button>
        ) : (
          <button type="button" onClick={() => props.changeAuth(true)}>
            Sign In
          </button>
        )}
      </>
    );
  };

  const renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>{renderButton()}</li>
      </ul>
    );
  };
  return (
    <div>
      {renderHeader()}
      <Route path="/post" component={CommentBox} />
      <Route exact path="/" component={CommentList} />
    </div>
  );
};

const mapStateToProps = state => {
  const { auth } = state;

  return {
    auth
  };
};

export default connect(mapStateToProps, actions)(App);
