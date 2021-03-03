import React from 'react';
import Container from './Container'
import Text from './Text'
import Button  from "./Button";
import {useNode,Element} from "@craftjs/core";

const CardTop = ({children})=>{
    const {connectors:{connect}} = useNode()
    return (
        <div ref={connect}>
            {children}
        </div>
    )
}

CardTop.craft = {
    rules:{
        canMoveIn:(incomingNode)=>incomingNode.data.type === Text
    }
}

const CardBottom = ({children})=>{
    const {connectors:{connect}} = useNode()
    return (
        <div ref={connect}>
            {children}
        </div>
    )
}

CardBottom.craft = {
    rules:{
        canMoveIn:(incomingNode)=>incomingNode.data.type === Button
    }
}

function Card({background,padding=20,drag=true}) {

    return (
        <Container draggable={drag} background={background} padding={padding}>
            <Element id='text' canvas>
                    <Text text='Title' fontSize={25} />
                    <Text text='Subtile' fontSize={15} />
            </Element>
            <Element  id='buttons' canvas>
                <Button color={'primary'} btn={"learn more"} variant={'contained'} size={'small'}  />
            </Element>
            <Element canvas id={'other'}>
                <Text text='Hellow World' fontSize={15} />
            </Element>
        </Container>
    );
}

export default Card;
