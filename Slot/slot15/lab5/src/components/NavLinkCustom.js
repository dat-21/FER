// import React, { useState, useRef } from "react";
// import { NavLink } from "react-router-dom";
// import { Nav } from "react-bootstrap";
// import "../../src/design/GlobalStyles.css";
// function NavLinkCustom({ to, children }) {
//   const [hovered, setHovered] = useState(false);
//   const timerRef = useRef();

//   const handleMouseEnter = () => {
//     if (timerRef.current) clearTimeout(timerRef.current);
//     setHovered(true);
//   };

//   const handleMouseLeave = () => {
//     timerRef.current = setTimeout(() => {
//       setHovered(false);
//     }, 500); // 500ms delay sau khi rời chuột
//   };

//   return (
//     <Nav.Link
//       as={NavLink}
//       to={to}
//       className={`nav-link-custom${hovered ? " nav-link-hover" : ""}`}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       {children}
//     </Nav.Link>
//   );
// }

// export default NavLinkCustom;
