import Layout from '../components/MyLayout';
import { colors } from '../styles/colors';
import { FaThumbsUp } from "react-icons/fa";
import { Fragment } from 'react';
import Head from 'next/head'


const imageStyles = {
    maxWidth: '100%'
}

const Project = props => {
    return (
        <article class="projectWrapper">
            <style jsx>
                {`
                    article {
                        background: #ffffff;
                        padding:1em;
                        box-shadow: 0px 2px 15px ${colors['$gray-darker']};
                        border-radius: 5px;
                        margin:30px 0;
                        box-sizing: border-box;
                    }

                     header {
                         text-align:center;
                         padding:20px
                     }

                     img{
                         max-width:100%;
                     }

                     section {
                        color: ${colors["$mie-dark-blue"]};
                        line-height: 1.5
                    }

                    @media screen and (min-width: 767px) {
                        article {
                          display:flex;
                        }
                        header {
                            flex: 0 0 25%;
                            widtH: 25%;
                        }
                        
                      }
                `}
            </style>
            <header >
                {props.companyLink}
            </header>
            <section>
                {props.description}
            </section>
        </article>
    );
}

export default function About() {
    return (
        <Layout>
            <Head>
                <title>Tom Piere: web developer - projects</title>
            </Head>
            <div class="col-md-12">
                <ol class="projectList" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li>
                        <Project
                            companyLink={
                                <a href="https://www.uship.com/" class="companyLink"><img src="images/UShip_logo.png" alt="uShip logo" style={imageStyles} /></a>
                            }
                            description={
                                <Fragment>
                                    <p>
                                        <a href="http://www.uShip.com/">uShip</a> is an online marketplace for connecting shippers with carriers.
                    </p>
                                    <p>I worked on many features of the website and mobile applications including enterprise features, networks, finding shipments, and pricing. </p>
                                    <p>
                                        I primarily worked with React, Node.js and .Net.  As we transitioned much of our infrastructure, I gained experience with AWS and Serverless 
                                        applications.
                    </p>
                                </Fragment>
                            }
                        />

                    </li>
                    <li>
                        <Project
                            companyLink={
                                <a href="http://www.dell.com/" class="companyLink"><img src="images/dell-logo.jpg" alt="Dell logo" style={imageStyles} /></a>
                            }
                            description={
                                <Fragment>
                                    <p>
                                        <a href="http://www.dell.com/">Dell</a> is a computer technology company and one of the largest technological
                        corporations in the world.
                    </p>
                                    <p>At Dell, I worked on an internal e-commerce sales application.</p>
                                    <p>
                                        Using .Net and Angular.js, I helped build features for carts, quotes, product searching and configuring and payment collection.
                    </p>
                                </Fragment>
                            }
                        />

                    </li>
                    <li>
                        <Project
                            companyLink={
                                <a href="https://ghealthcare.anthem.com/cp/web/gcaredashboard/home" class="companyLink">
                                    <img
                                        src="images/google_logo2.png"
                                        alt="Google Healthcare powered by Anthem"
                                        style={imageStyles} /></a>
                            }
                            description={
                                <Fragment>
                                    <p>
                                        <a href="http://www.Anthem.com/">Anthem</a> is a managed health care company. It is the largest company
                        in the <a href="http://www.bcbs.com/">Blue Cross Blue Sheild Association</a>.
                    </p>
                                    <p>
                                        At Anthem, I helped build a custom portal for Google employees to access their health insurance.
                        <a href="https://ghealthcare.anthem.com/cp/web/gcaredashboard/home">gHealthcare</a> is built on the
                        Liferay platform, and I focused on front-end engineering for the site.
                    </p>
                                    <p>
                                        I helped build many features across the application including the claims display, registration UI, online chat, customer
                                        service callback, and provider finder search.
                    </p>
                                    <p>
                                        I worked on Spring MVC portlets that consume SOAP web services, and I focused on the front-end engineering to manage HTML,
                                        CSS, JavaScript, images and other assets. I also worked extensively with the Liferay content management
                                        system to determine strategies for internationalization and content updates.
                    </p>
                                </Fragment>
                            }
                        />

                    </li>
                    <li>

                        <Project
                            companyLink={
                                <a href="https://www.ameriprise.com/default.asp" class="companyLink">
                                    <img src="images/Ameriprise.jpg" alt="Ameriprise Financial" style={imageStyles} />
                                </a>
                            }
                            description={
                                <Fragment>
                                    <p><a href="http://www.ameriprise.com">Ameriprise Financial</a>&nbsp;is one of the leading diversified financial
                        services companies in the U.S.
                    </p>
                                    <p>
                                        I lead the development effort to redesign the transfer money experience. I added form validation to the pages that create
                                        and edit money transfers. I refactored the HTML and CSS to be more responsive for mobile devices
                                        such as the iPad. I built an AJAX modal dialog for the user agreement acceptance. I also built an
                                        AJAX dialog for a quick transfer widget. The widget contains a three step wizard to create a one-time
                                        transfer from the user's account details page. Finally, I added a new table to allow the user to
                                        view his or her scheduled transfers when creating a new transfer.
                    </p>
                                </Fragment>
                            }
                        />

                    </li>
                    <li>

                        <Project
                            companyLink={
                                <a href="https://www.columbiamanagement.com/" class="companyLink">
                                    <img src="images/logo-cm.gif" alt="Columbia Management" style={imageStyles} />
                                </a>
                            }
                            description={
                                <Fragment>
                                    <p>Columbia Management is one of the nation’s largest asset managers.</p>
                                    <p>
                                        I built a number of enhancements and fixed bugs across their website. I built a jQuery plugin to provide a fixed table header
                                        when scrolling down a large table. The table header plugin is implemented on several pages of the
                                        website including the
                        <a href="https://performance.columbiamanagement.com/web/columbia/products-performance/mutual-funds">
                                            mutual funds page
                </a> and <a href="https://performance.columbiamanagement.com/web/columbia/products-performance/variable-products">
                                            variable products page
                </a>. I refactored the shopping cart that is displayed in the main heading to use a cross-domain JSONP service.
                        Finally, I built a Liferay portlet to provide a web interface for administrators to clear server
                        caches on a single node or across the cluster.
                    </p>
                                </Fragment>
                            }
                        />

                    </li>
                    <li>

                        <Project
                            companyLink={
                                <a href="http://online.wsj.com/home-page" class="companyLink">
                                    <img src="images/wsj.jpg" alt="Wall Street Journal" style={imageStyles} />
                                </a>
                            }
                            description={
                                <Fragment>
                                    <p>
                                        <a href="http://www.dowjones.com/">Dow Jones</a> is a news corporation with a suite of products and
                        websites that provide financial information and analysis.
                    </p>
                                    <p>
                                        I primarily worked on the <a href="http://online.wsj.com/home-page">Wall Street Journal's</a> website,
                        focusing on charting solutions for the company research portion of the site.
                    </p>
                                    <p>
                                        I implemented the <a href="http://quotes.wsj.com/NFLX/interactive-chart">interactive chart page</a>                        which allows users to perform technical analysis on securities with a highly interactive flash chart.
                        I worked on embedding the flash object on the page and updating and implementing the menus that interact
                        with the chart and news articles.
                    </p>
                                    <p>
                                        I built the <a href="http://quotes.wsj.com/NFLX/research-ratings">Per-Share Earnings, Actuals and
                Estimates</a> chart which provides a quick and simple visual representation of a company's earnings compared
                        to estimates.

                    </p>
                                    <p>
                                        I built the <a href="http://quotes.wsj.com/NFLX/news">News Coverage</a> chart which displays the
                        number of news articles over a time period for a security as a bar chart.
                    </p>
                                    <p>
                                        Finally, I worked on a solution to overlay data points on a stock price chart, and fixed bugs for MarketWatch.com and the
                                        Wall Street Journal's website.
                    </p>
                                </Fragment>
                            }
                        />

                    </li>
                    <li>

                        <Project
                            companyLink={
                                <a href="https://1.next.westlaw.com/Session/SignOn.html?bhcp=1" class="companyLink">
                                    <img src="images/WestlawNext_logo.png" alt="Westlaw Next" style={imageStyles} />
                                </a>
                            }
                            description={
                                <Fragment>
                                    <p>
                                        <a href="http://thomsonreuters.com/">Thomson Reuters</a> is a business data provider operating in
                        two divisions: Professional and Markets.

                    </p>
                                    <p>I worked in the professional division on the company's industry leading legal platform: WestlawNext.</p>
                                    <p>
                                        <a href="http://www.westlawnext.com">WestlawNext</a> is an online legal research service for professionals
                        and students. Its predecessor, <a href="http://www.westlaw.com">Westlaw</a>, is the market leader
                        for legal research. WestlawNext offers many substantial improvements for users such as a simplified
                        search algorithm, folders for managing research, and an updated user interface.

                    </p>
                                    <p>
                                        I primarily worked on the document display for WestlawNext. I was one of the first developers on the project which grew to
                                        become one of the largest agile projects in the nation with well over 200 professionals building
                                        the application.

                    </p>
                                    <p>
                                        I became the primary engineer for several crucial features in WestlawNext. I helped architect an extensive XSLT framework
                                        to produce the XHTML for legal documents. I lead the implementation of document "chunking" to break
                                        large documents into smaller parts. I also helped build the annotations feature that allows users
                                        to highlight sections of documents, and add notes to portions of documents that are relevant to their
                                        research.
                    </p>
                                </Fragment>
                            }
                        />

                    </li>
                </ol>
            </div>

        </Layout>
    );
}