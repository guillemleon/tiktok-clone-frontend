import {Platform, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    content: {
        height: "100%",
        justifyContent: "space-between",
        marginHorizontal: 15
    },
    form: {
        marginTop: Platform.OS === "ios" ? 20 : 70
    },
    btnContainer: {
        marginBottom: 20
    }
})