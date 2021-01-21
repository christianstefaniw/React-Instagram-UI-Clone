import {Component} from 'react'

import post1 from '../../assets/profiles/1/post.jpg'
import post2 from '../../assets/profiles/2/post.jpg'
import post3 from '../../assets/profiles/3/post.jpg'
import post4 from '../../assets/profiles/4/post.jpg'
import profileImg1 from '../../assets/profiles/1/profile.png'
import profileImg2 from '../../assets/profiles/2/profile.jpg'
import profileImg3 from '../../assets/profiles/3/profile.png'
import profileImg4 from '../../assets/profiles/4/profile.jpeg'
import UserPost from "./user_post";


class Posts extends Component {
    render() {
        return (
            <div>
                <UserPost profileImg={profileImg1} username="_christian.0" story={false} img={post1} caption="Had an awesome day at the beach!" liked={true}/>
                <UserPost profileImg={profileImg2} username="squidward" story={true} img={post2} caption="Toronto is very nice" liked={false}/>
                <UserPost profileImg={profileImg3} username="someone" story={false} img={post3} caption="Cool clouds" liked={true}/>
                <UserPost profileImg={profileImg4} username="deadpool" story={true} img={post4} caption="Nice sunset!" liked={false}/>
            </div>
        )
    }
}


export default Posts
