const data = [{
    imageUrl: 'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1348&h=2029',
    title: 'Mobile phone',
    shortDescription: 'Mobile phone perspective with greenery'
},
{
    imageUrl: 'https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Red Mountain',
    shortDescription: 'Beautiful red colored mountain'
},
{
    imageUrl: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Mountain',
    shortDescription: 'Snow capped mountain'
},
{
    imageUrl: 'https://images.pexels.com/photos/5103756/pexels-photo-5103756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Stars',
    shortDescription: 'Night view with stars'
}
];

export function renderCards() {
    // * selecting columns to append cards in them.
    const cols = document.querySelectorAll('.column');

    // * iterate in data array.
    data.forEach((item, i) => {

        // * finding column index in which card is to be appended.
        // * using modulus to find the index.
        const index = i % cols.length;

        // * appending cards using HTML.
        cols[index].innerHTML += getHTML(item);
    })
}

function getHTML(item) {
    return `
<div class="card">
  <div class="image-container">
    <img class="card-image" src="${item.imageUrl}">
  </div>
  <div class="text-xl">
    <b>${item.title}</b> – ${item.shortDescription}
  </div>
</div>`;
}