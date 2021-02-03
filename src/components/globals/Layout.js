import React from "react"
import Header from "../home/Header"
import Hero from "../home/Hero"
import About from "../home/About"
import Therapy from "../home/Therapy"
import Consultation from "../home/Consultation"
import Faq from "../home/Faq"
import Contact from "../home/Contact"
import Footer from "../home/Footer"

if (typeof window !== "undefined") {
	require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<Hero />
			<About />
			<Therapy />
			<Consultation />
			<Faq />
			<Contact />
			<Footer />
			{children}
		</>
	)
}

export default Layout
