import { lazy, Suspense } from "react";
import { Scenes } from "../constants/enums";

const scenes = {
  [Scenes.MENU]: lazy(() => import("./menu")),
  [Scenes.CREATE_ROOM]: lazy(() => import("./create-room")),
};

const Scene = ({ currentScene }) => {
  const SceneComponent = scenes[currentScene];
  return (
    <Suspense fallback={<div>Loading Scene..</div>}>
      <SceneComponent />
    </Suspense>
  );
};

export default Scene;
