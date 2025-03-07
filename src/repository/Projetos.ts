import conn from "@/config/db";
export default class Projetos{


    async getDemoProjetos(){
        return await conn.query("SELECT  id, titulo, descricao, star, keywords FROM  projetos")
    }

    async getProjectById(id:string){
        return await conn.query("SELECT  *  FROM  projetos WHERE id = $1",[id])
    }


}