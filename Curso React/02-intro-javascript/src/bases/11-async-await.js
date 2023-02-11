
//const getImagePromesa = () => new Promise( resolve =>('https://hsahdiasdoad.com'))
//getImagePromesa().then(console.log);

const getImagen = async() => { //Promesa con Async

    try{
        const apikey ='qXv03QWgUBLzn2BVpznwtCJvpN4gTDOQ';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
        const { data }= await resp.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error){
        //Manejo del error
        console.error(error)
    }

    
}

getImagen();





// const apikey ='qXv03QWgUBLzn2BVpznwtCJvpN4gTDOQ';

// //Fetch API ya viene instalado en los navegadores

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);

// peticion
//     .then( resp => resp.json() )
//     .then( ({data}) => {
//         const { url } = data.images.original;
//         //console.log(data.images.original.url)
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);
    
//     })
//     .catch( console.warn );