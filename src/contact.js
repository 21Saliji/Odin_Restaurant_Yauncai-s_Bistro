export function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = "Contact Us";
    content.appendChild(headline);

    const info = document.createElement('p');
    info.textContent = "📍 6670, Mabandla Valley, SA";
    content.appendChild(info);

    const phone = document.createElement('p');
    phone.textContent = "📞 063-010-1010";
    content.appendChild(phone);
}
