import Cards from "./Cards";
import {projectList} from "../Utilities/data"
const CardList=()=>{

    return(
        <div className="p-5 space-y-6 gap-5 md:grid md:grid-cols-3 ">
            { projectList.map((prj)=> <Cards key={prj.id} prj={prj}/>)}
           
        </div>
    )
}


export default CardList;