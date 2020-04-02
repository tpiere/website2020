import Link from 'next/link';
import { colors } from '../styles/colors';
import { FaHome } from "react-icons/fa";

const linkStyle = {
  marginRight: 15
};

const headerStyle = {
  borderBottom: '1px solid #E5E5E5',
  marginBottom: 30,
  borderBottom: `2px solid ${colors['$mie-beige']}`,
  boxShadow: `0px 2px 11px ${colors['$gray-darker']}`,
  padding: '0.5em',
  background: `${colors['$mie-dark-blue']}`,
  color: colors['$mie-beige'],
  textShadow: '0 3px 3px #222',
  fontWeight:500
};

const Header = () => (
  <header style={headerStyle}>
    <Link href='/'>
    <a style={{
      color:colors['$mie-beige'], 
      textDecoration:'none'
      }}>
      <h1 style={{
      color:colors['$mie-beige'],
      fontSize: '2.5rem',
      fontWeight:500
      }}>Tom Piere <FaHome style={{
        verticalAlign:-4
        }}/></h1>
      <h2 className="subHeading">web developer</h2>
    </a>
    </Link>
  </header>
);

export default Header;