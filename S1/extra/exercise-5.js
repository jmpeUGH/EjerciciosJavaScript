const products = [{ name: 'Gorra de rodilla', sellCount: 10 }, { name: 'Pantalón de pana', sellCount: 302 }, { name: 'Reloj de papel albal', sellCount: 23 }, { name: 'Inpar de zapatos', sellCount: 6 }];

let totalSellCount = 0;
let totalProducts = 0;

for (let i = 0; i <= products.length - 1; i++) {
    totalSellCount += products[i].sellCount;
    totalProducts += 1;
}

console.log(totalSellCount/totalProducts);