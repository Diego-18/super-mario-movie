import { useEffect } from "react";
import "./welcome.scss";

import HomeSection from "../HomeSection";
import Button from "../../button/Button";

import hoverEffect from "hover-effect";

import {
	bg1,
	luigi,
	mario,
	peach,
	distortion,
	mushroom,
} from "../../../assets/images";

const champImgs = [mario, peach, luigi];

const Welcome = (props) => {
	useEffect(() => {
		const welcomeImgs = document.querySelectorAll(
			"#welcome__img__slide > img"
		);
		let animates = [];
		welcomeImgs.forEach((item, index) => {
			let nextImg =
				welcomeImgs[
					index === welcomeImgs.length - 1 ? 0 : index + 1
				].getAttribute("src");
			let animation = new hoverEffect({
				parent: document.querySelector("#welcome__img__slide"),
				intensity: 0.5,
				image1: item.getAttribute("src"),
				image2: nextImg,
				displacementImage: distortion,
				hover: false,
			});
			animates.push(animation);
		});
		welcomeImgs.forEach((e) => e.remove());

		let currItem = 0;

		const autoImageSlide = () => {
			let prevItem = currItem;
			currItem = (currItem + 1) % animates.length;

			if (!document.hidden) {
				animates[prevItem].next();
			}

			setTimeout(() => {
				let canvas = document.querySelectorAll(
					"#welcome__img__slide > canvas"
				);
				document
					.querySelector("#welcome__img__slide")
					.appendChild(canvas[0]);
				animates[prevItem].previous();
			}, 3000);
		};

		setInterval(autoImageSlide, 3000);
	}, []);

	return (
		<HomeSection
			className={`welcome ${props.isActive ? "active" : ""}`}
			contentClassName="overlay welcome__content"
			bgImage={bg1}
		>
			<div className="welcome__info relative">
				<div className="welcome__info__content">
					<div className="title">
						<span>Welcome To</span>{" "}
						<h2 className="main-color">Mushroom Kingdom</h2>
						<img src={mushroom} className="mushroom-img-2" />
					</div>
					<div className="description m-t-4">
						The Mushroom Kingdom is a vibrant and fantastical world
						in the Mario Bros universe. Filled with colorful
						landscapes, magical creatures, and iconic characters, it
						is a place where adventure and excitement await at every
						turn. From lush green plains to treacherous castles,
						from underwater depths to soaring skies, the Mushroom
						Kingdom offers a diverse array of environments to
						explore. Mario, the courageous plumber, and his loyal
						companions journey through this whimsical realm,
						battling enemies, collecting power-ups, and saving
						Princess Peach from the clutches of the notorious
						villain, Bowser. With its charming aesthetics, catchy
						music, and timeless gameplay, the world of Mario Bros in
						the Mushroom Kingdom has captured the hearts of gamers
						for decades.
					</div>
					<div className="btns m-t-4">
						<Button className="btn-main">PLAY NOW</Button>
						<Button className="btn-second">GET STARTED</Button>
						<img src={mushroom} className="mushroom-img-1" />
					</div>
				</div>
			</div>
			<div className="welcome__img relative">
				<div className="welcome__img__slide" id="welcome__img__slide">
					{champImgs.map((item, index) => (
						<img src={item} key={index} />
					))}
				</div>
			</div>
		</HomeSection>
	);
};

export default Welcome;
