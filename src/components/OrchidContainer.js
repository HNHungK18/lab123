import { Orchids } from "../ListOfOrchids";
import OrchidCard from "./OrchidCard";
import OrchidModal from "./OrchidModal";
import { useState } from "react";
import '../css/OrchidContainer.css';
export default function OrchidContainer(){

  const [showModal, setShowModal] = useState(false);
  const [selectedOrchid, setSelectedOrchid] = useState(null);

  const handleShowDetail = (orchid) => {
    setSelectedOrchid(orchid);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOrchid(null);
  };

    return(
        <>
        <div className="card-container">
            {Orchids.map((orchid)=>(
                <OrchidCard key={orchid.id} orchid={orchid} onDetail={handleShowDetail}/>
            ))}
        </div>

        <OrchidModal show={showModal} orchid={selectedOrchid} onClose={handleCloseModal}/>
        </>
        
    );
}