
const{ gql } = require('apollo-server');

const typeDefs= gql`
    type typeOferta {
        id: String
        Status: Boolean
        Sucursal: String
        Articulo: String
        Descripcion: String
        Costo: Float
        Precio: Float
        Oferta: Float
    }

    type Query {
        ofertas: [typeOferta],
        ofertasLimit(Limit: Int): [typeOferta]
    }
`;

module.exports = typeDefs;