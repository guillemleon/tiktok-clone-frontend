import React, { useRef, useState } from 'react';
import { View, Pressable } from "react-native";
import { Text } from "react-native-elements";
import { styles } from "./VideoFeed.styles";
import { Video } from "expo-av";

export function VideoFeed(props) {

    const { item } = props;
    const [isStarted, setIsStarted] = useState(false);
    const video = useRef(null);

    const startPauseVideo = () => {
        setIsStarted(prevState => !isStarted);
    }

    return (
        <Pressable
            style={styles.content}
            onPress={startPauseVideo}
        >
            {/* VIDEO... */}
            <Video
                ref={video}
                style={styles.video}
                source={{ uri: item.video }}
                resizeMode="cover"
                isLooping
                shouldPlay={isStarted}
            />

            <View style={styles.blockContent}>
                <View style={styles.blockLeft}>
                    <Text>{item.user_data.username}</Text>
                    <Text>{item.description}</Text>
                </View>
                <View style={styles.blockRight}>
                    <Text>Profile</Text>
                    <Text>Likes</Text>
                    <Text>Comments</Text>
                    <Text>Share</Text>
                </View>
            </View>

            {/* TODO: TIME LINE */}
        </Pressable>
    );
}