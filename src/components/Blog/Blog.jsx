import { Header } from "../Header/Header"
import './Blog.scss'
import podcast from './images/blog-image/image.png'
import article from './images/blog-image/imagearticle.png'
import video from './images/blog-image/imagevideo.png'

export const Blog = () => {
	return (
		<>
		<Header />
	<div className="wrapper">
		<h6 className="blog-page__subtitle subtitle">our blog</h6>
		<h1 className="blog-page__title title">Createx School Journal</h1>

		<div className="toolbar">
			<div className="toolbar__tabs">
				<a className="toolbar__all"href="#">All</a>
				<a className="toolbar__articles" href="#">Articles</a>
				<a className="toolbar__videos" href="#">Videos</a>
				<a className="toolbar__podcasts" href="#">Podcasts</a>
			</div>
			<div className="toolbar__filter">
				<label htmlFor="blog-category">Blog category</label>
				<select id="blog-category">
					<option>all themes</option>
					<option>Marketing</option>
					<option>Development</option>
					<option>Design</option>
					<option>HR & Recruiting</option>
					<option>Management</option>
				</select>
                <div className="toolbar__search-wrapper">
				<input type="text" placeholder="Search blog..."/>
                <span className="search-icon"></span>
                </div>
			</div>
    	</div>

		<div className="blog-container">
        <div className="blog-post">
            <img src={podcast} alt="podcast" />
            <div>What is traffic arbitrage and does it really make money?</div>
            <p className="blog-category">Marketing</p>
            <p className="blog-date">September 4, 2020 - 36 min</p>
            <p>Planetra, ultimozoper laculis viverra parturient sed id sed. Convallis proin digitalsim locus, purus gravida...</p>
            <a href="#">Read</a>
        </div>
        <div className="blog-post">
            <img src={podcast} alt="podcast" />
            <div>How to choose the first programming language for a beginner</div>
            <p className="blog-category">Development</p>
            <p className="blog-date">September 1, 2020</p>
            <p>Turghs sed at magna laoreet gravida consequat torter obscent. Gravida vitae aliquat enim egastas dul...</p>
            <a href="#">Read</a>
        </div>
        <div className="blog-post">
            <img src={podcast} alt="podcast" />
            <div>Should you choose a creative profession if you are attracted to creativity?</div>
            <p className="blog-category">Design</p>
            <p className="blog-date">August 8, 2020 - 40 min</p>
            <p>Curabitur nisi tincidunt eros venenatis vestibulum ac placerat. Torter, viverra sed vulputate ultrices...</p>
            <a href="#">Watch</a>
        </div>
        <div className="blog-post">
            <img src={article} alt="podcast" />
            <div>HR statistics: job search, interviews, hiring and recruiting</div>
            <p className="blog-category">HR & Recruiting</p>
            <p className="blog-date">August 3, 2020</p>
            <p>Massa, lectua rlibh consectetur adipiet runc risus seresan. Leo hac nettia bibendum diam adipiscing seresan nisl. Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Mortis commodo tempor, massa vivamus. A molestie id semper fermentum pretium...</p>
            <a href="#">Read</a>
        </div>
        <div className="blog-post">
            <img src={video} alt="podcast" />
            <div>What to do and who to talk to if you want to get feedback on the product</div>
            <p className="blog-category">Management</p>
            <p className="blog-date">August 2, 2020 - 45 min</p>
            <p>Neupa; a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibu ur na urna sagittis faucibus. Curabitur nisi tincidunt eros venenatis...</p>
            <a href="#">Watch</a>
        </div>
        <div className="blog-post">
            <img src={podcast} alt="podcast" />
            <div>What to do and who to talk to if you want to get feedback on the product</div>
            <p className="blog-category">Management</p>
            <p className="blog-date">August 2, 2020 - 45 min</p>
            <p>Neupa; a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibu ur na urna sagittis faucibus. Curabitur nisi tincidunt eros venenatis...</p>
            <a href="#">Watch</a>
        </div>
    </div>
	</div>
		</>
	)
}