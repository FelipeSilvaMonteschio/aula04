import { getUsers } from "@/app/functions/handlerAcessAPI"

export default async function Dashboard() {
   const Lista = getUsers()
    return (
        <div>
            <h1>Lista</h1>


            {Lista.map((user) => 
            <div>
                <h2> {user.name}</h2>
                <h4> {user.password}</h4><br/><br/>
            </div>
            )}
            
        </div>
    );
};