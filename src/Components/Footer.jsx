import { FaRegCopyright } from "react-icons/fa";
function Footer (){
    return(
        <div className="footer-container mt-16 p-3 text-white font-normal text-xs flex flex-col items-center justify-center">
            <div className="flex gap-1">
            <FaRegCopyright />
            <p className="">2025 - Made by <span className="text-orange-600">Yash Vardhan Nautiyal</span>.</p>
            </div>
            <div className="">
                <p>Built with ReactJs, Web3Forms & TailwindCss.</p>
            </div>
        </div>
    )
}
export default Footer;