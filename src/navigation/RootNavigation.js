import { Fragment } from "react";
import { StatusBar } from "react-native";
import {useAuth, useTheme} from "../hooks";
import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";

export function RootNavigation() {

    const { auth } = useAuth();
    const { darkMode, toggleTheme } = useTheme();
    
    return (
        <Fragment>
            <StatusBar 
                animated 
                backgroundColor={darkMode ? "#121212" : "white"}
                barStyle={darkMode ? "light-content" : "dark-content"} 
            />
            {auth ? <AppNavigation /> : <AuthNavigation />}
        </Fragment>
    )
}