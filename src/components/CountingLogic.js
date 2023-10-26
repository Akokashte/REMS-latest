import React from "react";
import CountUp from 'react-countup';

const CountingLogic = (props)=> {
  const val = props.val;
    return (

        <CountUp
            start={0}
            end={val}
            duration={2.75}
            enableScrollSpy={true}
            scrollSpyDelay={1}
            scrollSpyOnce={true}
        />
    )
}

export default CountingLogic;