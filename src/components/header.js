import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ThemeSwitch from "./theme-switch"
const Header = ({ siteTitle, theme, changeTheme }) => (
	<header
		className='header'
		style={{
			marginBottom: `1.45rem`,
		}}
	>
		<nav
			style={{
				margin: `0 auto`,
				maxWidth: 960,
				padding: `1.45rem 1.0875rem`,
			}}
		>
			<ThemeSwitch theme={theme} onChange={changeTheme} />
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{
						textDecoration: `none`,
					}}
				>
					{siteTitle}
				</Link>
			</h1>
		</nav>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
	theme: PropTypes.oneOf(['light-theme', 'dark-theme']).isRequired,
	changeTheme: PropTypes.func.isRequired
}

Header.defaultProps = {
	siteTitle: ``,
}


export default Header
