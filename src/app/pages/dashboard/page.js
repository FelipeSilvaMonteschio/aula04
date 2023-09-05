
import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListaUsers from "@/app/componentes/ListaUsers";

export default async function Dashboard() {
   const users = getUsers()



    return (
        <div>
            <Suspense fallback={<p>Carregando ...</p>}>
                <ListaUsers users={users} />
            </Suspense>
            
        </div>
    );
};