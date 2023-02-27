import { animateScroll as scroll } from "react-scroll";
import { scrollToBottom } from "react-scroll/modules/mixins/animate-scroll";
import "./style.css";

const Header = () => {

	const scrollToBottom = () => {
		scroll.scrollToBottom();
	};

	return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						<span className="change">H</span>
						<span className="change">i</span>

						<span className="">, </span>

						<span className="change">m</span>
						<span className="change">y</span>

						<span className=""> </span>

						<span className="change">n</span>
						<span className="change">a</span>
						<span className="change">m</span>
						<span className="change">e</span>

						<span className=""> </span>

						<span className="change">i</span>
						<span className="change">n</span>

						<span className=""> </span>

						<em>
							<span className="second__change">Y</span>
							<span className="second__change">u</span>
							<span className="second__change">r</span>
							<span className="second__change">i</span>
						</em>
					</strong><br />
					<p className="bottom__hover-text">a backend developer</p>
				</h1>
				<div className="header__text">
					<p>with passion for learning and creating.</p>
				</div>
				<a href="#" className="btn" onClick={scrollToBottom}>Show more!</a>
			</div>
		</header >
	);
}

export default Header;