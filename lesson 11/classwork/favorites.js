let favorites = JSON.parse(localStorage.getItem('favorites'));
for (const favorite of favorites) {
    let favDiv= document.createElement('div');
    favDiv.innerText = `Name: ${favorite.name} Age: ${favorite.age} Status: ${favorite.status}`;
    favDiv.style.marginTop = '10px';
    document.body.appendChild(favDiv);

}