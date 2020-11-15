import styled from 'styled-components';

export const CartDropdown = styled.div`
	position: absolute;
	width: 240px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 80px;
	right: 0;
	z-index: 5;	
`;

export const CartItems = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow: scroll;
`;

export const EmptyMessage = styled.span`
	font-size: 18px;
	margin: 50px auto;
`;