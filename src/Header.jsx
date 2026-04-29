import "./Header.css"
function Header() {
    return (
           <nav className="nav">
          <h2 className="logo"></h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
    )
}
export default Header