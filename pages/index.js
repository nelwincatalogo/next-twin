import Head from 'next/head';
import 'twin.macro';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 tw="text-2xl text-gray-700 font-bold">Hello World</h1>
      </main>
    </div>
  );
}
