import React, { useState } from 'react';
import { View } from "react-native";
import { Icon, Text } from "react-native-elements";
import { styles } from "./Likes.styles";
import { nFormatter } from "../../../../utils";

export function Likes(props) {
    const { idVideo, likesCounter, idTargetUser } = props;
    const [isLike, setIsLike] = useState(false);

    return (
        <View style={styles.content}>
            <Icon
                type="material-community"
                name="heart"
                size={40}
                onPress={() => console.log("LIKE")}
                iconStyle={isLike ? styles.likeOK : styles.like}
            />
            <Text>{nFormatter(likesCounter)}</Text>
        </View>
    );
}