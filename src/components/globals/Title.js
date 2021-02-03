import React from "react"
import styled from "styled-components"
import { setRem, setColor, setFont, setLetterSpacing } from "../../styles"

const Title = ({ className, title, center }) => {
	return <h3 className={className}>{title}</h3>
}

export default styled(Title)`
	font-size: ${setRem(34)};
	text-transform: capitalize;
	text-align: ${props => (props.center ? "center" : "left")};
	color: ${setColor.mainBlue};
	${setLetterSpacing(3)};
`
