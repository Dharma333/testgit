function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('authors');
// const url = 'https://randomuser.me/api/?results=10';
const url = 'https://creator.zoho.com/api/json/date-feature-app-ds/view/Form1_Report?authtoken=62d0930def80298c7966356dac00f512&zc_ownername=dharmarajc5idc&scope=creatorapi';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data.results;
  return authors.map(function(author) {
    let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span');
    img.src = author.picture.medium;
    span.innerHTML = `${author.name.first} ${author.name.last}`;
    document.getElementById("author").innerHTML=author.Sender_field;
    append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});