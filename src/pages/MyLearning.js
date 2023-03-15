import { useSelector } from "react-redux";
import MyLearningTopic from "../components/MyLearningTopic";

const MyLearning = () => {
    const listOfPosts = useSelector(state => state.posts);

    return <div style={{ width: '100%', display: 'flex', alignItems: 'center', padding: '2rem' }}>
        {listOfPosts.map(post => <MyLearningTopic postDetails={post} key={post.id} />)}
    </div>
}

export default MyLearning;