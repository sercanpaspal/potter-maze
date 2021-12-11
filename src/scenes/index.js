import { lazy, Suspense } from "react";
import { Scenes } from "../constants/enums";

const scenes = {
  [Scenes.MENU]: lazy(() => import("./Menu")),
  [Scenes.CREATE_ROOM]: lazy(() => import("./CreateRoom")),
  [Scenes.JOIN_ROOM]: lazy(() => import("./JoinRoom")),
  [Scenes.WAIT_ROOM]: lazy(() => import("./WaitRoom")),
  [Scenes.KICKED_ROOM]: lazy(() => import("./KickedRoom")),
  [Scenes.NOT_EXISTS_ROOM]: lazy(() => import("./NotExistsRoom")),
  [Scenes.GAME]: lazy(() => import("./Game")),
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
