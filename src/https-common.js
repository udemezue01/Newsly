import axios from 'axios';


const token = ''
const HTTP = axios.create({
    baseURL: `https://api.hatchways.io/`,
    // headers: {
    //   Authorization: 'Bearer {token}'
    // }
  })

  export default HTTP