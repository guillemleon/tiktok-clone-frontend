import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../../utils";
import {FriendsScreen} from "../../screens/Friends";

const Stack = createNativeStackNavigator();

export function FriendsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screen.friends.friends}
                component={FriendsScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}