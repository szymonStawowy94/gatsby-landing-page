import React, {useEffect} from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import TempImage from '../../images/temp-img.png'

const StyledModuleWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: grey;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	background-size: cover;
	background-position: center;
	background-image: url(${({bgImg}) => bgImg});
`

const StyledFrame = styled.div`
	width: 100vw;
	height: 100vh;
	transition: border 2s ease-in-out;
	border: 500px solid grey;
`

const ExpandingBanner = () => {
	useEffect(() => {
		gsap.fromTo('#frame', {
			border: '500px solid grey',
			delay: 1,
		}, {
			border: '0 solid grey',
		})
	}, [])

	return (
		<StyledModuleWrapper bgImg={TempImage} >
			<StyledFrame  id='frame'/>
		</StyledModuleWrapper>
	);
};

export default ExpandingBanner;