
const apikey ='qXv03QWgUBLzn2BVpznwtCJvpN4gTDOQ';

//Fetch API ya viene instalado en los navegadores

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);

peticion
    .then( resp => resp.json() )
    .then( ({data}) => {
        const { url } = data.images.original;
        //console.log(data.images.original.url)
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    
    })
    .catch( console.warn );