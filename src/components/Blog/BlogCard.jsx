import { Link } from 'react-router-dom'
import { arrowRight, calendar, clock, divider } from '../../images/images'

export const BlogCard = ({ post }) => {
    return (
        <div className='blog-post' key={post.id}>
            <Link to={`/blog/${post.id}`} className='blog-post__link'>
                <div className='relative'>
                    <span className='blog-post__blog-format'>
                        <img src={post.formatIcon} alt='podcasticon' />
                        <label>{post.formatLabel}</label>
                    </span>
                    <img
                        className='blog-post__image'
                        src={post.image}
                        alt='podcast'
                    />
                </div>
                <aside>
                    <span className='blog-post__major'>{post.major}</span>
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
                <p className='blog-post__description'>{post.description}</p>
                <a className='blog-post__button-more' href=''>
                    {post.buttonText}
                </a>
                <img src={arrowRight} alt='arrowRight' />
            </Link>
        </div>
    )
}
