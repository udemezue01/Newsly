import axios from 'axios';

const token  = `46afb473359e4504b833abf4cb8ef172`
export const HTTP = axios.create({

    
    baseURL: `https://newsapi.org/v2/`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

 
