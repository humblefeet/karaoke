import * as React from 'react';

export interface IMyClass{
    name?: string;
    isMarried: boolean;
}

export interface IState{
    age: number;
}

class MyClass extends React.Component<IMyClass, IState>{
    state={
        age: 21
    }

    render(){
        return (
            <div className="MyClass">
                <h1>My name is {this.props.name} and I am {this.state.age} years old</h1>
            </div>
        );
    }

}

export default MyClass;