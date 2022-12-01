import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthScreen } from '../screens/Auth';
import { useTheme } from '../hooks';
import { getNavigationTheme, screen } from "../utils";
import RegisterEmailScreen from "../screens/Auth/RegisterEmailScreen/RegisterEmailScreen";
import LoginEmailScreen from "../screens/Auth/LoginEmailScreen/LoginEmailScreen";

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
  
    const { theme } = useTheme();
    const MyTheme = getNavigationTheme(theme);

    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator screenOptions={{ headerTransparent: true }}>
                <Stack.Screen
                    name={screen.auth.auth}
                    component={AuthScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={screen.auth.loginEmail}
                    component={LoginEmailScreen}
                />
                <Stack.Screen
                    name={screen.auth.registerEmail}
                    component={RegisterEmailScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )

}