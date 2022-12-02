import React, { useState } from 'react';
import { View } from "react-native";
import { Icon, Text } from "react-native-elements";
import { styles } from "./Comments.styles";
import { nFormatter } from "../../../../utils";

export function Comments(props) {
    const { idUser, idVideo } = props;

    const openSheet = () => {
        console.log("Open Comment Container");
    }

    return (
        <View style={styles.content}>
            <Icon
                type="material-community"
                name="comment-processing"
                size={40}
                color={"#FFF"}
                onPress={openSheet}
            />
            <Text>{nFormatter(12)}</Text>
        </View>
    );
}