//Ajax GET request,Callback,Http request

class Request{

    constructor(){
        this.xhr=new XMLHttpRequest();
    }
    //GET request
    get(url){

        this.xhr.open("GET",url);
        this.xhr.onload=function(){
            if(this.status== 200){
                console.log(this.responseText);
            }
        }

        this.xhr.send();
    }
}
const request=new Request();
request.get("https://jsonplaceholder.typicode.com/albums")