import React, {useRef, useState} from "react";
import {Arrow, Group, Layer, Rect, Stage, Text} from "react-konva";


const RECT_SIZE = 200;
const CANVAS_PADDING = 20;
const CANVAS_SIZE = RECT_SIZE * 2 + CANVAS_PADDING * 2;
const CANVAS_MIDDLE = RECT_SIZE + CANVAS_PADDING;

const PoliticalCompass = () => {

    const [topText, setTopText] = useState("");
    const [leftText, setLeftText] = useState("");
    const [bottomText, setBottomText] = useState("");
    const [rightText, setRightText] = useState("");

    const stageRef = useRef();

    const exportImage = () => {
        const dataUrl = stageRef.current.toDataURL({pixelRatio: 2});
        let link = document.createElement("a");
        link.download = "political-compass.png";
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div id={"political-compass"} className={"d-flex"}>
            <div className={"w-50"}>
                <h6>You can probably figure out what you need to do here</h6>

                <div className={"d-flex flex-column"}>
                    <div className={"d-flex justify-content-center"}>
                        <input placeholder={"Top"} value={topText} onChange={e=>setTopText(e.target.value)} />
                    </div>
                    <div className={"d-flex justify-content-center"}>
                        <input placeholder={"Left"} value={leftText} onChange={e=>setLeftText(e.target.value)} />
                        <input placeholder={"Right"} value={rightText} onChange={e=>setRightText(e.target.value)} />
                    </div>
                    <div className={"d-flex justify-content-center"}>
                        <input placeholder={"Bottom"} value={bottomText} onChange={e=>setBottomText(e.target.value)} />
                    </div>
                </div>

                <div>
                    <button type="button" className="btn btn-primary" onClick={exportImage}>Save as Image</button>
                </div>
            </div>
            <div className={"w-50"}>
                <Stage width={CANVAS_SIZE} height={CANVAS_SIZE} ref={stageRef}>
                    <Layer>
                        <Rect fill={"white"} width={CANVAS_SIZE} height={CANVAS_SIZE}/>
                    </Layer>
                    <Layer>
                        <Group x={CANVAS_PADDING} y={CANVAS_PADDING}>
                            <Rect x={0} y={0} height={RECT_SIZE} width={RECT_SIZE} fill={"#F9BABA"}/>
                            <Rect x={0} y={RECT_SIZE} height={RECT_SIZE} width={RECT_SIZE} fill={"#C8E4BC"}/>
                            <Rect x={RECT_SIZE} y={0} height={RECT_SIZE} width={RECT_SIZE} fill={"#92D9F8"}/>
                            <Rect x={RECT_SIZE} y={RECT_SIZE} height={RECT_SIZE} width={RECT_SIZE} fill={"#E1C6DF"}/>
                        </Group>
                        <Group>
                            <Arrow points={[CANVAS_MIDDLE,CANVAS_MIDDLE,CANVAS_MIDDLE,CANVAS_PADDING]} fill={"black"} stroke={"black"}/>
                            <Arrow points={[CANVAS_MIDDLE,CANVAS_MIDDLE,CANVAS_PADDING,CANVAS_MIDDLE]} fill={"black"} stroke={"black"}/>
                            <Arrow points={[CANVAS_MIDDLE,CANVAS_MIDDLE,CANVAS_MIDDLE,CANVAS_SIZE-CANVAS_PADDING]} fill={"black"} stroke={"black"}/>
                            <Arrow points={[CANVAS_MIDDLE,CANVAS_MIDDLE,CANVAS_SIZE-CANVAS_PADDING,CANVAS_MIDDLE]} fill={"black"} stroke={"black"}/>
                        </Group>
                        <Group>
                            <Text text={topText} width={CANVAS_SIZE} height={CANVAS_PADDING} align={"center"} verticalAlign={"middle"} padding={2}/>
                            <Text text={leftText} y={RECT_SIZE} x={CANVAS_PADDING} width={CANVAS_SIZE} height={CANVAS_PADDING} align={"left"} verticalAlign={"top"} padding={2}/>
                            <Text text={bottomText} y={CANVAS_SIZE - CANVAS_PADDING} width={CANVAS_SIZE} height={CANVAS_PADDING} align={"center"} verticalAlign={"middle"} padding={2}/>
                            <Text text={rightText} y={RECT_SIZE} x={-CANVAS_PADDING} width={CANVAS_SIZE} height={CANVAS_PADDING} align={"right"} verticalAlign={"top"} padding={2}/>
                        </Group>
                    </Layer>
                </Stage>
            </div>
        </div>
    );
}

export default PoliticalCompass;