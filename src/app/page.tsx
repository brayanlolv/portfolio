import Projetos from "@/repository/Projetos";
import DemoCard from "@/components/DemoCard";
const projetosRepository = new Projetos;
export type projetosType = {
  id:string,
  titulo:string,
  descricao:string,
  keywords:string[],
  star:boolean
}
export default async function Home() {
  const demo = await projetosRepository.getDemoProjetos()
  return (<div className="">

        <h1 className="pl-4">Projetos</h1>
        {/* ta bom no taela grande */}
        {/* flex */}
        <div className="flex flex-wrap  gap-4 p-4 ">
          {demo.rows.filter((x:projetosType)=> x.star).map((row:projetosType)=>{
              return <DemoCard props={{
                titulo:row.titulo,
                descricao:row.descricao,
                link:row.id,
                keywords:row.keywords,
              }} />
            })}
           
        </div>

        <div className="m-auto ">
          <h2 >
            Quem sou ?
          </h2>
           <p className="indent-8">
            Olá, me chamo Brayan, estudante de ciência da computação no 5° periodo com experiências não formais em 
            programação web e  vivência no ramo de movelaria há 4 e fiz essa pagina para  compartilhar meus
            aprendizados, ideias e projetos. 
          </p>
          <p className="indent-8">Hoje em dia me aventuro no mundo do desenvolvimento de softwares, especialmente na area web,
            focando meus estudos em fullstack, onde encontrei
            o que quero fazer na vida, e busco acumular o maximo de conhecimento e experiência possivel para 
            me tornar um bom arquiteto de software.

            Sou muito aberto a aprendizado e não tenho medo de conhecer novas tecnologias,
            ja usei no frontend react, html, css e javascript puro, tailwind, bootstrap e no backend
            node e php onde me sinto confortavel com essas tecnologias, embora, ja tenha usado em situações especificas, ou 
            projetos academicos C, java ee, java se, python, flask, electron, next (nessa pagina mesmo) entre outras.
      
          </p>
             {/* tendo contato com projetos( leitura, criação de plano de corte e promob básico),
             produções(fitagem, acabamento etc..) e montagens de móveis como meio-oficial .  */}
        </div>
        <div className="h-[30vh]"></div>

        
    </div>
  );
}
