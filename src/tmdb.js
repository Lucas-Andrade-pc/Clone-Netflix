const API_KEY = '4c56117fc51c27d062fc540fc8f21c7e';
const API_BASE = 'https://api.themoviedb.org/3';



const basciFetch = async(endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json();
    return json;
}


export default {
    getHomeList: async () =>{
        return [
            {
                slug:'originals',
                title:'Originais do Netflix',
                items: await basciFetch(`/discover/tv?with_network=213&language=pt-br&api_key=${API_KEY} `)
            },
            {
                slug:'trending',
                title:'Recomendados para Voce',
                items: await basciFetch(`/trending/all/week?language=pt-br&api_key=${API_KEY} `)
            },
            {
                slug:'toprated',
                title:'Em Alta',
                items: await basciFetch(`/movie/top_rated?language=pt-br&api_key=${API_KEY} `)
            },
            {
                slug:'action',
                title:'Ação',
                items:await basciFetch(`/discover/movie?with_genres=28&language=pt-br&api_key=${API_KEY} `)
            },
            {
                slug:'comedy',
                title:'Comédia',
                items:await basciFetch(`/discover/movie?with_genres=35&language=pt-br&api_key=${API_KEY} `)
            },
            {
                slug:'horror',
                title:'terror',
                items:await basciFetch(`/discover/movie?with_genres=27&language=pt-br&api_key=${API_KEY} `)
            },
            {
                slug:'romance',
                title:'Romance',
                items:await basciFetch(`/discover/movie?with_genres=10749&language=pt-br&api_key=${API_KEY} `)
            },
            {
                slug:'Documentary',
                title:'Documentarios',
                items:await basciFetch(`/discover/movie?with_genres=99&language=pt-br&api_key=${API_KEY} `)
            }
        ]
    },
    getMovieInfo: async (movieId,type) =>{
        let info ={}
            if(movieId){
                switch(type){
                    case 'movie':
                        info = await basciFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                    break;
                    case 'tv':
                        info = await basciFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                    break;
                    default:
                        info = null

                }
            }
            return info
        
    }
}