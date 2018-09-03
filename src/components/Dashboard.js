import React, { Component } from 'react'
import { connect } from 'react-redux'


class Dashboard extends React.Component {
  render(){
  	console.log(this.props)
    return (
    	<div>
    		Dashboard
    	</div>
    )
  }
}

// ANSWERS is an arrray of all the polls that user has answered
// that is just the id though;
// ANSWERED is where me map over the array referencing poll by its ID
// .Sort method sorts it by timestamp
// UNANSWERED returns us an array filled with ID's of every poll
// From there we use filter to say that if specific ID is not included in answers...

function mapStateToProps ({ authedUser, polls, users }) {
  const answers = users[authedUser].answers
  const answered = answers.map((id) => polls[id])
    .sort((a,b) => b.timestamp - a.timestamp)

  const unanswered = Object.keys(polls)
    .filter((id) => !answers.includes(id))
    .map((id) => polls[id])
    .sort((a,b) => b.timestamp - a.timestamp)


  return {
    answered,
    unanswered
  }
}

export default connect(mapStateToProps)(Dashboard)