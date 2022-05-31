import styled from "styled-components";

const HeaderBase = styled.header`
	flex: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.7em 0;
	background-color: tomato;

	nav {
		ul {
			display: flex;
		}

		li {
			list-style: none;
			margin-left: 2em;
		}
	}
`;

export default HeaderBase;
