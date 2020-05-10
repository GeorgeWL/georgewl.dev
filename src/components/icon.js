import PropTypes from 'prop-types';
import React from 'react';
import './icon.scss';
function getSvgFromName(name) {
	switch (name) {
		default:
			return 'nope'
			break;
	}
}
const Icon = ({ name, ...otherProps }) => {
	const icon = getSvgFromName(name)
	return (
		<div className='icon'>
			{React.cloneElement(icon, { ...otherProps })}
		</div>
	)
};
Icon.defaultProps = {
	fill: 'black',
	stroke: 'black'
};
Icon.propTypes = {
	name: PropTypes.string.isRequired,
	fill: PropTypes.string,
	stroke: PropTypes.string
};
export default Icon;
