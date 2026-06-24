import Ranking from "../../components/Ranking";
import Matchs_list from "../../components/Matchs_list";

function Pretournament_page(){
    return(
        <div className="flex justify-around">
            <Ranking />
            <Matchs_list /> 
        </div>
        
    )
}

export default Pretournament_page