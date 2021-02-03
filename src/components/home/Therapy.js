import React from "react"
import Section from "../globals/Section"
import Title from "../globals/Title"
import Card from "./Card"

const Therapy = () => {
	return (
		<Section id="therapy" padding="3em">
			<Title title="therapy sessions"></Title>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
				voluptas fuga nesciunt provident quod repellat harum, quo ut
				reprehenderit. Nostrum nobis laborum eaque sit deleniti, perspiciatis
				amet voluptate non. Sunt mollitia qui accusamus et, voluptate, molestias
				perferendis beatae unde quae, veritatis est odit ab. Dignissimos, ea
				adipisci amet sed alias.
			</p>
			<div>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</Section>
	)
}

export default Therapy
