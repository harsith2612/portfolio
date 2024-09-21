const Cards=({prj})=>{

    return(
        <div className="p-2 rounded-xl shadow-2xl space-y-2 pe-2">
            <div className="">
                <img className="w-full " src="https://react-tailwindcss-portfolio.netlify.app/static/media/web-project-2.f0108702.jpg" alt="prj"  />
            </div>
            <div className="flex justify-center">
                <p className=" font-medium">
                    <a href={prj.link} target="_blank" className="">{prj.name}</a>
                </p>
            </div>
            <div className="flex justify-center">
                <p className="text-sm">
                 Associate with {prj.Associate}
                </p>
            </div>
        </div>
    )
}


export default Cards;