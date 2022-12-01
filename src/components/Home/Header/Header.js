import React from 'react';
import { Pressable, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import { styles } from "./Header.styles";
import { ENV } from "../../../utils";

export function Header(props) {

    const { typeVideo, setTypeVideo } = props;

    const onChangeTypeVideo = (type) => {
        setTypeVideo(type)
    }

    return (
        <SafeAreaView style={styles.content}>
            <Pressable
                onPress={() => onChangeTypeVideo(ENV.TYPE_VIDEO.FOLLOWING)}
            >
                <Text
                    style={
                        typeVideo === ENV.TYPE_VIDEO.FOLLOWING
                            ? styles.active
                            : styles.inactive
                    }
                >
                    Siguiendo
                </Text>
            </Pressable>
            <Text> | </Text>
            <Pressable
                onPress={() => onChangeTypeVideo(ENV.TYPE_VIDEO.FOR_YOU)}
            >
                <Text
                    style={
                        typeVideo === ENV.TYPE_VIDEO.FOR_YOU
                            ? styles.active
                            : styles.inactive
                    }
                >
                    Para ti
                </Text>
            </Pressable>
        </SafeAreaView>
    );
}