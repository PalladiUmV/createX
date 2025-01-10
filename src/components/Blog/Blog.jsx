import { Header } from '../Header/Header'
import './Blog.scss'

import {
    podcastFace,
    articleLaptop,
    videoFlyMan,
    articleKeyboard,
    videoLightBulb,
    podcastFinish,
    videoFlower,
    articleMachine,
    arrowRight,
    iconMic,
    iconArticle,
    iconVideo,
    calendar,
    clock,
    divider,
} from '../../images/images'

export const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            formatIcon: iconMic,
            formatLabel: 'Podcast',
            image: podcastFace,
            major: 'Marketing',
            date: 'September 4, 2020',
            time: '36 min',
            title: 'What is traffic arbitrage and does it really make money?',
            description:
                'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...',
            buttonText: 'Listen',
        },
        {
            id: 2,
            formatIcon: iconArticle,
            formatLabel: 'Article',
            image: articleLaptop,
            major: 'Development',
            date: 'September 1, 2020',
            time: '',
            title: 'How to choose the first programming language for a beginner',
            description:
                'Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui...',
            buttonText: 'Read',
        },
        {
            id: 3,
            formatIcon: iconVideo,
            formatLabel: 'Video',
            image: videoFlyMan,
            major: 'Design',
            date: 'August 8, 2020',
            time: '40 min',
            title: 'Should you choose a creative profession if you are attracted to creativity?',
            description:
                'Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...',
            buttonText: 'Watch',
        },
        {
            id: 4,
            formatIcon: iconArticle,
            formatLabel: 'Article',
            image: articleKeyboard,
            major: 'HR & Recruiting',
            date: 'August 3, 2020',
            time: '',
            title: 'HR statistics: job search,  interviews, hiring and recruiting',
            description:
                'Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing aenean nisl. Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Morbi commodo tempor, massa vivamus. A molestie id semper fermentum pretium...',
            buttonText: 'Read',
        },
        {
            id: 5,
            formatIcon: iconVideo,
            formatLabel: 'Video',
            image: videoLightBulb,
            major: 'Management',
            date: 'August 2, 2020',
            time: '45 min',
            title: 'What to do and who to talk to if you want to get feedback on the product',
            description:
                'Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus. Curabitur nisl tincidunt eros venenatis...',
            buttonText: 'Watch',
        },
        {
            id: 6,
            formatIcon: iconMic,
            formatLabel: 'Podcast',
            image: podcastFinish,
            major: 'Design',
            date: 'July 28, 2020',
            time: '36 min',
            title: 'What are color profiles and how they work in graphic design',
            description:
                'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
            buttonText: 'Listen',
        },
        {
            id: 7,
            formatIcon: iconVideo,
            formatLabel: 'Video',
            image: videoFlower,
            major: 'Management',
            date: 'July 15, 2020',
            time: '45 min',
            title: 'Startup: how to build a team that will live longer than a year',
            description:
                'Nisi, massa ut sit faucibus et diam. Faucibus at malesuada at justo scelerisque in nisi, urna...',
            buttonText: 'Watch',
        },
        {
            id: 8,
            formatIcon: iconArticle,
            formatLabel: 'Article',
            image: articleMachine,
            major: 'Marketing',
            date: 'July 9, 2020',
            time: '',
            title: 'How to get customers to love your business from the start',
            description:
                'Malesuada in augue mi feugiat morbi a aliquet enim. Elementum lacus, pellentesque etiam arcu tristique ac...',
            buttonText: 'Listen',
        },
    ]

    return (
        <>
            <Header />
            <div className='wrapper'>
                <h6 className='blog-page__subtitle subtitle'>our blog</h6>
                <h1 className='blog-page__title title'>
                    Createx School Journal
                </h1>

                <div className='toolbar'>
                    <div className='toolbar__tabs'>
                        <a className='toolbar__tab' href='#'>
                            All
                        </a>
                        <a className='toolbar__tab' href='#'>
                            Articles
                        </a>
                        <a className='toolbar__tab' href='#'>
                            Videos
                        </a>
                        <a className='toolbar__tab' href='#'>
                            Podcasts
                        </a>
                    </div>
                    <div className='toolbar__filter'>
                        <label htmlFor='blog-category'>Blog category</label>
                        <select id='blog-category'>
                            <option>all themes</option>
                            <option>Marketing</option>
                            <option>Development</option>
                            <option>Design</option>
                            <option>HR & Recruiting</option>
                            <option>Management</option>
                        </select>
                        <div className='toolbar__search-wrapper'>
                            <input type='text' placeholder='Search blog...' />
                            <span className='search-icon'></span>
                        </div>
                    </div>
                </div>

                <div className='blog-page__blog-container blog-container'>
                    {/* <div className='blog-post'>
                        <div className='relative'>
                            <span className='blog-post__blog-format'>
                                <img src={iconMic} alt='podcasticon' />
                                <label>Podcast</label>
                            </span>

                            <img
                                className='blog-post__image'
                                src={podcastFace}
                                alt='podcast'
                            />
                        </div>
                        <aside>
                            <span className='blog-post__major'>Marketing</span>
                            <img src={divider} alt='divider' />
                            <div className='blog-post__date'>
                                <img src={calendar} alt='calendar' />
                                <span>September 4, 2020</span>{' '}
                            </div>
                            <img src={divider} alt='divider' />
                            <div className='blog-post__time'>
                                <span>
                                    <img src={clock} alt='clock' />
                                </span>{' '}
                                <span>36 min</span>
                            </div>
                        </aside>
                        <div className='blog-post__title'>
                            What is traffic arbitrage and does it really make
                            money?
                        </div>
                        <p className='blog-post__description'>
                            Pharetra, ullamcorper iaculis viverra parturient sed
                            id sed. Convallis proin dignissim lacus, purus
                            gravida...
                        </p>
                        <a className='blog-post__button-more' href=''>
                            Listen
                        </a>
                        <img src={arrowRight} alt='arrowRight' />
                    </div>
                    <div className='blog-post'>
                        <div className='relative'>
                            <span className='blog-post__blog-format'>
                                <img src={iconMic} alt='podcasticon' />
                                <label>Podcast</label>
                            </span>

                            <img
                                className='blog-post__image'
                                src={articleLaptop}
                                alt='podcast'
                            />
                        </div>
                        <aside>
                            <span className='blog-post__major'>Marketing</span>
                            <img src={divider} alt='divider' />
                            <div className='blog-post__date'>
                                <img src={calendar} alt='calendar' />
                                <span>September 4, 2020</span>{' '}
                            </div>
                            <img src={divider} alt='divider' />
                            <div className='blog-post__time'>
                                <span>
                                    <img src={clock} alt='clock' />
                                </span>{' '}
                                <span>36 min</span>
                            </div>
                        </aside>
                        <div className='blog-post__title'>
                            What is traffic arbitrage and does it really make
                            money?
                        </div>
                        <p className='blog-post__description'>
                            Pharetra, ullamcorper iaculis viverra parturient sed
                            id sed. Convallis proin dignissim lacus, purus
                            gravida...
                        </p>
                        <a className='blog-post__button-more' href=''>
                            Listen
                        </a>
                        <img src={arrowRight} alt='arrowRight' />
                    </div>
                    <div className='blog-post'>
                        <div className='relative'>
                            <span className='blog-post__blog-format'>
                                <img src={iconMic} alt='podcasticon' />
                                <label>Podcast</label>
                            </span>

                            <img
                                className='blog-post__image'
                                src={videoFlyMan}
                                alt='podcast'
                            />
                        </div>
                        <aside>
                            <span className='blog-post__major'>Marketing</span>
                            <img src={divider} alt='divider' />
                            <div className='blog-post__date'>
                                <img src={calendar} alt='calendar' />
                                <span>September 4, 2020</span>{' '}
                            </div>
                            <img src={divider} alt='divider' />
                            <div className='blog-post__time'>
                                <span>
                                    <img src={clock} alt='clock' />
                                </span>{' '}
                                <span>36 min</span>
                            </div>
                        </aside>
                        <div className='blog-post__title'>
                            What is traffic arbitrage and does it really make
                            money?
                        </div>
                        <p className='blog-post__description'>
                            Pharetra, ullamcorper iaculis viverra parturient sed
                            id sed. Convallis proin dignissim lacus, purus
                            gravida...
                        </p>
                        <a className='blog-post__button-more' href=''>
                            Listen
                        </a>
                        <img src={arrowRight} alt='arrowRight' />
                    </div>
                    <div className='blog-post'>
                        <div className='relative'>
                            <span className='blog-post__blog-format'>
                                <img src={iconArticle} alt='podcasticon' />
                                <label>Podcast</label>
                            </span>

                            <img
                                className='blog-post__image'
                                src={articleKeyboard}
                                alt='podcast'
                            />
                        </div>
                        <aside>
                            <span className='blog-post__major'>Marketing</span>
                            <img src={divider} alt='divider' />
                            <div className='blog-post__date'>
                                <img src={calendar} alt='calendar' />
                                <span>September 4, 2020</span>{' '}
                            </div>
                            <img src={divider} alt='divider' />
                            <div className='blog-post__time'>
                                <span>
                                    <img src={clock} alt='clock' />
                                </span>{' '}
                                <span>36 min</span>
                            </div>
                        </aside>
                        <div className='blog-post__title'>
                            What is traffic arbitrage and does it really make
                            money?
                        </div>
                        <p className='blog-post__description'>
                            Massa, lectus nibh consectetur aliquet nunc risus
                            aenean. Leo hac netus bibendum diam adipiscing
                            aenean nisl. Molestie nullam ante mattis ac sit
                            vitae pellentesque mi etiam. Morbi commodo tempor,
                            massa vivamus. A molestie id semper fermentum
                            pretium...
                        </p>
                        <a className='blog-post__button-more' href=''>
                            Listen
                        </a>
                        <img src={arrowRight} alt='arrowRight' />
                    </div>
                    <div className='blog-post'>
                        <div className='relative'>
                            <span className='blog-post__blog-format'>
                                <img src={iconVideo} alt='podcasticon' />
                                <label>Podcast</label>
                            </span>

                            <img
                                className='blog-post__image'
                                src={videoLightBulb}
                                alt='podcast'
                            />
                        </div>
                        <aside>
                            <span className='blog-post__major'>Marketing</span>
                            <img src={divider} alt='divider' />
                            <div className='blog-post__date'>
                                <img src={calendar} alt='calendar' />
                                <span>September 4, 2020</span>{' '}
                            </div>
                            <img src={divider} alt='divider' />
                            <div className='blog-post__time'>
                                <span>
                                    <img src={clock} alt='clock' />
                                </span>{' '}
                                <span>36 min</span>
                            </div>
                        </aside>
                        <div className='blog-post__title'>
                            What is traffic arbitrage and does it really make
                            money?
                        </div>
                        <p className='blog-post__description'>
                            Neque a, senectus consectetur odio in aliquet nec
                            eu. Ultricies ac nibh urna urna sagittis faucibus.
                            Curabitur nisl tincidunt eros venenatis...
                        </p>
                        <a className='blog-post__button-more' href=''>
                            Listen
                        </a>
                        <img src={arrowRight} alt='arrowRight' />
                    </div>
                    <div className='blog-post'>
                        <div className='relative'>
                            <span className='blog-post__blog-format'>
                                <img src={iconMic} alt='podcasticon' />
                                <label>Podcast</label>
                            </span>

                            <img
                                className='blog-post__image'
                                src={podcastFinish}
                                alt='podcast'
                            />
                        </div>
                        <aside>
                            <span className='blog-post__major'>Marketing</span>
                            <img src={divider} alt='divider' />
                            <div className='blog-post__date'>
                                <img src={calendar} alt='calendar' />
                                <span>September 4, 2020</span>{' '}
                            </div>
                            <img src={divider} alt='divider' />
                            <div className='blog-post__time'>
                                <span>
                                    <img src={clock} alt='clock' />
                                </span>{' '}
                                <span>36 min</span>
                            </div>
                        </aside>
                        <div className='blog-post__title'>
                            What is traffic arbitrage and does it really make
                            money?
                        </div>
                        <p className='blog-post__description'>
                            Pharetra, ullamcorper iaculis viverra parturient sed
                            id sed. Convallis proin dignissim lacus, purus
                            gravida...
                        </p>
                        <a className='blog-post__button-more' href=''>
                            Listen
                        </a>
                        <img src={arrowRight} alt='arrowRight' />
                    </div>
                    <div className='blog-post'>
                        <div className='relative'>
                            <span className='blog-post__blog-format'>
                                <img src={iconMic} alt='podcasticon' />
                                <label>Podcast</label>
                            </span>

                            <img
                                className='blog-post__image'
                                src={videoFlower}
                                alt='podcast'
                            />
                        </div>
                        <aside>
                            <span className='blog-post__major'>Marketing</span>
                            <img src={divider} alt='divider' />
                            <div className='blog-post__date'>
                                <img src={calendar} alt='calendar' />
                                <span>September 4, 2020</span>{' '}
                            </div>
                            <img src={divider} alt='divider' />
                            <div className='blog-post__time'>
                                <span>
                                    <img src={clock} alt='clock' />
                                </span>{' '}
                                <span>36 min</span>
                            </div>
                        </aside>
                        <div className='blog-post__title'>
                            What is traffic arbitrage and does it really make
                            money?
                        </div>
                        <p className='blog-post__description'>
                            Pharetra, ullamcorper iaculis viverra parturient sed
                            id sed. Convallis proin dignissim lacus, purus
                            gravida...
                        </p>
                        <a className='blog-post__button-more' href=''>
                            Listen
                        </a>
                        <img src={arrowRight} alt='arrowRight' />
                    </div>
                    <div className='blog-post'>
                        <div className='relative'>
                            <span className='blog-post__blog-format'>
                                <img src={iconMic} alt='podcasticon' />
                                <label>Podcast</label>
                            </span>

                            <img
                                className='blog-post__image'
                                src={articleMachine}
                                alt='podcast'
                            />
                        </div>
                        <aside>
                            <span className='blog-post__major'>Marketing</span>
                            <img src={divider} alt='divider' />
                            <div className='blog-post__date'>
                                <img src={calendar} alt='calendar' />
                                <span>September 4, 2020</span>{' '}
                            </div>
                            <img src={divider} alt='divider' />
                            <div className='blog-post__time'>
                                <span>
                                    <img src={clock} alt='clock' />
                                </span>{' '}
                                <span>36 min</span>
                            </div>
                        </aside>
                        <div className='blog-post__title'>
                            What is traffic arbitrage and does it really make
                            money?
                        </div>
                        <p className='blog-post__description'>
                            Pharetra, ullamcorper iaculis viverra parturient sed
                            id sed. Convallis proin dignissim lacus, purus
                            gravida...
                        </p>
                        <a className='blog-post__button-more' href=''>
                            Listen
                        </a>
                        <img src={arrowRight} alt='arrowRight' />
                    </div> */}
                    {blogPosts.map((post) => (
                        <div className='blog-post' key={post.id}>
                            <div className='relative'>
                                <span className='blog-post__blog-format'>
                                    <img
                                        src={post.formatIcon}
                                        alt='podcasticon'
                                    />
                                    <label>{post.formatLabel}</label>
                                </span>
                                <img
                                    className='blog-post__image'
                                    src={post.image}
                                    alt='podcast'
                                />
                            </div>
                            <aside>
                                <span className='blog-post__major'>
                                    {post.major}
                                </span>
                                <img src={divider} alt='divider' />
                                <div className='blog-post__date'>
                                    <img src={calendar} alt='calendar' />
                                    <span>{post.date}</span>
                                </div>
                                <img src={divider} alt='divider' />
                                <div className='blog-post__time'>
                                    <span>
                                        <img src={clock} alt='clock' />
                                    </span>
                                    <span>{post.time}</span>
                                </div>
                            </aside>
                            <div className='blog-post__title'>{post.title}</div>
                            <p className='blog-post__description'>
                                {post.description}
                            </p>
                            <a className='blog-post__button-more' href=''>
                                {post.buttonText}
                            </a>
                            <img src={arrowRight} alt='arrowRight' />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
