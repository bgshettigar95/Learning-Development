import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import VideoPreview from './VideoPreview';
import LinkPreviewCard from './LinkPreviewCard';

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
}

function stringAvatar(userDetails) {
    return {
        sx: {
            bgcolor: stringToColor(userDetails.userName),
        },
        children: `${userDetails.userName.split(' ')[0][0]}${userDetails.userName.split(' ')[1][0]}`,
        src: `../${userDetails.profileImg}`
    };
}

const Post = (props) => {


    return (
        <Card sx={{ maxWidth: '100%', width: '100%', marginTop: '1rem' }}>
            <CardHeader
                avatar={
                    <Avatar {...stringAvatar(props.postDetails)} />
                }
                title={props.postDetails.title}
                subheader={props.postDetails.date.toDateString()}
            />
            {props.postDetails.isVideo ? <VideoPreview postDetails={props.postDetails} /> : <LinkPreviewCard postDetails={props.postDetails} />}
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.postDetails.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <ThumbDownAltIcon />
                </IconButton>
                <IconButton aria-label="add to favorites">
                    <ThumbUpIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <CommentIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Post;