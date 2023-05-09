import AboutPage from "../components/About";
import Collapse from "../components/Collapse";
import aboutArray from "../about-array.json"; 

export default function About() {
	return (
		<>
			<AboutPage/>
			{aboutArray.map((rule, id) => (
				<Collapse
					key={id}
					aboutTitle={rule.aboutTitle}
					aboutText={rule.aboutText}
					aboutStyle="about-style"
				/>
			))}
		</>
	);
}