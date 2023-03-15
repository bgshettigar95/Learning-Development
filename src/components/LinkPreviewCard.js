import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';


const LinkPreviewCard = (props) => {

  const [loading, setLoader] = React.useState(false);
  const [linkData, setLinkData] = React.useState(null);
  const apiKey = 'f23e332f3eb223668441946c2bdf8063';


  React.useEffect(() => {
    async function fetchLinkPreview() {
      setLoader(true);
      const url = 'http://api.linkpreview.net/?key=' + apiKey + '&q=' + props.postDetails.url;

      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setLinkData(data);
      }

      setLoader(false);

    }

    fetchLinkPreview();
  }, [props.postDetails.url]);

  const linkPreview = linkData ? (<a href={props.postDetails.url} rel="noreferrer" target="_blank" style={{ textDecoration: 'none' }}><Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid lightgrey', margin: '1rem', borderRadius: '5px' }}>
    <CardMedia
      component="img"
      sx={{ display: 'inline-flex', width: 'auto', maxHeight: '10rem' }}
      image={linkData?.image}
      alt="Paella dish"
    />
    <CardContent sx={{ display: 'inline', width: 'auto' }}>
      <Typography gutterBottom variant="h5" component="div">
        {linkData?.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {linkData?.description}
      </Typography>
    </CardContent>
  </Box></a>) : ''

  return (
    <>
      <Box sx={{ marginLeft: '1rem' }}>
        <Typography gutterBottom variant="subtitle1" component="div" >
          <a href={props.postDetails.url} target='_blank' rel="noreferrer">{props.postDetails.url}</a>
        </Typography>
      </Box>
      {loading ? (
        <Skeleton sx={{ height: 190, margin: '1rem', borderRadius: '5px' }} animation="wave" variant="rectangular" />
      ) : linkPreview
      }
    </>
  );
};


export default LinkPreviewCard;