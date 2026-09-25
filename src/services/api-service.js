const API_URL = 'http://127.0.0.1:8000';
const TOKEN = '2b91d439d909018447820d6ccb05c2acbd39d31c';

export default class API{
    static async loginUser(body){
       
        const response = await fetch(
            `${API_URL}/auth/`,
                {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },                        
                        body:JSON.stringify(body)

                    }
                );

                console.log('Status:', response.status);

                if (!response.ok) {
                    return null;
                }

                return await response.json();
               
            }
    static async fetchMovies(){
       
        const response = await fetch(
            `${API_URL}/api/movies/`,
                {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Token ${TOKEN} `,
                        }                    }
                );

                console.log('Status:', response.status);

                if (!response.ok) {
                    return null;
                }

                return await response.json();
               
            }


    static async getMovie(movie_id){
       
        const response = await fetch(
            `${API_URL}/api/movies/${movie_id}/`,
                {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Token ${TOKEN} `,
                        }                    }
                );

                console.log('Status:', response.status);

                if (!response.ok) {
                    return null;
                }

                return await response.json();
               
            } 

    static async rateMovie(movie_id,body){
       
        const response = await fetch(
            `${API_URL}/api/movies/${movie_id}/rate_movie/`,
                {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Token ${TOKEN} `,
                        }  ,
                        body:JSON.stringify(body)
                  }
                );

                console.log('Status:', response.status);

                if (!response.ok) {
                    return null;
                }

                return await response.json();
               
            } 


    static async updateMovie(movie_id,body){
       
        const response = await fetch(
            `${API_URL}/api/movies/${movie_id}/`,
                {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Token ${TOKEN} `,
                        },
                        body:JSON.stringify(body)
                    }
                );

                console.log('Status:', response.status);

                if (!response.ok) {
                    return null;
                }

                return await response.json();
               
            } 
    static async createMovie(body){
       
        const response = await fetch(
            `${API_URL}/api/movies/`,
                {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Token ${TOKEN} `,
                        },
                        body:JSON.stringify(body)
                    }
                );

                console.log('Status:', response.status);

                if (!response.ok) {
                    return null;
                }

                return await response.json();
               
            } 
    static async removeMovie(movie_id){
       
        const response = await fetch(
            `${API_URL}/api/movies/${movie_id}/`,
                {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Token ${TOKEN} `,
                        },
                    }
                );

                console.log('Status:', response.status);

                if (!response.ok) {
                    return false;
                }

                return true;
               
            }         

    
}