import styled from "styled-components"
import {
	setRem,
	media,
	setColor,
	setFont,
	setLetterSpacing,
} from "../../styles"

export const Nav = styled.nav`
	padding: 0 20px;
	min-height: 10vh;
	height: 60px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`

export const Menu = styled.ul`
	list-style: none;
	display: none;
	margin: 0;
	${media.tablet`
		display: flex;
		width:100%;
		justify-content: center;
		align-items: center;
		a {
			text-decoration: none;
			color: ${setColor.mainBlue};
			${setFont.paragraph};
			${setLetterSpacing(1)};
			font-size: ${setRem(18)};
			font-weight: 700;
			padding-right: 20px;
			:hover {
				text-decoration: underline;
			}
		}
	`};
`

export const NavIcon = styled.button`
	background: none;
	cursor: pointer;
	border: none;
	outline: none;

	${media.tablet`
		display: none;
	`};
`

export const Line = styled.span`
	display: block;
	border-radius: 50px;
	width: 2rem;
	height: 4px;
	margin: 0.4rem;
	background-color: ${setColor.mainBlue};
	transition: width 0.6s linear;

	:nth-child(2) {
		width: ${props => (props.open ? "0.7rem" : "1.4rem")};
	}
`

export const Overlay = styled.div`
	position: absolute;
	height: ${props => (props.open ? "100%" : 0)};
	width: 100vw;
	opacity: 0.9;
	background: ${setColor.bgColor};
	transition: height 0.4s linear;
	${media.tablet`
		display: none;
		`}
`

export const OverlayMenu = styled.ul`
	list-style: none;
	width: 100%;
	text-align: center;
	display: flex;
	flex-direction: column;
	position: absolute;
	left: 50%;
	top: 45%;
	transform: translate(-50%, -50%);
	max-height: 100%;
	a {
		text-decoration: none;
		opacity: ${props => (props.open ? 1 : 0)};
		transition: opacity 0.1ms linear ${props => (props.open ? "0.4s" : "0.1s")};
		color: ${setColor.mainBlue};
		padding: ${setRem(10)};
		${setFont.paragraph};
		${setLetterSpacing(2)};
		font-size: ${setRem(25)};
		font-weight: 700;
		margin: 1em 0px;
		:hover {
			background-color: ${setColor.mainBlue};
			color: ${setColor.primaryWhite};
			width: 100%;
		}
	}
`
