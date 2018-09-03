import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'


//handleInitialData action creator is reponsible for
// fetching initial data of application && calling

class App extends React.Component {
	componentDidMount(){
		this.props.dispatch(handleInitialData())
	}

  render() {
    return (
      <div>
      	{this.props.loading === true
      		? null
      		: <Dashboard />}
      </div>
    )
  }
}

function mapStatetoProps({ authedUser }) {
	return {
		loading: authedUser === null
	}
}

export default connect(mapStatetoProps)(App)
