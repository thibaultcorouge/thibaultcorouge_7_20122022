import AboutPage from "../components/About";
import Collapse from "../components/Collapse"; 
import aboutArray from "../about-array.json"; 

export default function About() { // Define the About component
	return (
		<>
			<AboutPage/> {/* Render the AboutPage component */}
			{aboutArray.map((rule, id) => ( // Loop through the aboutArray data and render the Collapse component for each item
				<Collapse
					key={id} // Set the key prop to the id of the item
					aboutTitle={rule.aboutTitle} // Set the aboutTitle prop to the aboutTitle property of the item
					aboutText={rule.aboutText} // Set the aboutText prop to the aboutText property of the item
					aboutStyle="about-style" // Set the aboutStyle prop to "about-style"
				/>
			))}
		</>
	);
}
