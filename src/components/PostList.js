import { useSelector } from "react-redux";
import Post from "./Post";

const PostList = () => {

    // const userDetails = [
    //     {
    //         userId: 1,
    //         userName: 'Kent Dodds',
    //         profileImg: 'static/images/avatar/profile-picture.jpg',
    //         userDomain: 'Front End Developer',
    //         userSkills: 'React, Angular',
    //         noOfVideoPosted: 5,
    //         watchList: [],
    //         rewards: []

    //     }
    // ]

    const listOfPosts = useSelector(state => state.posts);

    return <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem' }}>
        {listOfPosts.map(post => <Post postDetails={post} key={post.id} />)}
    </div>
}

export default PostList;