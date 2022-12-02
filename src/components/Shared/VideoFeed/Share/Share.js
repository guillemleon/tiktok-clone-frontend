import React, { useState } from 'react';
import { View } from "react-native";
import { Icon, Text } from "react-native-elements";
import { styles } from "./Share.styles";

export function Share(props) {
    const { idVideo, sharedCounter, idTargetUser } = props;

    const onShare = () => {
        console.log("Compartir video", idVideo)
    }

    return (
        <View style={styles.content}>
            <Icon
                type="material-community"
                name="share"
                size={40}
                color={"#FFF"}
                onPress={onShare}
            />
            <Text>{sharedCounter}</Text>
        </View>
    );
}