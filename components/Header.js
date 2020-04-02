import Link from 'next/link';
import { colors } from '../styles/colors';
import { FaHome } from "react-icons/fa";

const headerStyle = {
  borderBottom: '1px solid #E5E5E5',
  borderBottom: `2px solid ${colors['$mie-beige']}`,
  boxShadow: `0px 2px 11px ${colors['$gray-darker']}`,
  padding: 20,
  background: `${colors['$mie-dark-blue']}`,
  color: colors['$mie-beige'],
  textShadow: '0 3px 3px #222',
  fontWeight:500,
  display: 'flex'
};

const Header = () => (
  <header style={headerStyle}>

    <Link href='/'>

    <a>
       <style jsx>{`
        a {
          color: ${colors['$mie-beige']};
          text-decoration:none;
        }
        a:hover { text-decoration: underline;}
      `}</style>
     
      <h1 style={{
      color:colors['$mie-beige'],
      fontSize: '2.5rem',
      fontWeight:500,
      lineHeight: 1,
      margin: 0
      }}>Tom Piere <FaHome style={{
        verticalAlign:-4
        }}/></h1>
      <h2 style={{
        fontSize: '1rem',
        textAlign: 'end',
        margin: 0,
        fontWeight: 500
        }}>web developer</h2>
    </a>
    </Link>
  </header>
);

export default Header;