var products = [{
    id: 'SP1',
    name: 'Áo dài thêu họa tiết 1111',
    img: 'http://bizweb.dktcdn.net/100/093/179/products/699-a1b39ac0-9bbf-45fc-b557-7042140b39b4.jpg?v=1612626788410',
    price: 122000,
},
{
    id: 'SP2',
    name: 'Áo dài truyền thống',
    img: 'http://bizweb.dktcdn.net/100/093/179/products/699-a1b39ac0-9bbf-45fc-b557-7042140b39b4.jpg?v=1612626788410',
    price: 400000,
},
{
    id: 'SP3',
    name: 'Áo dài',
    img: 'http://bizweb.dktcdn.net/100/093/179/products/699-a1b39ac0-9bbf-45fc-b557-7042140b39b4.jpg?v=1612626788410',
    price: 350000,
},
{
    id: 'SP4',
    name: 'Áo dài hiện đại',
    img: 'http://bizweb.dktcdn.net/100/093/179/products/699-a1b39ac0-9bbf-45fc-b557-7042140b39b4.jpg?v=1612626788410',
    price: 564000,
},
{
    id: 'SP5',
    name: 'Áo dài hiện đại',
    img: 'https://lzd-img-global.slatic.net/g/p/4d90e647cf9521885295c99cfcdb0d05.jpg_720x720q80.jpg_.webp',
    price: 654000,
},
{
    id: 'SP6',
    name: 'Áo dài hiện đại',
    img: 'https://lzd-img-global.slatic.net/g/p/4d90e647cf9521885295c99cfcdb0d05.jpg_720x720q80.jpg_.webp',
    price: 123000,
},
{
    id: 'SP7',
    name: 'Áo dài hiện đại',
    img: 'https://lzd-img-global.slatic.net/g/p/4d90e647cf9521885295c99cfcdb0d05.jpg_720x720q80.jpg_.webp',
    price: 345000,
},
{
    id: 'SP8',
    name: 'Áo dài hiện đại',
    img: 'https://lzd-img-global.slatic.net/g/p/4d90e647cf9521885295c99cfcdb0d05.jpg_720x720q80.jpg_.webp',
    price: 258000,
},
];

// Đẩy mảng product vào local storage
function Save() {
    localStorage.setItem('listProduct', JSON.stringify(products));
}
// Lấy sản phẩm từ local storage
function load() {
    productss = JSON.parse(localStorage.getItem('listProduct'));
}
// Xuất sản phẩm ra html
if (localStorage.getItem('listProduct') != null) {
load();
}
var listLocal = function() {
var listproduct = '';
for (var i in productss) {
var data = JSON.parse(JSON.stringify(productss[i]));  

var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
    listproduct += '<div class="card product p-2" styte="width:auto">';
    listproduct += '<img class="card-img-top" src="' + data.img + '" alt="...">';
    listproduct += '<div class="card-title product-title text-center h5" >' +
    data.name + '</div>';
    listproduct += '<div class="price text-center h6">' + data.price + '₫</div>';
    listproduct += '<button class="btn btn-secondary" data-toggle="modal" data-target="#proDetails" onclick="proDetail('+i+')">Detail</button>'
    listproduct += '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' + data.id + " data-name=" + data.name +" data-img=" +data.img +" data-price=" +data.price + 'onclick="tks()">';
    listproduct += '<a>';
    listproduct += '<i class="fas fa-cart-plus"></i>';
    listproduct += '</a>';
    listproduct += '</span>';
    listproduct += '</div>';
    listproduct += '</div>';

document.getElementById('banchay').innerHTML += listproduct;
}

Save();
};

listLocal();
localStorage.clear();
