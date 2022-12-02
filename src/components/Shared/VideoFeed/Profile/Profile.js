import React from 'react';
import { View } from "react-native";
import { Avatar, Icon } from "react-native-elements";
import { styles } from "./Profile.styles";
import { LOGO } from "../../../../../assets/images";
import { useAuth } from "../../../../hooks";
import { useRoute, useNavigation } from "@react-navigation/native";
import { screen } from "../../../../utils";

export function Profile(props) {
    const { idUser, image } = props;
    const { auth } = useAuth();
    const navigation = useNavigation();
    const { name } = useRoute();
    const isMyVideo = idUser === auth.user_id;

    const goToProfile = () => {
        if (isMyVideo && name === screen.home.home) {
            navigation.navigate(screen.account.tab, {
                screen: screen.account.account
            })
        } else {
            navigation.navigate(screen.app.user, { idUser })
        }
    }

    const follow = () => {
        console.log("Foolow", idUser)
    }

    return (
        <View style={styles.content}>
            <Avatar
                rounded
                source={image ? { uri: image } : LOGO}
                size={40}
                avatarStyle={styles.avatar}
                onPress={goToProfile}
            />
            <Icon
                type="material-community"
                name="plus"
                size={14}
                color={"#FFF"}
                containerStyle={styles.iconContainer}
                onPress={follow}
            />
        </View>
    );
}