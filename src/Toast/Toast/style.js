import {css, keyframes} from 'styled-components';

const top = keyframes`
  from {
    top: -100vh;
  }

  to {
    top: 0;
  }
`;

const bottom = keyframes`
  from {
    bottom: -100vh;
  }

  to {
    bottom: 0;
  }
`;

const right = keyframes`
  from {
    right: -100vw;
  }

  to {
    right: 0;
  }
`;

const left = keyframes`
  from {
    left: -100vw;
  }

  to {
    left: 0;
  }
`;

const Styles = css`
	padding: 10px;
	position: relative;
	min-height: 40px;  
  max-width: 450px;
  min-width: 250px;
  margin: 0 15px;
	border-radius: 8px;	
	background-color: ${props => props.bgColor || "grey"};
	color: ${props => props.color || "#ffffff"};
	animation: ${props => props.slideTop == true &&  css`${top} 0.2s ease-out 1;`}
	${props => props.slideBottom == true &&  css`${bottom} 0.2s ease-out 1;`}
	${props => props.slideRight == true &&  css`${right} 0.2s ease-out 1;`}
	${props => props.slideLeft == true &&  css`${left} 0.2s ease-out 1;`}

	.toast-close{
		display: flex;
		justify-content:flex-end;
		cursor: pointer;
	}
`;
	
export default Styles;