<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand" href="#">
    <img
      src={logo}
      width="30"
      height="30"
      className="d-inline-block align-top"
      alt=""
      loading="lazy"
    ></img>
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto ">
      <li className="nav-item active ">
        <a className="nav-link text-white text-uppercase ml-5" href="#">
          Home &nbsp; <i className="fas fa-home"></i>
          <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link  text-white text-uppercase ml-5" href="#">
          news
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link  text-white text-uppercase ml-5" href="#">
          contact us
        </a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </div>
</nav>;
{
  /* start nav */
}
<Nav variant="tabs" className="nav nav-tabs" defaultActiveKey="#aboutPlace">
  {/* about place tab */}
  <NavItem>
    <NavLink href="#aboutPlace" role="tab" data-toggle="tab">
      About Place
    </NavLink>
  </NavItem>
  {/* review tab */}
  <NavItem>
    <NavLink href="#review" role="tab" data-toggle="tab">
      Review
    </NavLink>
  </NavItem>
  {/* map tab */}
  <NavItem>
    <NavLink href="#map" role="tab" data-toggle="tab">
      Map
    </NavLink>
  </NavItem>
</Nav>;
{
  /* end navs */
}
