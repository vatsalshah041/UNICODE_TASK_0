var ctr=0;
var f=localStorage.getItem('albumid');
var e=parseInt(f);
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
    request.open('GET', 'https://jsonplaceholder.typicode.com/albums');
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
        //console.log(data[0].title);
        //console.log(data);
        for(var t =(((e+1)*10)-10); t <((e+1)*10); t++)
        {
            console.log(t+1);
            
            var c=document.getElementById('table1');
            var d = `
            <tr >
            <th class="fs-5">${ctr+1}</th>
            <td id='tab1'>${data[t].title}</td>
            <td id='tab3'><button type="button" class="btn btn-outline-secondary" onClick='gallery(${ctr+1});'>View</button></td>
            </tr>
            `
            //console.log(a);
            c.innerHTML += d;
            ctr++;

        }
    }
});
var c;
function gallery(c)
{
    localStorage.setItem("album",c);

    //console.log(c);
    location.href='gallery.html';
}