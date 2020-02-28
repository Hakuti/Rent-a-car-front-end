import React, { useRef, useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import { useWindowDimensions } from "../components/WindowDimensionsProvider";

const Context = React.createContext();

export function ModalProvider({children}){
    const modalRef = useRef();
    const [context, setContext] = useState();
    useEffect(() => {
        setContext(modalRef.current);
    })
    return (
    <Container>
        <Context.Provider value={context}>{children}</Context.Provider>
        <div ref={modalRef} />
    </Container>
    )
}

export function Modal({ onClose, children, ...props}){
    const {height, width} = useWindowDimensions();
    const widthAsText = width - 40

    const modalNode = useContext(Context);
    
    return modalNode ? ReactDOM.createPortal(
        <Overlay style={{height: height, width: width, background: 'black'}}>
            <Dialog {...props} style={{height: height, width: '100%'}}>
            <div onClick={onClose} style={{right: -widthAsText , position: "relative", fontSize: 24, color: "gray"}}><i class="fas fa-times"></i></div>
            {/* <button onClick={onClose}>Close</button> */}

                {children}
            </Dialog>
        </Overlay>,
        modalNode
    ): null;
}

const fadeIn = keyframes`from { opacity: 0; }`;

const Container = styled.div`
  position: relative;
  z-index: 0;
`;
const Overlay = styled.div`
  animation: ${fadeIn} 200ms ease-out;
  position: fixed;
//   top: -140px;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
//   background: black;
  overflow-x: hidden;
`;
const Dialog = styled.div`
  background: white;
//   border-radius: 0px;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;
export default function GeneralModal() {
    return (
        <div>
            
        </div>
    )
}
