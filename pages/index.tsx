import Head from "next/head";
import NavigationBar from "../components/navigationBar";
import MapInformationBar from "../components/mapInformationBar";
import NodeCharacterBar from "../components/nodeCharacterBar";
import Board from "../components/board/board";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mind</title>
        <meta name="description" content="Mind app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col">
        <NavigationBar />
        <div className="relative h-full w-full">
          <Board />
          <div className="absolute left-4 top-0 bottom-0">
            <MapInformationBar />
          </div>
          <div className="absolute right-4 top-0 bottom-0">
            <NodeCharacterBar />
          </div>
        </div>
      </main>
    </>
  );
}
