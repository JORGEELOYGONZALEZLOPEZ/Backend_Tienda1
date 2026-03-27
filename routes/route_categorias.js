const categoriacontroller = require('../controller/controller_Categorias');

module.exports = (app) => {
        app.get('/api/categorias', categoriacontroller.list);
        app.get('/api/categoria/:nombre', categoriacontroller.find);
        app.post('/api/categoria/nombre/:nombre', categoriacontroller.create);
        app.put('/api/categoria/:id', categoriacontroller.update);
        app.delete('/api/categoria/:id', categoriacontroller.delete);
};