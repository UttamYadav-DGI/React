import React from "react";
import UserClass from "./UserClass";
import { data } from "react-router";

class AboutClass extends React.Component{ // we use here only Component but for this we have a destructred the component from react
    constructor(props){
        console.log("parent constructor")
        super(props);

        this.state={
            name:"dummyname",
            address:"dummyaddress",
            followers:"{dummyfollowers}",
            following:"{dummyfollowing}"
        };
    }
    //how to render ApiCalls
    async componentDidMount(){
        const datainfo=await fetch("https://api.github.com/users/UttamYadav-DGI");
        const jsonData=await datainfo.json();

        console.log(jsonData)
        this.setState({
            name: jsonData?.name,
            address: jsonData?.address,
            followers:jsonData?.followers,
            following:jsonData?.following

        })
    }

    render(){
        const {name,address,followers,following}=this.state;
        console.log("parent render");
        return (<div>
            <h1>name:{name}</h1>
            <h3>address:{address}</h3>
            <h3>followers:{followers}</h3>
            <h3>following:{following}</h3>
            <UserClass/>
            <UserClass/>
        </div>)
    }
}
export default AboutClass;