function Navbar() {
  return (
    <nav className="header-navbar navbar-expand-md navbar navbar-with-menu fixed-top black_bck navbar-border">
      <div className="navbar-wrapper">
        <div className="navbar-header">
          <ul className="nav navbar-nav flex-row">
            <li className="nav-item mobile-menu d-md-none mr-auto">
              <a className="nav-link nav-menu-main menu-toggle hidden-xs">
                <i className="ft-menu font-large-1" />
              </a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="dashboard.html">
                <img
                  className="brand-logo img-fluid logo ml-0"
                  alt="stack admin logo"
                  src="images/logo-bg.png"
                />
              </a>
            </li>
            <li className="nav-item d-md-none">
              <a
                className="nav-link open-navbar-container"
                data-toggle="collapse"
                data-target="#navbar-mobile"
              >
                <i className="fa fa-ellipsis-v" />
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-container content">
          <div className="collapse navbar-collapse" id="navbar-mobile">
            <ul className="nav navbar-nav mr-auto float-left"></ul>
            <ul className="nav navbar-nav float-right">
              <li className="dropdown dropdown-user nav-item">
                <a
                  className="dropdown-toggle nav-link dropdown-user-link"
                  data-toggle="dropdown"
                >
                  <span className="avatar avatar-online">
                    <img
                      src="/app-assets/images/portrait/small/avatar-s-1.png"
                      alt="avatar"
                    />
                  </span>
                  <span className="user-name">
                    Jogn Max <i className="fas ml-1 fa-angle-down" />
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="profile.html">
                    <i className="fas fa-user-circle" />
                    Profile
                  </a>
                  <a
                    className="dropdown-item"
                    href="#_"
                    data-toggle="modal"
                    data-target="#logout"
                  >
                    <i className="fas fa-sign-out-alt" />
                    Logout
                  </a>
                </div>
              </li>
              <li className="nav-item d-none d-md-block">
                <a className="nav-link nav-menu-main menu-toggle hidden-xs">
                  <i className="ft-menu" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
