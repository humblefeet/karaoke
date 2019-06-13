import * as React from 'react';

type MyCompProps={
    name: "Jill" | "Sam",
    isMarried: boolean,
    kids?: 2 | 4
};

const MyComp = (props: MyCompProps) => {
    return(
        <div>
            <h2>Her name is {props.name}</h2>
        </div>
    );

};

export default MyComp