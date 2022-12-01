import React from 'react';
import {Pressable, View} from "react-native";
import { Text, Input, Image } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import {styles} from "./VideoData.styles";

export function VideoData(props) {

    const { formik } = props;

    const selectedImageVideo = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [9,16],
            quality: 1
        });

        if(!result.canceled) {
            formik.setFieldValue('imageUri', result.assets[0].uri)
        }
    }

    return (
        <View style={styles.content}>
            <Input
                placeholder="Describe tu video"
                containerStyle={styles.inputContainer}
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.input}
                multiline
                onChangeText={text => formik.setFieldValue("description", text)}
            />

            <Pressable
                style={styles.imageContainer}
                onPress={selectedImageVideo}
            >
                <Image
                    style={styles.image}
                    source={{ uri: formik.values.imageUri || null }}
                ></Image>
                <Text style={styles.imageText}>Seleccionar portada</Text>
            </Pressable>
        </View>
    );

}