import React, { Component } from 'react';
import Nav                  from 'components/nav/nav';
import styles               from './styles.css';

export class App extends Component {

	render () {
		return (
			<div className={ styles.app }>
				<Nav />
			</div>
		);
	}

}
