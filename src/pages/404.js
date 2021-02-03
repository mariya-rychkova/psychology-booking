import React from "react"
import { Link } from "gatsby"

const error = () => {
	return (
		<div>
			<h2>Ouupsie, error</h2>
			<Link to="/">Go back to home</Link>
		</div>
	)
}

export default error
