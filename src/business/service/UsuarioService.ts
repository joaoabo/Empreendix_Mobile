import getRealm from "../../infrastructure/realm";
import { IUsuario, IUsuarioObject } from "../models/usuario/interfaces/IUsuario";

let criarUsuario: IUsuarioObject;

const criarUsu = async (data: IUsuario) => {
    const realm = await getRealm();

    realm.write(() => {
        criarUsuario = realm.create("Usuario", data)
    });

    return criarUsuario;
};

export default criarUsu;