import { useRef, useEffect } from "react";

import { bg3, trailerImg, flower } from "../../../assets/images";
import HomeSection from "../HomeSection";

import "./trailer.scss";

const Trailer = (props) => {
	const iframeRef = useRef(null);

	useEffect(() => {
		const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
		iframeRef.current.setAttribute("height", height);
	}, []);

	return (
		<HomeSection
			className={`trailer ${props.isActive ? "active" : ""}`}
			contentClassName="overlay trailer__content"
			bgImage={bg3}
		>
			<div className="trailer__content__img">
				<img src={trailerImg} alt="" />
			</div>
			<div className="trailer__content__info">
				<div className="title">
					<span>Trailer of the</span>
					<img src={flower} alt="flower" className="img-flower" />
					<h2 className="main-color">Film</h2>
				</div>
				<div className="video">
					<iframe
						ref={iframeRef}
						width="100%"
						title="trailer"
						src="https://www.youtube.com/embed/HAwXhRh40Co"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</HomeSection>
	);
};

export default Trailer;
