

var ctr=0;
//const data = [];
const user = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        //console.log(request, request.readyState)
        //console.log(request);
        if (request.readyState == 4 && request.status === 200) {
            //data=request.responseText;
            //console.log(request.responseText);
            const data=JSON.parse(request.responseText)
            callback(undefined,data);
        }
        else if (request.readyState == 4) {
            //console.log("sorry");
            callback('sorry',undefined);
        }
    });
    request.open('GET', 'https://jsonplaceholder.typicode.com/users');
    request.send();
};
user((err,data)=>{
    //console.log('callback');
    //console.log(err,data);
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(data);
        //console.log('hi');
        var a=0;
        //console.log(data[0].name);
        //console.log(data);
        for(a=0;a<10;a++)
        {
            
            var c=document.getElementById('table1');
            var d = `
            <tr >
            <th class="fs-5">${a + 1}</th>
            <td id='tab1'>${data[a].name}</td>
            <td id='tab2'>${data[a].email}</td>
            <td id='tab3'><button type="button" class="btn btn-outline-secondary" onClick="todo(${ctr});">Todo</button></td>
            <td id='tab4'><button type="button" class="btn btn-outline-secondary" onClick="album(${ctr});">Albums</button></td>
            </tr>
            `
            //console.log(a);
            c.innerHTML += d;
            ctr++;

        }
    }
});
var c;
// function todo(c)
// {
//     console.log('heloo');
//     console.log(c);
// }
function todo(c)
{
    localStorage.setItem('userid',c);
    location.href="todo1.html";
    
}
function album(c)
{
    console.log('hi');

    
    localStorage.setItem('albumid',c);
    location.href='album.html';
}