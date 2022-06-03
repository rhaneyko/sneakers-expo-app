import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
    SplashPage: undefined
    Profile?: {
        name: string
    }
    SplasPage: undefined
    RegisterPage: undefined
    LoginPage: undefined
    HomePage: undefined
    CartPage: undefined
    DrawerPage: undefined
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>
