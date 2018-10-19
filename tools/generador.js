
const casual = require ('casual');

casual.define('defineOferta', function(){
    return {
        id: casual.uuid,
        Status: casual.boolean,
        Sucursal: casual.random_element(['Victoria', 'Zaragoza', 'Oluta', 'Jáltipan']),
        Articulo: `0101${casual.integer(from = 0, to = 20)}`,
        Descripcion: casual.short_description,
        Costo: casual.double(from = 10, to = 20),
        Precio: casual.double(from = 30, to = 40),
        Oferta: casual.double(from = 20, to = 30)
    };
});

function generadorOferta(n) {
    var data = [];
    for (var i=1; i<=n; i++){
        data.push(casual.defineOferta)
    }
    return data;
}

module.exports = generadorOferta;