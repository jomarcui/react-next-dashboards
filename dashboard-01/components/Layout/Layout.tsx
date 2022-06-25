import Head from 'next/head';

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>React/Next Dashboards - 01</title>
    </Head>
    {children}
  </div>
);

export default Layout;
