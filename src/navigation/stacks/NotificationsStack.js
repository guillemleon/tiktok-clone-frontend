import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../../utils";
import {NotificationsScreen} from "../../screens/Notifications";

const Stack = createNativeStackNavigator();

export function NotificationsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screen.notifications.notifications}
                component={NotificationsScreen}
                options={{
                    title: "Notificaciones"
                }}
            />
        </Stack.Navigator>
    )
}