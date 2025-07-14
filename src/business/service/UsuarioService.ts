import getRealm from "../../infrastructure/realm";
import { IUsuario, IUsuarioObject } from "../models/usuario/interfaces/IUsuario";


export const salvarOuAtualizarUsuario = async (nome: string, email: string): Promise<IUsuario> => {
    const realm = await getRealm();
    const id = 1;
    
    let usuario: IUsuario

    realm.write(() => {
        usuario = realm.create("Usuario", {_id: id, idApi: 0, nome, email, sincronizado: false}, Realm.UpdateMode.Modified);
    });
    return usuario!;
}

export const getUsuarioLocal = async (): Promise<IUsuario | null> => {
    const realm = await getRealm();
    const usu = realm.objectForPrimaryKey("Usuario", 1);
    return usu ? { ...usu.toJSON() as unknown as IUsuario } : null
}



// const criarUsu = async (data: IUsuario) => {
//     const realm = await getRealm();

//     realm.write(() => {
//         criarUsuario = realm.create("Usuario", data)
//     });

//     return criarUsuario;
// };

// export default criarUsu;