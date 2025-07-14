import Realm from "realm";

export interface IUsuario {
    _id: number;
    idApi: number;
    nome: string;
    email: string;
    sincronizado: boolean
}

export type IUsuarioObject = Realm.Object<IUsuario>;