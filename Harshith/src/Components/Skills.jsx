import {skillList} from '../Utilities/data'
import Skill from './Skill';

const Skills=()=>{
    return(
        <div className="p-5 space-y-8">
            {/* <hr /> */}
            <div className="flex justify-center">
                <p className="text-xl font-medium">My Skills</p>
            </div>
            <div className="flex flex-wrap gap-4">
            {
                skillList.map((skillInfo)=><Skill key={skillInfo.id} skillInfo={skillInfo}/>)
            }
            </div>
        </div>
    )
}

export default Skills;