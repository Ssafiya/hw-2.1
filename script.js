

 const menu={
    Пицца:[
        {пепперони:`тесто,соус,сыр,колбаса`, цена:600},

    ],
    Паста:[
        {болоньезе:`паста,соус,фарш,сыр`, цена :850},

    ],
    Напитки:[
        {холодные:`кока-кола`,цена:20
        },
        {горячие:`чай`,цена:20},
    ],
    

    

 }
 delete menu.Пицца
 menu.Пицца=`пепперони:тесто,соус,сыр. цена:600`

 
 let пепперони =тесто=20,соус=30,сыр=50,колбаса=60;
 let sumPepperoni=тесто+соус+сыр+колбаса;
 console.log(sumPepperoni);
 
 let болоньезе=паста=20,соусболоньезе=30,фарш=40,сырболоньезе=50;
 let sumBolonese= паста+соус+фарш+сыр;
 console.log(sumBolonese);

 let mas=[1,2,3]
 mas.splice(0,2,1);
 console.log(mas)

 




 console.log(menu);
 
 