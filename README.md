learning react basics to advanced

/heder
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


 <!-- {/* <Cards
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
         /> */} -->


  <!-- // <>
      // <div className="filter-Btn">
      //   {/* <button
      //     onClick={() => {
      //       const filterRating = resObj.filter(
      //         (res) => res.info.avgRating > 4.5
      //       );
      //       setResData(filterRating);
      //     }}
      //   > */}
      {/* //     Top Rated Restaurant
      //   </button>
      // </div> */} -->

         -# react hook
         {
            normal js utility functions
            useState()- superpowerful state variable in react,it's maintain the state of the variable
            useEffect()- 
         }
         import by react

         const [res,setres]=usesState([])

         ->setres is a updated variable/value
         *whenever a state variable update react re-render the componenets
         why react fast one of the big reason is dom manipulation
         react uses reconcilation algorithm(react-fiber)

         #class based component
         it's a older version of react in last 5-6 yaears ago the code writting style is react-class components

         we extends the our react component through react.components
         and the props are inside the class 
         
         in class-based components have a class-component render cycle

         in this cycle 
         there have a 2 phase 1---rendering  2--- commit
         ---------1 phase-------------
         first it's constructor method call and it's create a instance of class
         then after render is invovked it's and render html content 
      --------------------2 phase----------------
         then after dom is updating or commit

         then the render is successfully rendering then componentDidMount is called 

         if in parentClass in render(){ there have more than 1 childClass} so it's perform optimization 
         it;s done both constructor and rendering process for both chiidClass then it's ComponentDidMount is run for both childClass (optimize the process dom are rendering in single-batch)

# create 2 bundles
   //chunking
   /code splitting
   //lazy loading-: first we refer all thing then inside there i call it call grocery target link
   //on demand loading