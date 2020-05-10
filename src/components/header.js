import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ThemeSwitch from "./theme-switch"

const Header = ({ siteTitle, theme, changeTheme }) => (
	<header
		style={{
			background: `rebeccapurple`,
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
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{
						color: `white`,
						textDecoration: `none`,
					}}
				>
					{siteTitle}
				</Link>
			</h1>
		</nav>
		<ThemeSwitch theme={theme} onChange={changeTheme} />
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
	theme: PropTypes.oneOf(['light', 'dark']).isRequired,
	changeTheme: PropTypes.func.isRequired
}

Header.defaultProps = {
	siteTitle: ``,
}


export default Header
