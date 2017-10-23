import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions';

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

function handlers(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
      };

      this.handleUsernameChanged = this.handleUsernameChanged.bind(this);
      this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
      this.submitForm = this.submitForm.bind(this);
    }

    componentDidMount() {

    }

    handleUsernameChanged(event) {
      this.setState({
        username: event.target.value.trim()
      });
    }

    handlePasswordChanged(event) {
      this.setState({
        password: event.target.value.trim()
      });
    }

    submitForm(event) {
      event.preventDefault();
      const username = this.state.username;
      const password = this.state.password;
      const creds = { username: username, password: password };
      this.props.loginUser(creds);
    }

    render() {
      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
          submitForm={this.submitForm}
          handleUsernameChanged={this.handleUsernameChanged}
          handlePasswordChanged={this.handlePasswordChanged}
        />
      );
    }
  };
}

export default compose(connect(mapStateToProps, mapDispatchToProps), handlers);
