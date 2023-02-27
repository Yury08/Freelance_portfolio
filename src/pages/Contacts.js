const Contacts = () => {
	return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">
					<span className="change">C</span>
					<span className="change">o</span>
					<span className="change">n</span>
					<span className="change">t</span>
					<span className="change">a</span>
					<span className="change">c</span>
					<span className="change">t</span>
					<span className="change">s</span>
				</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Location</h2>
						<p>Kurgan, Russia</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Telegram / WhatsApp</h2>
						<p><a href="tel:+79051234567">+7 (909) 149-98-22</a></p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Email</h2>
						<p><a href="mailto:webdev@protonmail.com">ukravzov@gmail.com</a></p>
					</li>
				</ul>

			</div>
		</main>
	);
}

export default Contacts;