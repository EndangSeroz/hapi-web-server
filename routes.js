const routes = [
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = "stranger" } = request.params;
            const { lang } = request.query;

            if (lang === 'id') {
                return `Hi, ${name}`;
            }

            return `Hello, ${name}`;
            //panggil localhost:5000/hello/endang?lang=id
        },
    },
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const { username, password } = request.payload;
            return `Welcome ${username}`;
        },
    },
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            const { name, location } = request.query;
            return `Hello, ${name} from ${location}`;
            //panggil localhost:5000?name=...&location=...
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return `Halaman tidak dapat diakses dengan method tersebut`;
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return `About page`;
        }, 
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return `Halaman tidak dapat diakses dengan method`;
        }, 
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return `Halaman tidak ditemukan`;
        }, 
    },
]

module.exports = routes;