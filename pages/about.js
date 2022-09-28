import Layout from '../components/MyLayout';
import { colors } from '../styles/colors';
import { FaThumbsUp } from "react-icons/fa";
import Head from 'next/head'

export default function About() {
  return (
    <Layout>
      <div class="aboutWrapper"><img src="images/portait-sketch.jpg" class="portrait"
        style={{
          float: 'right',
          marginLeft: '1em',
          width: '50%',
          maxWidth: '500px',
        }} />
        <style jsx>
          {`
        color: ${colors["$mie-dark-blue"]};
        line-height: 1.5
      `}
        </style>

        <Head>
          <title>Tom Piere: web developer - about</title>
        </Head>
        <p class="aboutText">
          Hello! I'm a friendly web developer living in Corrales, New Mexico. I've been working as a software developer and front-end engineer
          for the past 17 years since graduating from college.
    </p>
        <p>
          I enjoy working with user experience and graphic designers to build high quality interfaces on the web.
    </p>
        <p>
          I care about developing quality, well-tested code that is loosely coupled and maintainable. Those are lofty goals for any
          project, but I am constantly trying to find ways to write better code.
    </p>
        <p>
          Outside work, I enjoy music, sports, movies, travelling, and learning about anything interesting. I also love coffee, beer,
        and whiskey. <FaThumbsUp />
        </p>
      </div>
    </Layout>
  );
}
