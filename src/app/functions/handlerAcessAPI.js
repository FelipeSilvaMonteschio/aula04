'use server'
const url = 'https://aula-17-10-server.vercel.app'


// autenticação
const getUserAuthenticated = async (user) => {
try{
    const resposeOfApi = await fetch(url + "/user/authenticated", 
    {   method:"POST",
        headers:{ "Content-Type":"Application/json"},
        body: JSON.stringify(user)
    }
);
const userAuth = await resposeOfApi.json();
return userAuth
}catch{
    return null
}
}

//lista de usuarios
const getUsers = async () => {
    try {
        const resposeOfApi = await fetch(url + "/users",{
            next: { revalidate: 10}
        })
        const ListaUsers = resposeOfApi.json()

        return ListaUsers
    }catch {
        return null
    }
}

export { getUsers, getUserAuthenticated };