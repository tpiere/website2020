import Header from './Header';

const layoutStyle = {
    margin: '20px auto',
    padding: 20,
    border: '1px solid #DDD',
    width: 1140,
    maxWidth: '100%',
    boxSizing: 'border-box',
    lineHeight: 1.5,
    fontSize: 16,
    fontFamily:'-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif',

};

const Layout = props => (

    <div style={layoutStyle}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossOrigin="anonymous" />
        <Header />
        <main>
            {props.children}
        </main>
    </div>
);

export default Layout;