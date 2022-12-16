import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Chart from "./routes/Chart";
import Main from "./routes/Main";
import NotFound from "./routes/NotFound";
import Anima from "./routes/Anima";
import DemoVariants from "./routes/DemoVariants";
import DemoGestures from "./routes/DemoGestures";
import DemoMotionValue from "./routes/DemoMotionValue";
import SVGAnima from "./routes/SVGAnima";
import AnimaPre from "./routes/AnimaPre";
import DemoLayout from "./routes/DemoLayout";
import Demo4Box from "./routes/Demo4Box";


const BASE_URL = process.env.PUBLIC_URL;

const defaultRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />
      },
      {
        path: "animation",
        element: <Anima />,
        children: [
          {
            path: "chart",
            element: <Chart />,
          },
        ]
      },
      {
        path: "variants",
        element: <DemoVariants />,
      },
      {
        path: "demoGestures",
        element: <DemoGestures />,
      },
      {
        path: "demomotionValue",
        element: <DemoMotionValue />,
      },
      {
        path: "SVGAnima",
        element: <SVGAnima />,
      },
      {
        path: "AnimaPre",
        element: <AnimaPre />,
      },
      {
        path: "DemoLayout",
        element: <DemoLayout />,
      },  
      {
        path: "Demo4Box",
        element: <Demo4Box />,
      },      
    ],
    errorElement: <NotFound />
  }
], {
  basename: BASE_URL
});


export default defaultRouter;