import Layout from '../components/MyLayout';
import Link from 'next/link';
import Head from 'next/head'
import { FiMail } from "react-icons/fi";
import { MdFileDownload, MdCode, MdPerson } from "react-icons/md";
import { colors } from '../styles/colors';

const iconStyle = {
  verticalAlign: 'text-bottom',
  marginRight: 3
}

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Tom Piere: web developer - home</title>
        </Head>

        <a href="Resume-TomPiere.docx">
          <MdFileDownload style={iconStyle} /> Download my resume</a>

        <a href="mailto:tpiere@gmail.com"
        >
          <FiMail style={iconStyle} /> Email me</a>

        <Link href="projects">
          <a>
            <MdCode style={iconStyle} /> See what I've worked on</a>
        </Link>

        <Link href="about">
          <a >
            <MdPerson style={iconStyle} /> Learn more about me</a>
        </Link>

        <style jsx>{`
        a {
          text-decoration:none;
        }
        a:hover, a:focus { 
          background-color: ${colors["primary-blue-darker-1"]};
          border-color: ${colors["primary-blue-darker-1"]};
        }

        a:hover:active{
          background-color: ${colors["primary-blue-darker-2"]};
          border-color: ${colors["primary-blue-darker-3"]};
        }

        div { 
          display: flex;
          flex-wrap: wrap; 
          justify-content: space-between;
        }
        a {
          display:block;
          width: 100%;
          flex: 0 0 100%;
          background-color: ${colors["primary-blue"]};
          border-color: ${colors["primary-blue"]};
          padding: 0.75rem 1.5rem;
          border-radius: 0.3rem;
          box-sizing: border-box;
          margin-top: 10px;
          font-size: 1.25rem;
          color: ${colors["$mie-beige"]};
        }

        @media screen and (min-width: 650px) {
          a {
            display:block;
            width: 49%;
            flex: 0 0 49%;
          }
        }

      `}</style>
      </div>
    </Layout>
  );
}