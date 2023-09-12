'use server'
const responseIsuserAuth = [
    {   name : "felipe",
        email : "felipe@teste",
        password : "1234",
        token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    },
    {   
        name : "natasha",
        email : "natasha@teste",
        password : "1234",
        token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    },
    {   name : "karol",
        email : "karol@teste",
        password : "1234",
        token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    },
    {   name : "marcelo",
        email : "marcelo@teste",
        password : "1234",
        token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    },
]

const getUserAuthenticated = (userLogin) => {
let Userauth = {}


    responseIsuserAuth.map((user) =>{
        if(user.email === userLogin.email && user.password === userLogin.password){
            Userauth= user
        }
    })
    return Userauth
}
const getUsers = () =>{
    return responseIsuserAuth

}
export { getUsers, getUserAuthenticated };