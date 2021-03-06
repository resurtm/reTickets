import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {loginUser} from 'actions/auth';
import LoginForm from './login-form';

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn,
    error: state.auth.loggingInError,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: ({email, password}) => {
      dispatch(loginUser(email, password));
    },
  };
};

const SigninPage = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm));

export default SigninPage
