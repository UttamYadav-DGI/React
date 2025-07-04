import React from "react"
import ReactDOM from "react-dom/client"

const root=ReactDOM.createRoot(document.getElementById("root"));

//heder
//body
//footer

//header
//  -logo
//  -home,offers,menu,aboutus three line 

//body
// -card-container
//      -card box
//          -detailing like text,rating,timing,


//footer
// copyright
//links
//address
// contact
const Header=()=>{
    return (
        <>
        <div className="header">
            <img className="img" src="https://static.vecteezy.com/system/resources/thumbnails/041/004/509/small_2x/illustration-of-delivery-man-vector.jpg"></img>
            <ul>
                <li>Home</li>
                <li>offers</li>
                <li>menu</li>
                <li>about Us</li>
            </ul>
            </div>
    </> 
    )
}

const Cards=(props)=>{
    return (
        
        <div className="body">
        <img className="body-img" src={props.imgss}></img>
             
             <div className="card-details" style={{ padding: "10px" }}>
            <h3>{props.dishes}</h3>
            <p>{props.cusings}</p>
            
        </div>
        </div>
       
    )
}
const Body=()=>{
    return (
        <>
        <div className="Bodyy">
         <Cards
         imgss="https://lh3.googleusercontent.com/-bG3kvR1cMgE/XevgzyRjEVI/AAAAAAAAAPc/XjeCn0rhtxEGoqvEjYK1fTTVCxHcJ6sGgCLcBGAsYHQ/s1600/1575739587049510-0.png"
         dishes="Paneer Butter Masala"
         cusings="Rich, creamy and flavorful North Indian curry."
         />
         <Cards
         imgss="https://culinarydelightsandbeyond.com/wp-content/uploads/2023/03/dosa-5oF7d_hPJG4-scaled.jpg" 
         dishes="masala dosa"
         cusings="more spicy delicious."
         />
         <Cards
         imgss="https://www.certifiedirishangus.ie/wp-content/uploads/2019/11/TheUltimateBurgerwBacon_RecipePic-2048x1126.jpg" 
         dishes="Burger"
         cusings="great flavours"
         />
         <Cards
         imgss="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"  
         dishes="Paneer Butter Masala"
         cusings="Rich, creamy and flavorful North Indian curry."
         />
         <Cards
         imgss="https://jamiegeller.com/.image/t_share/MTY1NTI0OTg0Nzk0NzE5MjU5/spicy-chicken-wings.jpg"  
         dishes="Paneer Butter Masala"
         cusings="Rich, creamy and flavorful North Indian curry."
         />
         
        </div>
        </>

    )
};


const Footer=()=>{
    return (
        <>
        <div className="footer">
            <p>&copy; {new Date().getFullYear()} Namaste React Food Delivery. All rights reserved.</p>
            <p>
                <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a>
            </p>
            <address>
                123 Food Street, React City, India<br />
                Contact: <a href="mailto:support@namastereact.com">support@namastereact.com</a>
            </address>
        </div>
        </>
    )
}
const PageLayout=()=>{
    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
        


    )
}


root.render(<PageLayout/>);