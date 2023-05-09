import { useState, useRef, useEffect } from "react"; 
import Chevron from "../assets/arrow-down.svg";

export default function Collapse(props) {
	// State for toggling the collapse
	const [toggle, setToggle] = useState(false);
	
	// State for storing the height of the collapsible element
	const [heightEl, setHeightEl] = useState(); 

	// Function to toggle the state of the collapse
	const toggleState = () => {
		setToggle(!toggle);
	};

	// Reference to the collapsible element
	const refHeight = useRef(); 

	// Effect to set the height of the collapsible element on mount
	useEffect(() => {
		setHeightEl(`${refHeight.current.scrollHeight}px`); 
	}, []);

	return (
		<div className={`collapse ${props.aboutStyle}`}>
			{/* Visible part of the collapsible element */}
			<div onClick={toggleState} className="collapse__visible">
				<h2>{props.aboutTitle}</h2>
				{/* Chevron icon for indicating the collapse state */}
				<img
					className={toggle ? "chevron rotated" : "chevron"}
					src={Chevron}
					alt="chevron"
				/>
			</div>
			{/* Collapsible element */}
			<div
				ref={refHeight}
				className={toggle ? "collapse__toggle animated" : "collapse__toggle"}
				style={{ height: toggle ? `${heightEl}` : "0px" }}
			>
				<p aria-hidden={toggle ? "true" : "false"}>{props.aboutText}</p>
			</div>
		</div>
	);
}