import * as PostActions from '../actions/post';

const initialState = {
    posts: [
        {
            id: 1,
            userName: 'Kent Dodds',
            profileImg: 'static/images/avatar/profile-picture.jpg',
            userDomain: 'Front End Developer',
            userSkills: 'React, Angular',
            title: 'Shrimp and Chorizo Paella',
            date: new Date('September 14, 2016'),
            url: 'https://www.youtube.com/embed/djMy4QsPWiI',
            description: '   This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
            likes: 4,
            dislikes: 1,
            isVideo: true,
            comments: []


        },
        {
            id: 2,
            userName: 'Jed Watson',
            profileImg: 'static/images/avatar/profile-picture.jpg',
            userDomain: 'Front End Developer',
            userSkills: 'React, Angular',
            title: 'Data Grid - Layout - MUI X',
            date: new Date(),
            url: 'https://www.npmjs.com/package/link-preview-js',
            description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
            likes: 4,
            dislikes: 1,
            isVideo: false,
            comments: []
        }
    ]
};




const postReducer = (state = initialState, action) => {

    switch (action.type) {

        case PostActions.ADD_POST:
            return { posts: [...state.posts, { ...action.post, id: state.posts.length + 1 }] };

        case PostActions.EDIT_POST:
            const postIndex = state.posts.findIndex(post => post.id === action.post.id);
            const updatedPosts = [...state.posts];
            updatedPosts[postIndex] = action.post;
            return { posts: updatedPosts };

        case PostActions.DELETE_POST:
            return { posts: state.posts.filter(post => post.id !== action.postId) };

        default:
            return state;
    }
}

export default postReducer;