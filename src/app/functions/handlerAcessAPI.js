'use server'
const url = 'https://aula-17-10-server.vercel.app'

const getUserAuthenticated = async (user) => {
    const resposeOfApi = await fetch(url + "/user/authenticated", 
    {   method:"POST",
        headers:{ "Content-Type":"Application/json"},
        body: JSON.stringify(user)
    }
);
const userAuth = await resposeOfApi.json();
return userAuth

}
const getUsers = () =>{


}
export { getUsers, getUserAuthenticated };