import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/actions/post';

const AddPost = (props) => {


    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [toggleValue, setToggleValue] = useState('blog');
    const [errorMessage, setErrorMessage] = useState({});
    const [touched, setTouched] = useState({});
    const dispatch = useDispatch();

    const handleToggleChange = (e, fieldName) => {
        if (e.target.checked) {
            setToggleValue(fieldName);
        } else {
            setToggleValue(fieldName === 'video' ? 'blog' : 'video');
        }
    }

    const handleTouch = (e) => {
        if (e.target.validationMessage) {
            setErrorMessage(prevState => ({ ...prevState, [e.target.name]: e.target.validationMessage }));

        } else {
            setErrorMessage(prevState => (delete { ...prevState, }[e.target.name]));
            console.log(errorMessage);
        }
        setTouched((prevState) => ({ ...prevState, [e.target.name]: true }));

    };


    const onSubmit = (event) => {
        event.preventDefault();
        const post = {
            title,
            url,
            description,
            isVideo: (toggleValue === 'video') ? true : false,
            date: new Date(),
            likes: 4,
            dislikes: 1,
            comments: [],
            userName: 'Kent Dodds',
            profileImg: 'static/images/avatar/profile-picture.jpg',
            userDomain: 'Front End Developer',
            userSkills: 'React, Angular',
        }
        console.log(post);
        dispatch(addPost(post));
        props.onClose();
    }

    return <form onSubmit={(e) => onSubmit(e)}>
        <FormGroup>
            <TextField
                id="title"
                label="Topic Title"
                variant="outlined"
                sx={{ margin: '1rem', width: '400px' }}
                required
                name='title'
                onBlur={(e) => handleTouch(e)}
                onInput={(e) => handleTouch(e)}
                error={touched['title'] && Boolean(errorMessage['title'])}
                helperText={touched['title'] && errorMessage['title']}
                onChange={(e) => setTitle(e.target.value)} />

            <TextField
                id="url"
                type='url'
                label="Topic Url"
                variant="outlined"
                sx={{ margin: '1rem', width: '400px' }}
                required
                name='url'
                onBlur={(e) => handleTouch(e)}
                onInput={(e) => handleTouch(e)}
                error={touched['url'] && Boolean(errorMessage['url'])}
                helperText={touched['url'] && errorMessage['url']}
                onChange={(e) => setUrl(e.target.value)} />

            <TextField
                id="description"
                label="Topic Description"
                variant="outlined"
                sx={{ margin: '1rem', width: '400px' }}
                required
                name='description'
                multiline
                rows={4}
                onBlur={(e) => handleTouch(e)}
                onInput={(e) => handleTouch(e)}
                error={touched['description'] && Boolean(errorMessage['description'])}
                helperText={touched['description'] && errorMessage['description']}
                onChange={(e) => setDescription(e.target.value)} />

            <FormControlLabel
                control={<Switch id='blog' checked={toggleValue === 'blog'} />}
                label="Blog" sx={{ marginLeft: '1rem', width: 'fit-content' }}
                onChange={(e) => handleToggleChange(e, 'blog')} />

            <FormControlLabel
                control={<Switch id='video' checked={toggleValue === 'video'} />}
                label="Video" sx={{ marginLeft: '1rem', width: 'fit-content' }}
                onChange={(e) => handleToggleChange(e, 'video')} />

        </FormGroup>
        <p>{!(Boolean(errorMessage['url']) && Boolean(errorMessage['title']))}</p>

        <Button variant="contained" type='submit' sx={{ margin: '1rem', width: '400px' }} disabled={(Object.keys(touched).length <= 2) || (touched['title'] && Boolean(errorMessage['title'])) || (touched['url'] && errorMessage['url']) || (touched['description'] && errorMessage['description'])}>Submit</Button>
    </form>
}

export default AddPost;