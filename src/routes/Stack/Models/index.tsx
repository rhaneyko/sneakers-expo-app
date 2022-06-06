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
    SavedPage: undefined
    ProfilePage: undefined,
    ProductPage: undefined,
    ProductDetailPage: undefined,
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>
