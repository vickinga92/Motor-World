const path = require('path');
const { v4: uuidv4 } = require('uuid');

const subirArchivos = (files, extensionesValidas = ['png','jpg','jpeg','gif', 'webp']) => {

    const fileKeys = Object.keys(files);
    let images = [];

    return new Promise((resolve, reject) => {

        fileKeys.forEach(key =>  {        

            const image  = files[key];
            const nombreCortado = image.name.split('.');
            const extension = nombreCortado[ nombreCortado.length - 1 ];

            // Validar la extension
            if ( !extensionesValidas.includes( extension ) ) {
                return reject({message:`La extensión ${ extension } no es permitida - ${ extensionesValidas }`});
            }
            
            const nombreTemp = uuidv4() + '.' + extension;
            images.push(nombreTemp);
            
            const uploadPath = path.join( __dirname, '../uploads', nombreTemp );
            

            image.mv(uploadPath, (err) => {
                if (err) {
                    reject({message: err});
                }              
            });     
            
        });     
        resolve(images);
    });


}

module.exports = {
    subirArchivos
}