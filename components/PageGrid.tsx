import {Grid, Box} from "@mui/material"
import LaunchCard from "./LaunchCard"
import SearchInput from "./SearchInput"
import { useState } from "react";
import { Launch } from "../generated/graphql";

type Props = {
    data: Launch[]
}

export default function PageGrid({data}: Props) {
    const [searchValue, setSearchValue] = useState<string>('');

    const filteredLaunches = data.filter((launch) =>
        launch?.mission_name?.toLowerCase().includes(searchValue.toLowerCase()),
    );

    return (        
        <Box sx={{ display: 'flex', justifyContent: "center"}}>  
            <Box sx={{maxWidth: "lg", width: "100%", alignSelf: "center"}}>       
                <SearchInput  
                    value={searchValue}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)}
                />            
                <Grid container maxWidth="lg" spacing={{ xs: 4, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }} >           
                    {filteredLaunches?.map((launch) => (
                        <Grid key={launch?.id} item xs={4} sm={4} md={4}  >
                            <LaunchCard launch={launch}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>   
        </Box>          
    )
}