// TODO: add constants.js

import React, { useState } from "react"
import { Link } from "gatsby"
import {
	Nav,
	Menu,
	Overlay,
	OverlayMenu,
	NavIcon,
	Line,
} from "../globals/Navbar"

const Header = () => {
	const [toggle, toggleNav] = useState(false)
	return (
		<>
			<Nav>
				<Menu>
					<Link to="#about">Обо мне</Link>
					<Link to="#therapy">Виды консультации</Link>
					<Link to="#consultation">Первая консультация</Link>
					<Link to="#faq">FAQ</Link>
					<Link to="#contact">Свяжитесь со мной</Link>
				</Menu>
				<NavIcon onClick={() => toggleNav(!toggle)}>
					<Line open={toggle} />
					<Line open={toggle} />
					<Line open={toggle} />
				</NavIcon>
			</Nav>
			<Overlay open={toggle}>
				<OverlayMenu open={toggle}>
					<Link to="#about">Обо мне</Link>
					<Link to="#therapy">Виды консультации</Link>
					<Link to="#consultation">Первая консультация</Link>
					<Link to="#faq">FAQ</Link>
					<Link to="#contact">Свяжитесь со мной</Link>
				</OverlayMenu>
			</Overlay>
		</>
	)
}

export default Header
