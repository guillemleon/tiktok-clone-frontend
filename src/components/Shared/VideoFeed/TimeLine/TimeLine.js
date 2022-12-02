import React from 'react';
import { View } from "react-native";
import { styles } from "./TimeLine.styles";

export function TimeLine(props) {
    const { status } = props;

    const totalTime = status.playableDurationMillis;
    const currentTime = status.positionMillis;
    const currentPercentage = (currentTime * 100) / totalTime;

    const lineStyle = {
        width: `${currentPercentage}%`
    }

    return (
        <View
            style={[styles.content, lineStyle]}
        />
    );
}