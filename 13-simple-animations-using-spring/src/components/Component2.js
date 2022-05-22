import React from 'react'
import { useSpring, animated } from 'react-spring';

export const Component2 = (props) => {
    const styles = useSpring({
        from: { opacity: 0, marginTop: -500 },
        to: { opacity: 1, marginTop: 0 },
        config: { delay: 1000, duration: 1000 }
    });

    return (
        <>
            <animated.div
                style={{
                    ...styles
                }}
            >
                <div style={c2Style}>
                    <h1>Component2</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <button onClick={props.onShowComponent3} style={{ position: "absolute", left: "40%" }}>Show Component 3</button>
                </div>
            </animated.div>
        </>

    )
}
const c2Style = {
    background: "slateblue",
    color: "white",
    padding: "1.5rem"
}