import React, {useEffect} from 'react';
import styled from 'styled-components';
import TempImage from '../../images/temp-img.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const StyledModuleContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-end;
	width: 100%;
	background-color: grey;
	height: 100vh;
`

const StyledImageWrapper = styled.div`
	height: 600px;
	width: 100%;
	position: relative;
	background-size: cover;
	background-position: center;
	background-image: url(${({bgImg}) => bgImg});
`

const StyledSideStraps = styled.div`
	position: absolute;
	top: 0;
	height: 100%;
	width: 20%;

	&.left {
		left: 0;
		background-color: grey;
		transform-origin: left;
	}
	&.right {
		right: 0;
		background-color: grey;
		transform-origin: right;
	}
	

`

const ExapndingVideo = () => {
	gsap.registerPlugin(ScrollTrigger);
	useEffect(() => {
		const imageWrapper = document.getElementById('image-wrapper');
		const leftStripe = document.getElementById('left-stripe');
		const rightStripe = document.getElementById('right-stripe');

		gsap.fromTo(leftStripe,{
				scaleX: '100%',
			},
			{
				scaleX: '0',
				scrollTrigger: {
					trigger: '#module-container',
					start: 'top top',
					end: '50%',
					markers: true,
					scrub: true,
				},
		});
		gsap.fromTo(rightStripe,{
				scaleX: '100%',
			},
			{
				scaleX: '0',
				scrollTrigger: {
					trigger: '#module-container',
					start: 'top top',
					end: '50%',
					markers: true,
					scrub: true,
				},
			});
	},[])

	return (
		<StyledModuleContainer id='module-container'>
			<StyledImageWrapper id='image-wrapper' bgImg={TempImage}>
				<StyledSideStraps id='left-stripe' className='left'/>
				<StyledSideStraps id='right-stripe' className='right'/>
			</StyledImageWrapper>
		</StyledModuleContainer>
	);
};

export default ExapndingVideo;