import {Card, CardMedia, CardContent, CardActions,Box, Typography, Button, CardActionArea, IconButton} from "@mui/material"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { AppContext } from "./AppContext";
import { useContext } from "react";
import dateFormat from 'dateformat';
import { Launch } from "../generated/graphql";
import Link from "next/link";
import Image from "next/legacy/image";

type Props = {
    launch: Launch
}

export default function LaunchCard({launch}: Props) {
    const app = useContext(AppContext)

    const launchFromFavorite = app.getLaunchFromFavorite(launch.id)
   
    return (
      <Card sx={{ maxWidth: 350 }}>
        <CardActionArea 
            component={Link} href={`/launches/${launch.id}`}>
            <CardMedia>
                <div style={{ position: 'relative', width: '100%', height: '150px' }}>
                <Image 
                    src={launch.links?.flickr_images.length > 0 ? launch.links?.flickr_images[0] : launch.links?.mission_patch} 
                    layout="fill"
                    objectFit="cover"
                    alt="space" 
                    priority/>
                </div>
            </CardMedia>                               
        </CardActionArea>     
        <CardContent>
            <Box sx={{ display: 'flex', justifyContent: "space-between", paddingBottom: "10"}}>
                <Typography variant="body2" >{dateFormat(launch.launch_date_local, "dd.mm.yyyy")}</Typography>
                <Typography variant="body2">{launch.id}</Typography>
            </Box>
            <Typography variant="h5" padding="10px 0">
                {launch.mission_name}
            </Typography>
            <Typography variant="body2" component="p" color="text.secondary">
                {launch.launch_site?.site_name_long}
            </Typography>
        </CardContent>
        <CardActions>
            <IconButton onClick={() => {app.onStarButton(launch)}}>
                {launchFromFavorite ? <StarIcon color="warning" /> : <StarBorderIcon />}                
            </IconButton>                          
            <Button  component={Link} href={`/launches/${launch.id}`} size="medium">Detail</Button>
        </CardActions>
      </Card>
    );
}