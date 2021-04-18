import { useReducer, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useSwipeable } from 'react-swipeable';
import './About.css';

const About = () => {
    // const [current,setCurrent] = useState(0);

    // const [state, dispatch] = useReducer(carouselReducer, initialState);

    // const initialState = {
    //     offset: 0,
    //     desired: 0,
    //     active: 0
    // }

    // const carouselReducer = (state, action) => {
    //     switch (action.type) {
    //         case "jump":
    //           return {
    //             ...state,
    //             desired: action.desired
    //           };
    //         case "next":
    //           return {
    //             ...state,
    //             desired: next(action.length, state.active)
    //           };
    //         case "prev":
    //           return {
    //             ...state,
    //             desired: previous(action.length, state.active)
    //           };
    //         case "done":
    //           return {
    //             ...state,
    //             offset: NaN,
    //             active: state.desired
    //           };
    //         case "drag":
    //           return {
    //             ...state,
    //             offset: action.offset
    //           };
    //         default:
    //           return state;
    //       }
    // }

    // const handlers = useSwipeable({
    //     onSwiping(e) {
    //         dispatch({
    //             type: "drag",
    //             offset: -e.deltaX
    //         });
    //     },
    //     onSwipedLeft(e) {
    //         const t = threshold(e.event.target);
    //         if(e.deltaX >= t){
    //             dispatch({
    //                 type: "next",
    //                 length
    //             })
    //         }else{
    //             dispatch({
    //                 type: "drag",
    //                 offset: 0
    //             });
    //         }
    //     },
    //     onSwipedRight(e) {
    //         const t = threshold(e.event.target);
    //         if(-e.deltaX >= t){
    //             dispatch({
    //                 type: "prev",
    //                 length
    //             })
    //         }else{
    //             dispatch({
    //                 type: "drag",
    //                 offset: 0
    //             })
    //         }
    //     },
    //     trackMouse: true,
    //     trackTouch: true
    // })

    return (
        <div className="about">
            
        </div>
    )
}

export default About
