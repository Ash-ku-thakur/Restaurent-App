initial the project

1 npm i npm create vite@latest
2 tailwind css install
3 npm i react-router-dom
4 npm install @reduxjs/toolkit react-redux

create HeaderPage

create AboutPage

initialize The Router /about <About/>

create SearchBar

create a Card with dummy data

create RestaurentList with fetch swiggy api after fetching data send it to Card component

code become more moduler with hook folder (useGetRestaurent and subString method)

code made more module with deStructure {setRestaurentList(json?.data)} and delete the useGetMenu() hook

make a router for /restaurentCard/286518 this page with onClick method

make a constant folder for constant variable

make a slicer folder for store dynamic id /restaurentCard/286518 (286518)

<!-- ======================================================== -->

(very imp) ---- I am Stucked here Because result is not that array i want to execute with executable data
{REGULAR?.cards
.filter(
(elem) =>
elem?.card?.card?.["@type"] ===
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
)
.map((item, index) => (
<RestaurentCard data={item?.card?.card?.itemCards[0]} key={index} />
))}

(very imp) ---- this is for only get that results that have recomended items otherwise we get other too,
and we can get stuck because other results's data is different,
they will not match with our destructuring (results data)

<!-- ============================================================== -->

'rules":"react/prop-types':'off', in the (.eslintrc.cjs)

this line is stop throwing error showing of tyscript like (red wave, then we destructure the objects , {missing props})

 <!-- ============================================================== -->

Add RestaurentMenu commponent so that render all the menu items

create Cart Feature ======== I made two another commponents IntheCart and RestaurentMenu

to store the selected item I have used redux and redux/toolkit ======== AddtoCartSlicer

<!-- ================================================================ -->

Add Title (Recomended) on Menu Cards with length

 <!-- =============================================================== -->

Add Accodian Feature on Resturent-menu

we can make it with RestaurentMenuList commponent but there is a problem,
that we will pase that is why we want to create this featrure help of childCommponent,
so that every RecomendMenuTitle (true , false or index) have a different states other wise only a state it will not sufficent for every RecomendMenuTitle

 <!-- ================================================================= -->

create Search Funcnality with inputName is grater then or equal 1 than show inputName.map otherWise restaurent.map

create Top Rating Card get Feature functiomality with topCards is grater then or equal 1 than show topCards.map otherWise inputName And restaurent.map,

and little thing cartLength with the help of suscrib of redux store(useSelector())

<!-- ================================================================== -->
npm install react-icons 

Toggling feature of Cart (Add to Cart ---------- Delete To Cart)

delete one cart from cartList

deleteToCart: (state, action) => {
let index = state.cartList.findIndex((p) => p?.info?.id == action?.payload?.info?.id)
state.cartList.splice(index, 1);
},

deleteAllCart from cartList

deleteAllCart: (state) => {
state.cartList = []
},
