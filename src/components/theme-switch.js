import React from 'react';
import PropTypes from 'prop-types';
import './themeSwitch.scss';
import Icon from './icon';
const ThemeSwitch = ({ theme, onChange }) => (
	<div className='themeSwitch'>
		<label htmlFor='light-theme'>Light</label>
		<Icon name='sun' height='50px' width='50px' onChange={onChange} />
		<input type='radio' name='theme' value='light' id='light-theme' />
		<input type='radio' name='theme' value='dark' id='dark-theme' onChange={onChange} />
		<label htmlFor='dark-theme'>Dark</label>
		<Icon name='moon' height='50px' width='50px' />
	</div>
);
ThemeSwitch.defaultProps = {

};
ThemeSwitch.propTypes = {
	theme: PropTypes.oneOf(['light-theme', 'dark-theme'])
};
export default ThemeSwitch;
