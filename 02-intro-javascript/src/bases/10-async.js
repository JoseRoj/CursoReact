const getImagenPromesa = () => new Promise(resolve => resolve('https://asdasd.com'));

getImagenPromesa().then(console.log);
const api_key = 'QYHdzR3SvrJF4LLN1L21nrYimyWjKmfW';



const getImagen = async () => {
    try {
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
        const { data } = await resp.json();
        console.log(data);
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    } catch(error) {
        console.log(error);
    }
};

getImagen();