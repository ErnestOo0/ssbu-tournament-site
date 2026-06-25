import Ranking from "../../components/Ranking";
import Matchs_list from "../../components/Matchs_list";

function Pretournament_page(){
    return(
        <div className="flex justify-around">
            <div>
                <h2 className="text-center">Classement</h2>
                <Ranking />
            </div>
           <div>
                <h2 className="text-center">Matchs</h2>
                <Matchs_list /> 
           </div>
            
        </div>
        
    )
}

export default Pretournament_page