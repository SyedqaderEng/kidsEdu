import fs from 'fs';
import path from 'path';
import Head from 'next/head';

export default function Home({ headHtml, bodyHtml }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{ __html: headHtml }} />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'static', 'index.html');
  const html = fs.readFileSync(filePath, 'utf-8');
  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return {
    props: {
      headHtml: headMatch ? headMatch[1] : '',
      bodyHtml: bodyMatch ? bodyMatch[1] : ''
    }
  };
}