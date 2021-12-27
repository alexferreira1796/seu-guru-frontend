import Head from 'next/head';

interface ITitleSite {
  title: string;
}

function TitleSite({ title }: ITitleSite) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

export { TitleSite };
