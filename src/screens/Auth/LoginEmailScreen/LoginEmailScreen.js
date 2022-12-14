import React, {useState} from 'react';
import { View, SafeAreaView } from "react-native";
import { Input, Button } from "react-native-elements";
import { styles } from "./LoginEmailScreen.styles";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./LoginEmailScreen.data";
import {Auth} from "../../../api";
import {useAuth} from "../../../hooks";

const auth = new Auth();

export default function LoginEmailScreen() {
    const [showPassword, setShowPassword] = useState(false)
    const { login } = useAuth();

    const onShowPassword = () => setShowPassword(prevState => !prevState)

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                const response = await auth.login(formValue);
                login(response)
            } catch (error) {
                console.error(error)
            }
        }
    })

    return (
        <SafeAreaView style={styles.content}>
            <View style={styles.form}>
                <Input
                    placeholder="Email"
                    autoCapitalize="none"
                    onChangeText={text => formik.setFieldValue("email", text)}
                    errorMessage={formik.errors.email}
                />
                <Input
                    placeholder="Contraseña"
                    secureTextEntry={!showPassword}
                    rightIcon={{
                        type: "material-community",
                        name: showPassword ? "eye-off-outline" : "eye-outline",
                        onPress: onShowPassword
                    }}
                    onChangeText={text => formik.setFieldValue("password", text)}
                    errorMessage={formik.errors.password}
                />
            </View>

            <Button
                title="Iniciar sesión"
                containerStyle={styles.btnContainer}
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}
            />
        </SafeAreaView>
    );
}
