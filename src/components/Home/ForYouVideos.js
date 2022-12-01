import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, FlatList, Dimensions, View } from "react-native";
import { Text } from "react-native-elements";
import { VideoFeed } from "../Shared";
import { Video } from "../../api";
import { useAuth } from "../../hooks";
import { ENV } from "../../utils";

const { height } = Dimensions.get("window");
const videoController = new Video();

export function ForYouVideos() {

    const [videos, setVideos] = useState(null);
    const { accessToken } = useAuth();

    useEffect(() => {
        if (accessToken) {
            (async () => {
                try {
                    const response = await videoController.getAllVideos(accessToken);
                    setVideos(response);
                } catch (error) {
                    console.error(error);
                }
            })()
        }
    }, [accessToken]);

    const onViewChangeRef = useRef(({ viewableItems }) => {
        console.log(viewableItems[0].index)
        console.log("AAAAAAAAA")
    })

    if (!videos) return null;

    return (
        <FlatList
            data={videos}
            decelerationRate="fast"
            keyExtractor={(_, index) => {
                index.toString()
            }}
            renderItem={({ item, index }) => (
                <VideoFeed
                    index={index}
                    item={item}
                />
            )}
            removeClippedSubviews={false}
            showsVerticalScrollIndicator={false}
            snapToInterval={height - ENV.TAB_MENU_HEIGHT}
            onViewableItemsChanged={onViewChangeRef.current}
            viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
            onScrollToIndexFailed={() => {
            }}
        />
    );
}