import { ObjectSchema } from "realm"

const UsuarioSchema: ObjectSchema = {
    name: "Usuario",
    primaryKey: "_id",
    properties: {
        _id: "int",
        idApi: "int?",
        nome: "string",
        email: "string",
        sincronizado: {type: "bool", default: false},
    },
}

export default UsuarioSchema;