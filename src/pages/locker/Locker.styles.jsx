import styled from "styled-components";

export const Container = styled.div`
	max-width: 700px;
	margin: 40px auto;
	background: #fff;
	border-radius: 12px;
	box-shadow: 0 2px 16px rgba(0,0,0,0.08);
	padding: 48px 32px 32px 32px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const Title = styled.h1`
	font-size: 40px;
	font-weight: 700;
	margin-bottom: 32px;
	text-align: center;
`;

export const SubTitle = styled.h2`
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 24px;
	text-align: left;
	width: 100%;
`;

export const LocationSelect = styled.div`
	width: 160px;
	padding: 5px 11px;
	border-radius: 50px;
	margin-bottom: 32px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid #D9D9D9;
	position: relative;
`;

export const Bottom = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 70px;
`;
