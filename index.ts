import promptSync from 'prompt-sync';
import products from './products.json';

type Product = {
  id:number,
  name:string,
  description:string,
  category:string,
  price:number,
  quantity:number,
  discount:number,
  reviewCount:number
}

//map 1
const product: Product[] = products;

const descriptions = product.map((product, i)=> {
    return product.description;
});

console.log("Список товарів: ",descriptions);

//map 2

const NamePrice = product.map((product, i)=> {
    return{
         name: product.name,
         price: product.price 
    }
});
console.log("Товар та його ціна: ", NamePrice);


//filter 1

const hightTwentyQuantity = product.filter(product => product.quantity > 20);
console.log("Товарів кількість яких більша 20$: ", hightTwentyQuantity);

//filter 2

const hightPriceOH = product.filter(product => product.price > 100);
console.log("Ціна товару більша за 100$: ", hightPriceOH);

//filter3

const categoryElectronics = products.filter(product => product.category === "Electronics");
console.log("Товар категорії Electronics: ", categoryElectronics)

//filter4

const ExpensivePrice = product.filter(product => {
const discountprice = product.price * (1 - product.discount / 100);
return discountprice > 50;
});
console.log("Ціна із знижкою яка дороща 50$: ", ExpensivePrice)

//reduce 1
const totalPrice = products.reduce((accumulator, product) => {
  return accumulator + (product.price * product.quantity);
}, 0);

console.log("Загальна вартість усіх товарів однієї позиції :", totalPrice);
//reduce 2
const AveragePrice = totalPrice / products.length;

console.log("Середня ціна всіх товарів: ", AveragePrice.toFixed(1));


// Level 2

const theCheapestProduct = products.reduce((Expensive, Cheap) => {
  if (Expensive.price < Cheap.price) {
    return Expensive; 
  }
   else {
    return Cheap; 
  }
});
console.log("Найдешевший продукт", theCheapestProduct)

const theExpensivestProduct = products.reduce((Expensive, Cheap) => {
  if (Expensive.price > Cheap.price) {
    return Expensive; 
  }
   else {
    return Cheap; 
  }
});
console.log("Найдорощий продукт", theExpensivestProduct)

//2

const totalPriceWithDiscont = products.reduce((accumulator, product) => {
const discountprices = product.price * (1 - product.discount / 100);
return accumulator + (product.price * product.quantity);
}, 0);

console.log("Загальна вартість усіх товарів однієї позиції включаючи знижку: ", totalPriceWithDiscont);

//3

const ZeroQuantity = product.filter(product => product.quantity === 0 );
if(ZeroQuantity){
   console.log("О ні, цього товару більше немає на складі! "); 
}
else{
    console.log("Всі товари є в наявності ");
}

//4
const totalReviewCount = products.reduce((accumulator, product) => accumulator + product.reviewCount, 0);
console.log("Загальна кількість відгуків по всіх товарах:", totalReviewCount);


//Level 3

const categories = product.map(product => product.category); 
const uniqueCategories = Array.from(new Set(categories)); 
if(uniqueCategories.length === 0 ){
console.log("Не знайдено унікальні категорії товарів");
}
else{
console.log("Знайдено унікальні категорії товарів:", uniqueCategories);
}


//2

let productWithTheLongestDescription: Product = products[0];

for (let i = 1; i < products.length; i++) {
  const currentProduct = products[i];

  if (currentProduct.description.length > productWithTheLongestDescription.description.length) {
    productWithTheLongestDescription = currentProduct;
  }
}

console.log("Продукт із найбільшим описом:");
console.log(`Ім'я: ${productWithTheLongestDescription.name}`);
console.log(`Опис: ${productWithTheLongestDescription.description}`);
console.log(`Довжина опису: ${productWithTheLongestDescription.description.length}`);


//3

const newProduct: Product = {
  id: 13,
  name: "Iphone 16",
  description:"The iPhone 16 it`s beautiful phone for beautiful photos",
  category: "Electronics",
  price: 150.99,
  quantity: 184,
  discount: 5,
  reviewCount: 45,
};

products.push(newProduct);

console.log("Новий товар додано!:");
console.log(newProduct);
