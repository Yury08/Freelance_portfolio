import Header from "./../components/header/Header";


const Home = () => {
	return (
		<>
			< Header />
			<main class="section">
				<div class="container">
					<ul class="content-list">
						<li class="content-list__item">
							<h2 class="title-2">Backend</h2>
							<p>MySQL, Python, Django, Redis, DjangoRest, SQLlite, PostgreSQL, Celery</p>
						</li>
						<li class="content-list__item">
							<h2 class="title-2">Frontend</h2>
							<p>JavaScript, ReactJS, jQuery, HTML, CSS, BootStrap, SCSS</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;