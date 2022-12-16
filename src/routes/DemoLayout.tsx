import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content:space-around;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;  
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box2 = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;  
  justify-content:center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Circle2 = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  /* border-radius: 50px; */
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
//자동 anima
function DemoLayout() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = ()=> setClicked(pre=>!pre);
  return (
    <>
    <Wrapper onClick={toggleClicked}>
      <Box2 >
        {!clicked ? <Circle2 layoutId="circle"  style={{ borderRadius: 50 }} />: null}
      </Box2>
      <Box2 >
        {clicked ? <Circle2 layoutId="circle" style={{ borderRadius: 0, scale: 2 }} />: null}
      </Box2>
    </Wrapper>
    <Wrapper onClick={toggleClicked}>
      <Box style={{justifyContent:clicked?"center": "flex-start", alignItems:clicked?"center": "flex-start"}}>
        <Circle layout />
      </Box>
    </Wrapper>
    </>
    
  );
}

export default DemoLayout;