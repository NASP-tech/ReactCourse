const api_key = 'pD0RphKn99UXJMPCQfgiIUIKw36Euc3z';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);


peticion
    .then( resp => resp.json()) 
    .then(({data}) => {
        // console.log(data.images.original.url)
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    // resp.json().then(data => {
    //     console.log(data);
    // })
.catch(console.warn);