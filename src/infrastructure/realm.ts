import Realm from "realm";
import UsuarioSchema from "../business/models/usuario/Usuario";

const getRealm = async () => 
    await Realm.open({
        path: "dbrealm",
        schema: [
            UsuarioSchema
        ],
    })

export default getRealm;