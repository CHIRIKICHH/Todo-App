export function Loading(){
    return(
        <div className="absolute bg-slate-400/[.50] opacity-100 w-screen h-screen ">
            <div className="absolute bg-white rounded-lg shadow-xl font-bold text-center py-[3%] top-[45%] left-[45%] min-w-[10rem] min-h-[3rem]">
                Loading...
            </div>
        </div>
    );
}