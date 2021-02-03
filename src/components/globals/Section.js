import styled from "styled-components"
import { setRem, media } from "../../styles"

const Section = styled.section`
	padding: ${setRem(25)};
	background: ${props => props.color || "#fffffe"};
	${media.tablet`
		padding: ${props => props.horizontalPadding || "4em"}
			${props => props.verticalPadding || "5em"};
	`}
`

export default Section
