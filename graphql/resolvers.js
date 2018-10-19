
const generadorOferta = require('../tools/generador');

const resolvers = {
    Query: {
        ofertas: () => generadorOferta(5),
        ofertasLimit: (_,args) => {
            return generadorOferta(args.Limit);
        }
    },

};

module.exports = resolvers;