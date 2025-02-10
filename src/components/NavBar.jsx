
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"




const NavBar = () => {
  return (
   <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img
        className="mx-2 w-10"
   
        
        />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl" >
      <a href="https://www.linkedin.com/in/lewis-karanu-a14aa62b9/" target="_blank">
      <FaLinkedin />
      </a>
      <a href="https://github.com/ranu01" target="_blank">
      <FaGithub />
      </a>
        {/* <FaSquareXTwitter />
        <FaInstagram /> */}
    </div>

   </nav>
  )
}

export default NavBar
