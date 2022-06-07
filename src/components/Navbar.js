import earth from '../assets/earth.svg'
import user from '../assets/user.svg'

function Navbar() {
  return (
    <nav>
      <div className="nav--main-title">
        <img src={earth} alt="Earth" />
        <h1>Travel Journal of Uzbekistan</h1>
      </div>
      <div className="nav--user-icon">
        <a href="https://www.linkedin.com/in/ibrohimrasulov/" target="_blank" rel="noreferrer" >
          <img src={user} alt="user" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
