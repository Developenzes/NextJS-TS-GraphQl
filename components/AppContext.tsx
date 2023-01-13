import { createContext } from "react";
import { useState, useEffect } from "react";
import { Launch } from "../generated/graphql";

type appContextType = {
    star: boolean;
    favoriteLaunch: [];
    favorite: boolean;
};

const appContextDefaultValues: appContextType = {
    star: false,
    favoriteLaunch: [],
    favorite: false,
};

export const AppContext = createContext<appContextType>(appContextDefaultValues);

type Props = {
    children: React.ReactNode;
};

export function AppProvider({children}: Props) {
    const [star, setStar] = useState<boolean>(false)
    const [favoriteLaunch, setFavoriteLaunch] = useState<Launch[]>(() => {
        let savedLaunch = [];
        try {
          savedLaunch = JSON.parse(localStorage.getItem("favoriteLaunch")) || [];
        } catch (error) {
          savedLaunch = [];
        }
        return savedLaunch;
    });
    
    useEffect(() => {
        if (favoriteLaunch) {
          localStorage.setItem("favoriteLaunch", JSON.stringify(favoriteLaunch));
        }
    }, [favoriteLaunch]);

    const handleStarButton = (newLaunch: Launch) => {
        const existingLaunch = favoriteLaunch.find(fav => fav.id === newLaunch.id);
        
        if(existingLaunch) {
            const updatedLaunch = favoriteLaunch.filter(fav=> fav.id !== newLaunch.id)
            setStar(star)
            setFavoriteLaunch(updatedLaunch)
        } else {
            setFavoriteLaunch([...favoriteLaunch, {...newLaunch, favorite: true}])
            setStar(!star)
        }                                    
    }

    const getLaunchFromFavorite = (launchId: string) => {
        return favoriteLaunch.find(fav => fav.id === launchId);
    }
   
    const value = {
        star,
        favoriteLaunch,
        onStarButton: handleStarButton,
        getLaunchFromFavorite
    }
     
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}