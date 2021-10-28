// generating gallery items 
let gallery = document.querySelector('.gallery');

function generateHTML([h, v]) {
    return `
            <div class="item h${h} v${v}">
                <img src="images/${randomNO(10)}.jpg">
                <div class="item_overlay">
                <button class="view">View -</button>
                </div>
         </div>
    `;
}

function randomNO(limit) {
    const no = Math.floor(Math.random() * limit);

    return no + 1;

}

// const html1 = HV.map(elem => generateHTML(elem)); 
const HV = Array.from({ length: 50 }, () => [randomNO(4), randomNO(4)]).concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]]);

const html = HV.map(generateHTML).join('');
// const html1 = HV.map(elem => generateHTML(elem)); 

gallery.innerHTML = html;
console.log(HV);


// on click functionality
const viewButtons = document.querySelectorAll('.view');
const overlay = document.querySelector('.overlay');
viewButtons.forEach(elem => {
    elem.addEventListener('click', (e) => {
        // console.log(e.target.parentElement.previousElementSibling.src);
        const url = e.target.parentElement.previousElementSibling.src;
        overlay.style.display = 'grid';
        overlay.children[0].children[1].src = url;
    })
});

const closeElem = document.querySelector('.close');
closeElem.addEventListener('click', () => {
    overlay.style.display = 'none';
});
