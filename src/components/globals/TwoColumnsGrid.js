import styled from "styled-components"
import { setRem, media } from "../../styles"

const TwoColumnsGrid = styled.div`
	.my-image {
		img {
			width: 100%;
			display: block;
		}
	}

	.about-image {
		display: none;
	}
	.my-text {
		margin-top: ${setRem(30)};
		margin-bottom: ${setRem(30)};
	}
	${media.desktop`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: ${setRem(32)};
		justify-items: stretch;
		align-items: stretch;
		.my-text {
			align-self: end;
    }
  `}
`
export default TwoColumnsGrid
