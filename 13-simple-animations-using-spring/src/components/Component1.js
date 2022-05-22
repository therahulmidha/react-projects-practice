import React from 'react'
import { useSpring, animated } from 'react-spring';

export const Component1 = () => {
    const mainAnimation = useSpring({
        from: { opacity: 0, marginTop: -500 },
        to: { opacity: 1, marginTop: 0 }
    });

    const counterAnimation = useSpring({
        from: { number: 0 },
        to: { number: 10 },
        config: { duration: 10000 }
    })

    return (
        <>
            <animated.div
                style={{
                    ...mainAnimation
                }}
            >
                <div style={c1Style}>
                    <h1>Component1</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>

                </div>
            </animated.div>

            <animated.div
                style={{
                    ...counterAnimation
                }}
            >
                    {counterAnimation.number.to(val => Math.floor(val))}
                {/* not working <h1 style={counterStyles}>
                </h1> */}
            </animated.div>
        </>

    )
}

const c1Style = {
    background: "steelblue",
    color: "white",
    padding: "1.5rem"
}

const counterStyles = {
    background: "#333",
    textAligh: "center",
    width: "100px",
    borderRadius: "50%",
    margin: "1rem auto"
}