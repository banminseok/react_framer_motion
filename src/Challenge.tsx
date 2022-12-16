import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction : column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 700px;
  gap: 5px;
`;
const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Circle = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  height: 50px;
  width: 50px;
  border-radius: 25px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Button = styled(motion.button)`
  margin-top:100px;
  padding : 10px 20px;
  border-radius: 5px;
  color : blue;
`;
const boxVariant = {
  normal: {
    scale: 1,
  },
  hover: (custom:boolean)=>{
    return{
      scale: 1.05,
      x: custom ? -8:8,
      y: custom ? -5:5,
      transition: {
        duaration: 0.2,
        type: "tween",
      }
    }
  },
}
const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};


function Challenge() {
  const [id, setId] = useState<null | string>(null);
  const [btnClicked, setBtnClicked] = useState(false);
  const toggleClicked = ()=> setBtnClicked(pre=>!pre);
  return (
    <Wrapper>
      <Grid>
          <Box onClick={() => setId("1")} layoutId="1" custom={true} variants={boxVariant} initial="normal" whileHover="hover" />
          <Box>{!btnClicked? <Circle layoutId="circle" /> : null}</Box>
          <Box>{btnClicked? <Circle layoutId="circle"  /> : null}</Box>
          <Box onClick={() => setId("4")} layoutId="4" custom={false} variants={boxVariant} initial="normal" whileHover="hover" />
      </Grid>
      <AnimatePresence>
      {id ? (
        <Overlay 
          variants={overlay} initial="hidden" animate="visible" exit="exit"
          onClick={() => setId(null)}
        >
        <Box layoutId={id} style={{width:348, height:200, backgroundColor:" rgba(255, 255, 255, 1)"}} />
      </Overlay>) : null}
      </AnimatePresence>
      <Button onClick={toggleClicked} initial={{color : "blue",scale : 1}} animate={{color : btnClicked? "tomato":"blue",scale : btnClicked ? 1.5:1,}} transition={{ duration: 0.5 }} >Switch</Button>
    </Wrapper>
  );
}

export default Challenge;