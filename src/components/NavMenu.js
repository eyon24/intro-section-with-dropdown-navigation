const NavMenu = () => {
  return (
    <div className="menu-container">
      <div className="menu-links">
        <span className="link">Features</span>
        <span className="link">Company</span>
        <span className="link">Careers</span>
        <span className="link">About</span>
      </div>
      <div className="menu-login">
        <span className="link">Login</span>
        <button className="register">Register</button>
      </div>
    </div>
  );
};

export default NavMenu;
