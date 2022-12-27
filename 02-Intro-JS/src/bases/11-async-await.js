// PROMISE

// const getImagenPromise = () => {
//     return new Promise( (resolve, reject) =>{
//         resolve('https://asdf')
//     })
// }

// getImagenPromise().then(console.log);

// ASYNC AWAIT
const getImage = async () => {
    try {
        const api_key = 'pD0RphKn99UXJMPCQfgiIUIKw36Euc3z';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
        const {data} = await resp.json();

        const {url} = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        //manejo del error
        console.log(error);
    }
}

getImage();



// peticion
//     .then( resp => resp.json()) 
//     .then(({data}) => {
//         // console.log(data.images.original.url)
//         const {url} = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append(img);
//     })
//     // resp.json().then(data => {
//     //     console.log(data);
//     // })
// .catch(console.warn);