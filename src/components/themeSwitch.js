import PropTypes from 'prop-types';
import React from 'react';
import './themeSwitch.scss';
const ThemeSwitch = ({ theme, onChange }) => (
	<div className='themeSwitch'>
		<strong>Light</strong>
		<label htmlFor="slider" class="switch" alt={`switch to ${theme === 'dark-theme' ? 'light-theme' : 'dark-theme'}`}>
			<input type="checkbox" onChange={onChange} checked={theme === 'dark-theme'} id="slider" />
			<span class="slider round"></span>
		</label>
		<strong>Dark</strong>
	</div>
)
ThemeSwitch.defaultProps = {

};
ThemeSwitch.propTypes = {
	theme: PropTypes.oneOf(['light-theme', 'dark-theme'])
};
export default ThemeSwitch;
