const Header: React.FC = () =>{
    return(
        <div className="flex items-center p-4 bg-blue-500 justify-between">
            <div>
                <img src="" alt="logo"/>
            </div>
            <ul className="flex gap-5 ">
            <li className="text-black hover:text-slate-600 list-none cursor-pointer">Rooms</li>
            <li className="text-black hover:text-slate-600 list-none cursor-pointer">Mansion</li>
            <li className="text-black hover:text-slate-600 list-none cursor-pointer">Country Side</li>
            <li className="text-black hover:text-slate-600 list-none cursor-pointer">Beach Front</li>
            </ul>
            <div className="flex items-center gap-2 bg-white rounded-lg">
                <input
                type="text"
                placeholder="Search"
                className="px-4 py-2  border-none outline-none rounded-lg focus:ring-0  focus:ring-transparent"
                />
                <button className="px-4 py-2 text-white bg-slate-800 rounded-lg hover:bg-slate-700 ">
                Search
                </button>
            </div>
            <div className="flex items-center gap-4">
                <a className="px-4 py-2 text-white bg-slate-800 rounded-lg hover:bg-slate-700 cursor-pointer ">
                Sign In
                </a>
                <a className="px-4 py-2 text-white bg-slate-800 rounded-lg hover:bg-slate-700 cursor-pointer">
                Sign Up
                </a>
            </div>
        </div>

    )
}
export default Header;