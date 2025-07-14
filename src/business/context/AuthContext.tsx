import { createContext, useEffect, useState } from "react";
import { IAuthContextData } from "../models/usuario/interfaces/IAuthContextData";
import { IUsuario } from "../models/usuario/interfaces/IUsuario";
import { getUsuarioLocal, salvarOuAtualizarUsuario } from "../service/UsuarioService";


const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [usuario, setUsuario] = useState<IUsuario | null>(null);

    useEffect(() => {
        const carregarUsuario = async () => {
            const local = await getUsuarioLocal()

            if(local){
                setUsuario(local);
            };
            carregarUsuario();
        }
    }, []);

    const login = async (nome: string, email: string) => {
        const usu = await salvarOuAtualizarUsuario(nome, email);
    }
    return (
        <AuthContext.Provider value={{ usuario, login}}>
            {children}
        </AuthContext.Provider>
    );
};