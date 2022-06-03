import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import { authService } from '../Services/authServices';

export interface AuthData {
    auth: { 
        token: string,
        email: string,
        name: string,
    }
    
} 
interface AuthContextData {
    authData?: AuthData;
    signIn(email: string, password: string) : Promise<AuthData>;
    signOut() : Promise<void> ;
}
export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData,
);

export const AuthProvider : React.FC = ({children}) => {
    const [authData, setAuth] = useState<AuthData>();

    async function signIn(email: string, password: string) : Promise<AuthData> {
        try{
        const auth = await authService.signIn(email, password);

        setAuth(authData);

        return auth;
    } catch(error) {
        Alert.alert(error.message)
    }
    async function signOut(): Promise<void> {
        setAuth(undefined)
        
        return;
    }
}

    return(
         <AuthContext.Provider 
           value={{ authData, signIn, signOut }}>
              {children}
         </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}
