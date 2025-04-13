import post1 from '../assets/images/instagram/1.png'
import post2 from '../assets/images/instagram/2.png'
import post3 from '../assets/images/instagram/3.png'
import post4 from '../assets/images/instagram/4.png'
import post5 from '../assets/images/instagram/5.png'
import post6 from '../assets/images/instagram/6.png'

const InstagramPosts = () => {
    const posts = [
        { id: 1, image: post1 },
        { id: 2, image: post2 },
        { id: 3, image: post3 },
        { id: 4, image: post4 },
        { id: 5, image: post5 },
        { id: 6, image: post6 },
    ]
    return (
        <div className='grid  grid-cols-3 gap-4 max-w-md'>
            {posts.map((post) => (
                <div key={post.id} className='overflow-hidden rounded-lg'>
                    <img src={post.image} alt={`Instagram Post ${post.id}`} className='w-full h-full object-cover transition-transform duration-300 hover:scale-105' />
                </div>
            ))}
        </div>
    )
}

export default InstagramPosts
