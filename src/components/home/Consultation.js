import React from "react"
import { Link } from "gatsby"
import Section from "../globals/Section"
import Title from "../globals/Title"
import TwoColumnsGrid from "../globals/TwoColumnsGrid"

const Consultation = () => {
	return (
		<Section id="consultation">
			<Title title="Первая консультация" />
			<TwoColumnsGrid>
				<div>
					<p>
						Не следует, однако забывать, что дальнейшее развитие различных форм
						деятельности способствует подготовки и реализации форм развития.
						Повседневная практика показывает, что укрепление и развитие
						структуры обеспечивает широкому кругу (специалистов) участие в
						формировании дальнейших направлений развития. Равным образом рамки и
						место обучения кадров влечет за собой процесс внедрения и
						модернизации системы обучения кадров, соответствует насущным
						потребностям. Идейные соображения высшего порядка, а также начало
						повседневной работы по формированию позиции позволяет оценить
						значение модели развития.
					</p>
				</div>
				<div>
					<a href="https://cacac.simplybook.it">Book</a>
				</div>
			</TwoColumnsGrid>
		</Section>
	)
}

export default Consultation
