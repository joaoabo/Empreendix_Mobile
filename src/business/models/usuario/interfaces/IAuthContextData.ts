import { IUsuario } from "./IUsuario";
 
export interface IAuthContextData{
    usuario: IUsuario | null;
    login: (nome: string, email: string) => Promise<void>;
}