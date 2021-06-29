import React from 'react';
import './HomeSection.scss'

interface Props {

}

const HomeSection: React.FC<Props> = (props) => {
    return (
        <>
        <div className="homeSection">
            <h1>Hello, I'm Andy.</h1>
            <h3>Here is my generic portfolio page.</h3>

            <div className='cubeAnimationBox technologyBox1'>
                <div className="cube">
                    <div className="front side"></div>
                    <div className="back side"></div>
                    <div className="left side"></div>
                    <div className="right side"></div>
                    <div className="top side"></div>
                    <div className="bottom side"></div>
                </div>
            </div>

            <div className='cubeAnimationBox technologyBox2'>
                <div className="cube">
                    <div className="front side"></div>
                    <div className="back side"></div>
                    <div className="left side"></div>
                    <div className="right side"></div>
                    <div className="top side"></div>
                    <div className="bottom side"></div>
                </div>
            </div>
            <div className="pyramidAnimationBox">
                <div className="pyramid">
                <div className="front triangleSide"></div>
                <div className="left triangleSide"></div>
                <div className="right triangleSide"></div>
                <div className="back triangleSide"></div>
                <div className="base"></div>
                </div>
            </div>
            <div className="cubeAnimationBox explodedCube">
                <div className="front side"></div>
                <div className="back side"></div>
                <div className="left side"></div>
                <div className="right side"></div>
                <div className="top side"></div>
                <div className="bottom side"></div>
            </div>

        </div>
        <div className="transitionGradient"></div>
        </>
        )
}

export default HomeSection;