// Los enumerados permiten definir un conjunto de constantes con nombres reconocibles
// Orientacion para Fotografías


enum PhotoOrientation {
    Landscape = 0, // 0   // asignación explícita
    Portrait = 1, // 1
    Square = 2, // 2
    Panorama = 3 // 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('Landscape', landscape);
console.log('Landscape', PhotoOrientation[landscape]);

enum PictureOrientation {
    Landscape = 10, // 10   //inicializar la asignación
    Portrait, // 11
    Square, // 12
    Panorama // 13
}
console.log('Portrait: ', PictureOrientation.Portrait);
console.log('Panorama: ', PictureOrientation.Panorama);

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'usa',
    España = 'esp'
}

const country: Country = Country.España;
console.log('Country: ', country);