import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { screen } from "../utils";
import { AccountStack, FriendsStack, HomeStack, NotificationsStack, UploadStack } from "./stacks";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: "#FFF",
                tabBarStyle: {
                    backgroundColor: "#252525",
                    borderTopWidth: 0,
                    height: 50,
                    paddingTop: 5,
                    paddingBottom: 5
                },
                tabBarIcon: (props) => tabIcon({ route, ...props })
            })}
        >
            <Tab.Screen
                name={screen.home.tab}
                component={HomeStack}
                options={{
                    headerShown: false,
                    title: "Inicio"
                }}
            />
            <Tab.Screen
                name={screen.friends.tab}
                component={FriendsStack}
                options={{
                    headerShown: false,
                    title: "Amigos"
                }}
            />
            <Tab.Screen
                name={screen.upload.tab}
                component={UploadStack}
                options={{
                    headerShown: false,
                    tabBarLabelStyle: {
                        display: "none"
                    }
                }}
            />
            <Tab.Screen
                name={screen.notifications.tab}
                component={NotificationsStack}
                options={{
                    headerShown: false,
                    title: "Notificaciones"
                }}
            />
            <Tab.Screen
                name={screen.account.tab}
                component={AccountStack}
                options={{
                    headerShown: false,
                    title: "Cuenta"
                }}
            />
        </Tab.Navigator>
    );
}

function tabIcon(props) {

    const { route, size, color, focused } = props;

    let iconName = "plus";

    if (route.name === screen.upload.tab) {
        return (
            <Icon
                type="material-community"
                name={iconName}
                size={size}
                color={color}
                containerStyle={{
                    backgroundColor: "#FFF",
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 6
                }}
                iconStyle={{
                    color: "#000",
                    fontSize: 14
                }}
            />
        )
    }

    if (route.name === screen.home.tab)
        iconName = focused ? "home" : "home-outline";
    if (route.name === screen.friends.tab)
        iconName = focused ? "account-multiple" : "account-multiple-outline";
    if (route.name === screen.notifications.tab)
        iconName = focused ? "message-processing" : "message-processing-outline";
    if (route.name === screen.account.tab)
        iconName = focused ? "account" : "account-outline";

    return (
        <Icon
            type="material-community"
            name={iconName}
            size={size}
            color={color}
        />
    )
}