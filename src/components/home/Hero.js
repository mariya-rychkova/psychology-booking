import React from "react"
import Section from "../globals/Section"
import TwoColumnsGrid from "../globals/TwoColumnsGrid"
import Title from "../globals/Title"
import HeroImg from "../../images/pink-rect.png"

const Hero = () => {
	return (
		<Section>
			<TwoColumnsGrid>
				<div className="my-image">
					<img src={HeroImg} alt="" />
				</div>
				<div className="my-text">
					<Title title="Lorem ipsum" />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
						incidunt ducimus, assumenda labore at blanditiis voluptates optio
						sapiente facere, quidem cum nihil nisi iusto inventore est nobis
						dolore eligendi pariatur!
					</p>
				</div>
			</TwoColumnsGrid>
		</Section>
	)
}

export default Hero
