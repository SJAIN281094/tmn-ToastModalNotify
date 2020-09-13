import {css} from 'styled-components';

const Styles = css`
	position: absolute;
	width: 100vw;
	box-sizing: border-box;
	justify-content: center;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
	
	display: ${props => props.display || 'flex' };

    ${props => props.verticalAlign !== "bottom" && `top: 25px;` }
    ${props => props.verticalAlign === "top" && `top: ${props.top ? props.top : '25px'};` }
    ${props => props.verticalAlign === "bottom" && `bottom: ${props.bottom ? props.bottom : '25px'};`}
    ${props => props.horizontalAlign === "left" && `justify-content: flex-start;` }
    ${props => props.horizontalAlign === "center" && `justify-content: center;` }
    ${props => props.horizontalAlign === "right" && `justify-content: flex-end;` }

`;

export default Styles;

