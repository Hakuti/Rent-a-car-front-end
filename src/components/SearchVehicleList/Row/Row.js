import React from 'react';
import { ListContext } from '../ListView/ListView';

const Row = ({index}) => {
    // console.log(index);
    const {setSize, height, width} = React.useContext(ListContext);
    const root = React.useRef();
    React.useEffect(() => {
        setSize(index, root.current.getBoundingClientRect().height);
      }, [width]);
    return (
        <div ref={root} style={{height: width * 0.5}}>
            Hello
        </div>
    )
}

export default Row;