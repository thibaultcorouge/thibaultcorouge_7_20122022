import { useState } from "react";
import left from "../assets/arrow-left.svg";
import right from "../assets/arrow-right.svg";

export default function Carrousel({ slides }) {
	// Set initial state with useState hook
	const [current, setCurrent] = useState(0); 
	const length = slides.length; 

	// Define functions to handle next and previous slide
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1); 
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1); 
	};

	return (
		// Render the carousel container
		<section id="carrousel-container">
			{/* Render the left arrow if there is more than one slide */}
			{length > 1 && (
				<img
					src={left}
					alt="gauche"
					onClick={prevSlide}
					className="leftArrow"
				/>
			)}
			{/* Render the right arrow if there is more than one slide */}
			{length > 1 && (
				<img
					src={right}
					alt="droite"
					onClick={nextSlide}
					className="rightArrow"
				/>
			)}
			{/* Render each slide with a slider class, and add the active-anim class to the current slide */}
			{slides.map((slide, index) => (
				<div
					key={index} 
					className={
						current === index
							? "slider bl-msk wh-msk active-anim"
							: "slider bl-msk wh-msk"
					}
				>
					{/* Render the slide image only if it is the current slide */}
					{index === current && <img src={slide} alt="appartement à louer" />}
					{/* Render the slide number only if it is the current slide */}
					{index === current && (
						<span className="slider__number">
							{current + 1}/{length}
						</span>
					)}
				</div>
			))}
		</section>
	);
}
