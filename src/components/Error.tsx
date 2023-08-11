export function Error(err : string){
    return(
        <div className="absolute bg-slate-400/[.50] opacity-100 w-screen h-screen ">
            <div className="absolute bg-white rounded-lg shadow-xl text- font-bold text-center py-[3%] top-[45%] left-[45%] min-w-[10rem] min-h-[3rem]">
                Error!
                <div>
                    {err}
                </div>
            </div>
        </div>
    )
}