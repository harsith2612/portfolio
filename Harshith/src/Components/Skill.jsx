

const Skill=({skillInfo})=>{
    return(
        <button className="px-3 py-2 rounded-lg border-2">
            {skillInfo.data}
        </button>
    )
}

export default Skill;