import {Component} from 'react'

import post from '../../assets/profiles/1/post.jpg'
import UserPost from "./user_post";
import profile from '../../assets/profiles/1/profile.png'


class Posts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <UserPost profileImg={profile} username="Christian.601" img={post} caption="Had an awesome day at the beach!" liked={true}/>
                <UserPost profileImg={profile} username="Christian.601" img={post} caption="Had an awesome day at the beach!" liked={false}/>
                <UserPost profileImg={profile} username="Christian.601" img={post} caption="Had an awesome day at the beach!" liked={true}/>
                <UserPost profileImg={profile} username="Christian.601" img={post} caption="Had an awesome day at the beach!" liked={false}/>
            </div>
        )
    }
}


export default Posts
