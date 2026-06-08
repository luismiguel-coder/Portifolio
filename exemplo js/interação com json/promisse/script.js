const btn = document.querySelector('#carregar');
    btn.addEventListener('click', async () => {
        const [u,p] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
            fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
           
        ]);
        console.log(u, p)
    });

