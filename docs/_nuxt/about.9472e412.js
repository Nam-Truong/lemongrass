import{_ as F,a as R,b as N,c as L,d as V,u as ie,e as ae,f as ne,g as oe}from"./useOrderHandling.0eaba0a0.js";import{d as re,r,o as ce,z as te,_ as le,f as o,A as k,s as a,k as S,q as i,v as g,B as D,m as de}from"./entry.90e9f676.js";const me=re({components:{SavedOrders:F,CategorySelection:R,ItemSelection:N,DetailsSelection:L,OrderSummary:V},setup(){const e=r([]),d=r(0),C=r(0),f=r(0),c=r(null),m=r(!1),n=r(null),t=r([{name:"ENTREE",items:[{id:1,name:"Chicken sweet corn soup",price:4.5},{id:2,name:"Satay chicken Skewers (3pc)",price:8},{id:3,name:"Chicken spring roll",price:2.5},{id:4,name:"Seafood spring roll (6pc)",price:8},{id:5,name:"Veggie spring roll",price:2.5},{id:6,name:"Cold roll (3pc)",price:7,proteinChoices:[{name:"Pork",price:0},{name:"Chicken",price:0},{name:"Tofu",price:0},{name:"Veggie only",price:0}]},{id:7,name:"Pork Dimsim",price:2.5},{id:8,name:"Steam bun (3pc)",price:10,proteinChoices:[{name:"Crackling pork",price:0},{name:"Lemongrass chicken",price:0},{name:"Lemongrass tofu",price:0}]},{id:9,name:"Prawn Dumpling (4pc)",price:7},{id:10,name:"Crispy Wonton (6pc)",price:6.5},{id:11,name:"Chicken spring roll pack of 3",price:6},{id:12,name:"Prawn chip",price:2},{id:13,name:"Veggie spring roll pack of 3",price:6}],color:"purple"},{name:"BANHMI",items:[{id:14,name:"Pork roll",price:8},{id:15,name:"Chicken roll",price:8},{id:16,name:"Tofu roll",price:7.5},{id:17,name:"Beef roll",price:9},{id:18,name:"Satay chicken roll",price:8},{id:19,name:"Salad roll",price:6},{id:20,name:"Combination roll",price:8},{id:21,name:"Soft Drink can 375",price:2.5},{id:22,name:"Add on deal 1",price:4},{id:23,name:"Add on deal 2",price:7},{id:24,name:"Extra meat",price:3}]},{name:"SALAD BOWL",items:[{id:25,name:"Pork salad bowl",price:13},{id:26,name:"Chicken salad bowl",price:13},{id:27,name:"Beef salad bowl",price:14},{id:28,name:"Tofu salad bowl",price:12},{id:29,name:"Satay chicken salad bowl",price:13},{id:30,name:"Spring roll salad bowl",price:12},{id:31,name:"Combination salad bowl",price:13},{id:32,name:"Extra meat",price:3}]},{name:"NOODLE SOUP",items:[{id:33,name:"Beef pho",price:14.5},{id:34,name:"Chicken Pho",price:14},{id:35,name:"Combo Pho",price:16.5},{id:36,name:"Tomyum",price:14.5},{id:37,name:"Laksa",price:14.5},{id:38,name:"Seafood only",price:2},{id:39,name:"Wonton in Beef noodle soup",price:14},{id:40,name:"Extra meat",price:3}],color:"orange"},{name:"RICE DISHES",items:[{id:41,name:"Combo Fried Rice",price:12.5},{id:42,name:"Thai Fried Rice",price:12},{id:43,name:"Chicken Fried Rice",price:12},{id:44,name:"Pork Fried Rice",price:12},{id:45,name:"Beef fried rice",price:12},{id:46,name:"Veggie Fried Rice with tofu",price:11},{id:47,name:"Eggs Fried Rice",price:8},{id:48,name:"Steam rice bowls",price:12,proteinChoices:[{name:"Pork",price:0},{name:"Chicken",price:0},{name:"Tofu",price:0},{name:"Combination",price:.5}]},{id:49,name:"Cup of steam rice",price:2},{id:50,name:"Extra meat",price:3}]},{name:"STIR FRIED NOODLE",items:[{id:51,name:"Char Kway teow",price:13.5,proteinChoices:[{name:"Pork",price:0},{name:"Chicken",price:0},{name:"Tofu",price:0},{name:"Combination",price:.5}]},{id:52,name:"Mee Goreng",price:13.5,proteinChoices:[{name:"Pork",price:0},{name:"Chicken",price:0},{name:"Tofu",price:0},{name:"Combination",price:.5}]},{id:53,name:"Singapore noodle",price:13.5,proteinChoices:[{name:"Pork",price:0},{name:"Chicken",price:0},{name:"Tofu",price:0},{name:"Combination",price:.5}]},{id:54,name:"Padthai",price:13.5,proteinChoices:[{name:"Pork",price:0},{name:"Chicken",price:0},{name:"Tofu",price:0},{name:"Combination",price:.5}]},{id:55,name:"Satay hokkien noodle",price:13.5,proteinChoices:[{name:"Pork",price:0},{name:"Chicken",price:0},{name:"Tofu",price:0},{name:"Combination",price:.5}]},{id:56,name:"Beef or Seafood only",price:2},{id:57,name:"Japanese Udon noodle",price:13.5,proteinChoices:[{name:"Pork",price:0},{name:"Chicken",price:0},{name:"Tofu",price:0},{name:"Combination",price:.5}]}]},{name:"STIR FRIED VEGGIE",items:[{id:58,name:"Chicken veggies",price:12.5,flavourChoices:[{name:"Basil cashew nut",price:0},{name:"Lemongrass sauce",price:0},{name:"Satay peanut",price:0},{name:"Oyster garlic",price:0},{name:"Garlic only",price:0}]},{id:59,name:"Pork veggies",price:12.5,flavourChoices:[{name:"Basil cashew nut",price:0},{name:"Lemongrass sauce",price:0},{name:"Satay peanut",price:0},{name:"Oyster garlic",price:0},{name:"Garlic only",price:0}]},{id:60,name:"Tofu veggies",price:12.5,flavourChoices:[{name:"Basil cashew nut",price:0},{name:"Lemongrass sauce",price:0},{name:"Satay peanut",price:0},{name:"Oyster garlic",price:0},{name:"Garlic only",price:0}]},{id:61,name:"Beef veggies",price:14.5,flavourChoices:[{name:"Basil cashew nut",price:0},{name:"Lemongrass sauce",price:0},{name:"Satay peanut",price:0},{name:"Oyster garlic",price:0},{name:"Garlic only",price:0}]},{id:62,name:"Seafood veggies",price:14.5,flavourChoices:[{name:"Basil cashew nut",price:0},{name:"Lemongrass sauce",price:0},{name:"Satay peanut",price:0},{name:"Oyster garlic",price:0},{name:"Garlic only",price:0}]},{id:63,name:"Mix seasonal veggie only",price:12,flavourChoices:[{name:"Basil cashew nut",price:0},{name:"Lemongrass sauce",price:0},{name:"Satay peanut",price:0},{name:"Oyster garlic",price:0},{name:"Garlic only",price:0}]}]},{name:"DRINK",items:[{id:64,name:"Iced coffee",price:4},{id:65,name:"Young coconut Water",price:4},{id:66,name:"Soft Drink",price:2.5},{id:67,name:"Roasted coconut Can 520ml",price:5},{id:68,name:"Water",price:2.5},{id:69,name:"Lipton Tea",price:4.5},{id:70,name:"Bundaberg",price:4},{id:71,name:"Redbull",price:4},{id:72,name:"Maximus",price:5},{id:73,name:"Lemon lime and bitter",price:3.8},{id:74,name:"Hot tea for share (pot)",price:4.5},{id:75,name:"Riviera",price:3.8},{id:76,name:"V energy Drink 25ml",price:3.5},{id:77,name:"V energy Drink 5ml",price:5}]},{name:"BATTER DISHES",items:[{id:78,name:"Honey",price:13},{id:79,name:"Sweet and sour sauce",price:13},{id:80,name:"Lemon sauce",price:13},{id:81,name:"Salt and pepper squid",price:13},{id:82,name:"Salt and pepper chicken",price:13},{id:83,name:"Salt and pepper pork",price:13},{id:84,name:"Salt and pepper tofu",price:12}]},{name:"OTHER",items:[{id:85,name:"Egg Flan",price:6.5},{id:86,name:"Egg Flan (Take away)",price:6.5},{id:87,name:"Traditional steam bun",price:5}],color:"blue"}]),s=u=>{c.value=u,m.value=!0;const T={uid:I(),id:u.id,name:u.name,price:u.price,quantity:1,selectedProtein:void 0,selectedFlavour:void 0,note:""};!u.proteinChoices&&!u.flavourChoices?(console.log("selected item: ",c.value),P(T)):n.value=T},v=()=>{m.value=!1,c.value=null};ce(()=>{y()}),te(e,()=>{y()},{deep:!0});const{generateRandomId:I,getCategoryItem:_,updateTotalBill:y,getCategoryname:l,getCategoryItemPrice:p}=ie(t,e,f,C),{selectedCategory:w,selectedCategoryColor:E,selectCategory:b,goBack:O,isCategorySelected:B,selectedCategoryName:h}=ae(t,c,m),{increaseQuantity:P,decreaseQuantity:A,selectProtein:G,selectFlavour:Q,startEditing:H,saveEditingItem:M,cancelEditingItem:U,updateEditingNote:W,editingMode:$,editingNote:q}=ne(t,e,n,m,c,f,C,v),{showDialog:K,savedOrders:z,supplierName:J,supplierABN:Y,printOrder:j,saveOrder:X,viewOrders:Z,loadOrders:x,downloadOrders:ee}=oe(t,e,C,f);return{selectedItems:e,selectedUId:d,totalBill:C,editingItem:n,editingNote:q,itemPrice:f,selectedCategoryName:h,selectedFoodItem:c,isCategorySelected:B,isItemSelected:m,editingMode:$,showDialog:K,savedOrders:z,supplierName:J,supplierABN:Y,categories:t,selectedCategory:w,selectedCategoryColor:E,selectCategory:b,selectItem:s,selectProtein:G,selectFlavour:Q,goBack:O,getCategoryItem:_,increaseQuantity:P,navigateToCategorySelection:v,decreaseQuantity:A,startEditing:H,saveEditingItem:M,cancelEditingItem:U,updateEditingNote:W,updateTotalBill:y,printOrder:j,getCategoryname:l,getCategoryItemPrice:p,saveOrder:X,viewOrders:Z,loadOrders:x,downloadOrders:ee}}});const se={id:"printArea"};function pe(e,d,C,f,c,m){const n=o("v-btn"),t=R,s=o("v-row"),v=N,I=L,_=o("v-col"),y=V,l=o("v-card"),p=o("v-card-actions"),w=F,E=o("v-card-text"),b=o("v-spacer"),O=o("v-dialog"),B=o("v-container");return S(),k(B,{fluid:""},{default:a(()=>[i(s,null,{default:a(()=>[i(_,{cols:"12",md:"8"},{default:a(()=>[e.isCategorySelected||e.isItemSelected?(S(),k(n,{key:0,class:"ma-2",onClick:e.goBack},{default:a(()=>[g("Back")]),_:1},8,["onClick"])):D("",!0),!e.isCategorySelected&&!e.isItemSelected?(S(),k(s,{key:1},{default:a(()=>[i(t,{categories:e.categories,onCategorySelected:e.selectCategory},null,8,["categories","onCategorySelected"])]),_:1})):e.isCategorySelected&&!e.isItemSelected&&e.selectedCategory?(S(),k(s,{key:2},{default:a(()=>[i(v,{selectedCategory:e.selectedCategory,onItemSelected:e.selectItem},null,8,["selectedCategory","onItemSelected"])]),_:1})):e.isItemSelected&&e.selectedFoodItem?(S(),k(s,{key:3},{default:a(()=>[i(I,{selectedFoodItem:e.selectedFoodItem,onProteinSelected:e.selectProtein,onFlavourSelected:e.selectFlavour},null,8,["selectedFoodItem","onProteinSelected","onFlavourSelected"])]),_:1})):D("",!0)]),_:1}),i(_,{cols:"12",md:"4"},{default:a(()=>[de("div",se,[i(l,{class:"ma-2"},{default:a(()=>[i(y,{selectedItems:e.selectedItems,totalBill:e.totalBill,editingItem:e.editingItem,onUpdateNote:e.updateEditingNote,onStartEditing:e.startEditing,onSaveEditing:e.saveEditingItem,onCancelEditing:e.cancelEditingItem,onIncreaseQuantity:e.increaseQuantity,onDecreaseQuantity:e.decreaseQuantity},null,8,["selectedItems","totalBill","editingItem","onUpdateNote","onStartEditing","onSaveEditing","onCancelEditing","onIncreaseQuantity","onDecreaseQuantity"])]),_:1})]),i(l,{class:"ma-2"},{default:a(()=>[i(p,null,{default:a(()=>[i(n,{dark:"",color:"primary",onClick:e.printOrder},{default:a(()=>[g("Print Order")]),_:1},8,["onClick"])]),_:1})]),_:1}),i(l,{class:"ma-2"},{default:a(()=>[i(p,null,{default:a(()=>[i(n,{onClick:e.saveOrder},{default:a(()=>[g("Save Order")]),_:1},8,["onClick"])]),_:1})]),_:1}),i(l,{class:"ma-2"},{default:a(()=>[i(p,null,{default:a(()=>[i(n,{onClick:e.viewOrders},{default:a(()=>[g("View Orders")]),_:1},8,["onClick"])]),_:1})]),_:1}),i(O,{modelValue:e.showDialog,"onUpdate:modelValue":d[1]||(d[1]=h=>e.showDialog=h),"max-width":"1000px","content-class":"my-dialog"},{default:a(()=>[i(l,null,{default:a(()=>[i(E,null,{default:a(()=>[i(w,{orders:e.savedOrders},null,8,["orders"])]),_:1}),i(p,null,{default:a(()=>[i(b),i(n,{color:"green darken-1",variant:"text",onClick:d[0]||(d[0]=h=>e.showDialog=!1)},{default:a(()=>[g("Close")]),_:1}),i(n,{color:"blue darken-1",variant:"text",onClick:e.downloadOrders},{default:a(()=>[g("Save As File")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}const Ce=le(me,[["render",pe],["__scopeId","data-v-e43944b6"]]);export{Ce as default};
