
import {AppBar, Toolbar, Box, Button, Typography} from "@mui/material" 
import Link from "next/link"

export default function Header() {
    return (
        <AppBar sx={{background: "#e2e2e2"}}>
            <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                <Button component={Link} href="/" sx={{color: "black"}}>
                    <Typography variant="h5">SpaceX Launches</Typography>
                </Button>                
                <Box>                   
                    <Button component={Link} href="/">
                        Home
                    </Button>
                    <Button component={Link} href="/favorites">
                        Favorites
                    </Button>                    
                </Box>
            </Toolbar>
        </AppBar>
    )
}