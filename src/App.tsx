import React, { useRef, Suspense } from "react";
import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.to(".circle", { x: 360 });
  }, { scope: container });

  return (
    <LoadingProvider>
      <Suspense fallback={<div>Loading MainContainer...</div>}>
        <MainContainer ref={container}>
          <Suspense fallback={<div>Loading Character...</div>}>
            <CharacterModel />
          </Suspense>
        </MainContainer>
      </Suspense>
    </LoadingProvider>
  );
};

export default App;
