import { AppContext } from "../components/AppContext";
import { useContext } from "react";
import PageGrid from "../components/PageGrid";
import { Typography } from "@mui/material";

export default function FavoritesPage() {
    const app = useContext(AppContext);

    return (
        <>
        {app.favoriteLaunch.length !== 0 ? <PageGrid data={app.favoriteLaunch}/> : <Typography variant="h3">No favorite launches</Typography>}
        </>
    )
}