export function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = ''; 

    const headline = document.createElement('h1');
    headline.textContent = "Our Menu";
    content.appendChild(headline);

    const menuList = document.createElement('ul');
    menuList.classList.add('menu-grid'); 
    const items = [
        { name: "Binary Burger", price: "$10" },
        { name: "Syntax Salad", price: "$8" },
        { name: "Full-Stack Fajitas", price: "$15" },
        { name: "Algorithmic Apple Pie", price: "$6" },
        { name: "Recursive Ramen", price: "$12" },
        { name: "Debugging Coffee", price: "$5" },
        { name: "404 Fries", price: "$4" },
        { name: "SQL on the Beach", price: "$14" },
        {name: "Bloody M-Array", price: "$13"},
        {name: "The Captcha Mocktail", price: "$9"},
        {name: "The Infinite Loop Latte", price: "$7"},
        {name: "The Stack Overflow Sundae", price: "$11"}
    ];

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} — ${item.price}`;
        menuList.appendChild(li);
    });

    content.appendChild(menuList);
}
