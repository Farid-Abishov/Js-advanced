//Yeni Element yaratmaq
//   <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>         
const newLink=document.createElement("a");
const cardbody=document.getElementsByClassName("card-body")[1];
const todos=document.querySelectorAll("li.list-group-item")
const todolist=document.querySelector("ul.list-group")

newLink.id="clear-todos";
newLink.className="btn btn-danger";
newLink.href="htpps://www.youtube.com";
newLink.target="_blank";
newLink.textContent="Salam";

cardbody.appendChild(newLink) //En son elementden sonraya element artirir yaradir

//Element silme remove methodu
// todos[0].remove()
// todos[2].remove()

//remove child
todolist.removeChild(todolist.lastElementChild)
todolist.removeChild(todos[3])


//Text content-Guvenilir usul deil
//Text node
// const text=document.createTextNode("Naber");
// cardbody.appendChild(text);
