import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import { connect } from 'react-redux'
import { getTodos } from './actions'
import { getLists } from './actions/lists'
import Header from './components/header'
import mytodolists from './containers/mytodolists'
import myTodos from './containers/mytodos'
import SignUp from './components/signup'
import Login from './components/login'


class App extends Component {
	componentDidMount() {
		//this.props.getTodos()
		this.props.getLists()
	}
	componentDidUpdate(prevProps) {
		if (prevProps.list !== this.props.list) {
			this.props.getLists(this.props.list)
		}
	}
	render() {
		return (
			<div className='App'>
				<Header />
				<Switch>
					<Route path='(/|/todos)' component={myTodos} />
					<Route path='/lists/:list([0-9]+)/todos' component={myTodos} />
					<Route path='/lists' component={mytodolists} />
					{/* <Route path="/signup" render={()=><div>SignUp</div>} />
					<Route path="/login" render={()=><div title="Login">Login</div>} /> */}
          <Route path="/login" component={Login} /> 
					<Route path="/signup" component={SignUp} />
				</Switch>
			</div>
		)
	}
}

export default connect(
	null,
	{ getTodos, getLists }
)(App)
