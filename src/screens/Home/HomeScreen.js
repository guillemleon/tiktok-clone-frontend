import React, { Fragment, useState } from 'react';
import { Text } from "react-native-elements";
import { Header, ForYouVideos, FollowingVideos } from "../../components/Home";
import { ENV } from "../../utils";

export function HomeScreen() {

    const [typeVideos, setTypeVideos] = useState(ENV.TYPE_VIDEO.FOR_YOU);

    return (
        <Fragment>
            <Header typeVideo={typeVideos} setTypeVideo={setTypeVideos} />
            {typeVideos === ENV.TYPE_VIDEO.FOR_YOU ? (
                <ForYouVideos />
            ) : (
                <FollowingVideos />
            )}
        </Fragment>
    );
}