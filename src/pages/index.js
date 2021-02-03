import React from "react"
import Layout from "../components/globals/Layout"
import GlobalStyle from "../components/globals/GlobalStyle"
import "bootstrap/dist/css/bootstrap.min.css"

export default () => {
	return (
		<React.Fragment>
			<GlobalStyle />
			<Layout />
		</React.Fragment>
	)
}
