import { useState } from "react";
import { Transition, animated } from "react-spring";
import "./App.css";
import { Component1 } from "./components/Component1";
import { Component2 } from "./components/Component2";
import { Component3 } from "./components/Component3";

function App() {
  const [showComponent3, setShowComponent3] = useState(false);
  const showComponent3Handler = () => {
    setShowComponent3(!showComponent3);
  }

  return <>
    <Component1 />
    <Component2 onShowComponent3={showComponent3Handler} />
    <Transition
      items={showComponent3}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
      delay={300}
    >
      {(styles, item) =>
        item && <animated.div style={styles}><Component3 /></animated.div>
      }
    </Transition>
  </>;
}

export default App;
