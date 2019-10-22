import Head from "next/head";

const defaultTitle = "Jake";

export default ({ title = defaultTitle }) => (
  <Head>
    <title>{title}</title>
    <meta name="author" content="Jake Lokkesmoe" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <style global jsx>{`
      html,
      body {
        margin: 0;
      }
    `}</style>
  </Head>
);
