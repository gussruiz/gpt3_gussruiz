import React from 'react';
import { Feature } from '../../components/index'
import './whatGPT3.css';

const WhatGPT3 = () => {
	return (
		<div className='gpt3__whatpgt3 section__margin' id='whpt3'>
			<div className='gpt3__whatpgt3-feature'>
				<Feature/>
			</div>
			<div className='gpt3__whatpgt3-heading'>
				<h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
				<p>Explore The Libary</p>
			</div>
			<div className='gpt3__whatpgt3-container'>
				<Feature/>
				<Feature/>
				<Feature/>
			</div>
		</div>
	)
}

export default WhatGPT3