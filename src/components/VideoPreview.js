import CardMedia from '@mui/material/CardMedia';
const VideoPreview = (props) => {
    return (<CardMedia
        component="iframe"
        title="Your Title"
        allowFullScreen="allowfullScreen"
        src={props.postDetails.url}
        sx={{ height: '400px', width: '100%' }}
    />)
}

export default VideoPreview;