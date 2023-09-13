
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import "./TextAnalyzerStyle.css";
function Navbar({ darkMode, toggleDarkMode }){

    return(

        <div>

             <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>

     

  <div class="container-fluid">

    <a class="navbar-brand" href="#">Text Utils</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

      <span class="navbar-toggler-icon"></span>

    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">

          <Link className="nav-link active" to="/">Home</Link>

        </li>

          <li className="nav-item">

            <Link className="nav-link active" to="/textutil"> About Text Utils</Link>

          </li>

      </ul>

      <div class="form-check form-switch">

  <input

            className="form-check-input"

            type="checkbox"

            id="flexSwitchCheckChecked"

            checked={darkMode}

            onChange={toggleDarkMode}

          />

          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">

            Enable Dark Mode

          </label>

</div>

    </div>

  </div>

</nav>
        </div>
    )
}
export default Navbar;