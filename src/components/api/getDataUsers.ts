import axios from "axios";

const getUers = async (limit:number,skip:number) => {

   let response = await axios.get(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)

   return response.data.users;

}

export default getUers;