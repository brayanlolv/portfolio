import Robot from '@/assets/robot.png'

export default function WorkingAt(){
    return(
    <div className="max-w-96 text-center pt-6">
       <h1 >Ops, esta meio fazio aqui!</h1>
        <h1>mas nossa equipe esta trabalhando nisso agora</h1>
        <img src={Robot.src}></img>        
    </div>)
}