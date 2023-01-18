import Head from "next/head";
import BackDrop from "../components/backDrop";
import NavigationBar from "../components/navigationBar";
import MapInformationBar from "../components/mapInformationBar";
import NodeCharacterBar from "../components/nodeCharacterBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mind</title>
        <meta name="description" content="Mind app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BackDrop />
        <div className=" flex flex-col h-screen">
          <NavigationBar />
          <div className="flex-grow mx-4 flex justify-between">
            <MapInformationBar />

            <div>
              <NodeCharacterBar />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
