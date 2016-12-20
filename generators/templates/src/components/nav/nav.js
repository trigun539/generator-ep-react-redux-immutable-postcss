import React, { Component } from 'react';
import styles               from './styles.css';

export default class Nav extends Component {

	render () {
		const { title, menuItems } = this.props;
		const menuItemsHTML = [];

		if (menuItems) {
			menuItems.forEach(x => {
				menuItemsHTML.push(<li><a href={ x.link }>{ x.text }</a></li>);
			});
		}

		return (
			<div className={ styles.nav }>
				<div className={ styles.brand }>
					<h1>{ title ? title : '' }</h1>
				</div>
				<ul className={ styles.menu }>
					{ menuItemsHTML }
				</ul>
			</div>
		);
	}

}
