import React from 'react';
import PropTypes from 'prop-types';
import './theme-switch.scss';
const ThemeSwitch = ({ theme, changeTheme }) => (
	<div className='theme-switch'>
		<label htmlFor='light-theme'>Light</label>
		<input type='radio' name='theme' value='light' id='light-theme' />
		<label htmlFor='dark-theme'>Dark</label>
		<input type='radio' name='theme' value='dark' id='dark-theme' />
	</div>
);
ThemeSwitch.defaultProps = {

};
ThemeSwitch.propTypes = {

};
export default ThemeSwitch;
