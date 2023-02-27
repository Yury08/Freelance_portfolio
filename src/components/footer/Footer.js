import "./style.css";

import vk from "./../../img/icons/vk.svg";
import git from "./../../img/icons/gitHub.svg";
import tg from "./../../img/icons/tg.svg";


const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item"><a href="https://vk.com/id433520181"><img src={vk}
							alt="Link" /></a></li>
						<li className="social__item"><a href="https://github.com/Yury08"><img src={git}
							alt="Link" /></a></li>
						<li className="social__item tg"><a href="https://t.me/Yury_Kravtsov"><img src={tg}
							alt="Link" /></a></li>
					</ul>
					<div className="copyright">
						<p>© 2022 back-dev.com</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;