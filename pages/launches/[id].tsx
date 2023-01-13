import { useLaunchDetailsQuery } from "../../generated/graphql";
import { useRouter } from "next/router";
import { AppContext } from "../../components/AppContext";
import { useContext } from "react";
import {Box, Typography, Link, IconButton} from "@mui/material"
import { List, ListItem } from "@material-ui/core";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import styles from '../../styles/Launches.module.css'

export default function LaunchDetailPage() {
    const router = useRouter()
    const app = useContext(AppContext)

    const[result] = useLaunchDetailsQuery({
        variables: {
            id: router.query.id
        }
    });

    const {data, fetching, error} = result;
   
    if(fetching) return <div>Loading...</div>
    if(error) return <div>{error.message}</div>
    if(!data) return <div>No data</div>

    const sourceForVideo = data.launch?.links?.video_link
    const lastBit = sourceForVideo.substring(sourceForVideo.lastIndexOf('/'));
    
    const launchFromFavorite = app.getLaunchFromFavorite(data.launch?.id)

    return (<>
        <Box display="flex" alignItems="center">
            <Typography variant="h4">{data.launch?.id}</Typography>
            <IconButton onClick={() => {app.onStarButton(data.launch)}}>
                {launchFromFavorite ? <StarIcon sx={{fontSize: 30}} color="warning" /> : <StarBorderIcon sx={{fontSize: 30}}/>}              
            </IconButton> 
        </Box>        
        <Box className={styles.details_container}>              
            <Box className={styles.details_content}>
                <Box className={styles.details_data}>
                    <Typography marginBottom="15px" variant="h4">{data.launch?.mission_name}</Typography>
                    {data.launch?.details ? <Typography variant="body2" className={styles.details_description}>{data.launch.details} </Typography> : "Description is missing"}
                    
                    {data?.launch?.links?.article_link && <Link href={data.launch.links.article_link} underline="hover" target="_blank" rel="noopener">See the article about this launch</Link>}
                    
                </Box>
                <Box className={styles.rocket_box}>
                    <Typography variant="h6">Data about the rocket</Typography>
                    <List>
                        <ListItem>Rocket name: {data.launch?.rocket?.rocket_name}</ListItem>
                        <ListItem>Rocket type: {data.launch?.rocket?.rocket_type}</ListItem>
                        <ListItem>Description: {data.launch?.rocket?.rocket?.description}</ListItem>
                        <ListItem>Diameter: {data.launch?.rocket?.rocket?.diameter?.meters} m</ListItem>
                        <ListItem>Height: {data.launch?.rocket?.rocket?.height?.meters} m</ListItem>
                    </List>
                </Box>               
            </Box>                    
            <Box className={styles.video} >                                     
                <iframe src={`https://www.youtube.com/embed/${lastBit}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                           
            </Box>
        </Box>       
        </>
    );
}