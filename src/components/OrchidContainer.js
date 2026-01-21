import { Orchids } from "../ListOfOrchids";
import OrchidCard from "./OrchidCard";
import '../css/OrchidContainer.css'
export default function OrchidContainer(){
    return(
        <div className="card-container">
            {Orchids.map((orchid)=>(
                <OrchidCard key={orchid.id} orchid={orchid}/>
            ))}
        </div>
    );
}