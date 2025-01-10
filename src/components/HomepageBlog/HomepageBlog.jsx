import './HomepageBlog.scss'

import {
    divider,
    calendar,
    clock,
    arrowRight,
    podcast,
    video,
    article,
    iconMic,
    iconVideo,
    iconArticle,
} from '../../images/images'

import { Link } from 'react-router-dom'

export const HomepageBlog = () => {
    return (
        <div className='wrapper'>
            <div className='homepage-blog'>
                <h6 className='homepage-blog__subtitle subtitle'>Our blog</h6>
                <div className='flex sb aic'>
                    <h2 className='homepage-blog__title title'>Latest posts</h2>
                    <button className='button-basic solid large'>
                        <Link to='/blog'>Go to blog</Link>
                    </button>
                </div>

                <div className='blog-container'>
                    <div className='blog-post'>
                        <div className='relative'>
                            <span className='blog-post__blog-format'>
                                <img src={iconMic} alt='podcasticon' />
                                <label>Podcast</label>
                            </span>

                            <img
                                className='blog-post__image'
                                src={podcast}
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
                                <img src={iconVideo} alt='podcasticon' />
                                <label>Video</label>
                            </span>
                            <img src={video} alt='podcast' />
                        </div>
                        <aside>
                            <span className='blog-post__major'>Management</span>
                            <img src={divider} alt='divider' />
                            <div className='blog-post__date'>
                                <img src={calendar} alt='calendar' />
                                <span>August 25, 2020</span>{' '}
                            </div>
                            <img src={divider} alt='divider' />
                            <div className='blog-post__time'>
                                <span>
                                    <img src={clock} alt='clock' />
                                </span>{' '}
                                <span>45 min</span>
                            </div>
                        </aside>
                        <div className='blog-post__title'>
                            What to do and who to talk to if you want to get
                            feedback on the product
                        </div>
                        <p className='blog-post__description'>
                            Neque a, senectus consectetur odio in aliquet nec
                            eu. Ultricies ac nibh urna urna sagittis faucibus...
                        </p>
                        <a className='blog-post__button-more' href=''>
                            Watch
                        </a>
                        <img src={arrowRight} alt='arrowRight' />
                    </div>
                    <div className='blog-post'>
                        <div className='relative'>
                            <span className='blog-post__blog-format'>
                                <img src={iconArticle} alt='podcasticon' />
                                <label>Article</label>
                            </span>
                            <img src={article} alt='podcast' />
                        </div>
                        <aside>
                            <span className='blog-post__major'>Design</span>
                            <img src={divider} alt='divider' />
                            <div className='blog-post__date'>
                                <img src={calendar} alt='calendar' />
                                <span>August 8, 2020</span>{' '}
                            </div>
                            <img src={divider} alt='divider' />
                        </aside>
                        <div className='blog-post__title'>
                            Should you choose a creative profession if you are
                            attracted to creativity?
                        </div>
                        <p className='blog-post__description'>
                            Curabitur nisl tincidunt eros venenatis vestibulum
                            ac placerat. Tortor, viverra sed vulputate
                            ultrices...
                        </p>
                        <a className='blog-post__button-more' href=''>
                            Read
                        </a>
                        <img src={arrowRight} alt='arrowRight' />
                    </div>
                </div>
            </div>
        </div>
    )
}
