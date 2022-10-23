var ct=0;
var f=localStorage.getItem('userid');
var e=parseInt(f);
const todo = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        //console.log(request, request.readyState)
        //console.log(request);
        if (request.readyState == 4 && request.status === 200) {
            //data=request.responseText;
            //console.log(request.responseText);
            const data = JSON.parse(request.responseText)
            callback(undefined, data);
        }
        else if (request.readyState == 4) {
            //console.log("sorry");
            callback('sorry', undefined);
        }
    });
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    request.send();
};
todo((err, data) => {
    //console.log('callback');
    //console.log(err,data);
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
        console.log('entering loop');
        console.log(typeof(data[0].completed));
        console.log(ctr);
        //console.log((((e+1)*20)-20),((e+1)*20))
        var z=0;
        console.log(document.getElementById('ch').checked);
        for (var t =(((e+1)*20)-20); t <((e+1)*20); t++)
         {
            console.log(t);
            
            //console.log(e);
            var c = document.getElementById('table2');
            var d = `
            <tr >
            <th class="fs-5">${t-(e*20)+1}</th>
            <td id='tab1'>${data[t].title}</td>
            <td id='tab2'>${data[t].completed}</td>
            <td id='tab3'><button type="button" class="btn btn-outline-secondary" onClick='edit(${t+1})'); >Edit</button></td>
            <td id='tab4'><button type="button" class="btn btn-outline-secondary" onClick='del(${t+1});')>Delete</button></td>
            </tr>
            `
            //console.log(a);
            c.innerHTML += d;
            //ct=ct+1;
            
        }
    }
}
);
var ctr=0;
function head()
{
    var c = document.getElementById('table2');
    var d = `
    <tr>
    <th scope="col">UserID</th>
    <th scope="col">TODO</th>
    <th scope="col">Status</th>
    <th scope="col">edit</th>
    <th scope="col">Delete</th>
</tr>
            `
            //console.log(a);
            c.innerHTML += d;
}
function complete()
{
    if(document.getElementById('ch').checked==true){
    document.getElementById('table2').innerHTML='';
    head();
    ctr=1;
    todo((err,data)=>{
        //console.log(data);
        var z=0;
        for (var t =(((e+1)*20)-20); t <((e+1)*20); t++)
         {
            
            if(data[t].completed==true)
            {
                z=z+1;
            //console.log(e);
            var c = document.getElementById('table2');
            var d = `
            <tr >
            <th class="fs-5">${z}</th>
            <td id='tab1'>${data[t].title}</td>
            <td id='tab2'>${data[t].completed}</td>
            <td id='tab3'><button type="button" class="btn btn-outline-secondary" onClick='edit(${t+1})'>Edit</button></td>
            <td id='tab4'><button type="button" class="btn btn-outline-secondary" onClick='del(${t+1})'>Delete</button></td>
            </tr>
            `
            //console.log(a);
            c.innerHTML += d;
            }
            
        }
        

    });
}
else{


    document.getElementById('table2').innerHTML='';
    head();
    ctr=1;
    todo((err,data)=>{
        //console.log(data);
        var z=0;
        for (var t =(((e+1)*20)-20); t <((e+1)*20); t++)
         {
            
                z=z+1;
            //console.log(e);
            var c = document.getElementById('table2');
            var d = `
            <tr >
            <th class="fs-5">${z}</th>
            <td id='tab1'>${data[t].title}</td>
            <td id='tab2'>${data[t].completed}</td>
            <td id='tab3'><button type="button" class="btn btn-outline-secondary" onClick='edit(${t+1})'>Edit</button></td>
            <td id='tab4'><button type="button" class="btn btn-outline-secondary" onClick='del(${t+1})'>Delete</button></td>
            </tr>
            `
            //console.log(a);
            c.innerHTML += d;
            
            
        }
        

    });
}

}
var y;
function del(y)
{
    console.log(y);
    var cd=prompt('You really want to delete?Enter Y for yes and No for N');
    console.log(cd);
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            var z=0;
            if(cd=="y" || cd=="Y")
            {
                document.getElementById('table2').innerHTML='';
                head();
            }
        for (var t =(((e+1)*20)-20); t <((e+1)*20); t++)
         {
            console.log(t);
            console.log(y);
            if(cd=="y" || cd=="Y")
            {
            if(t!=y-1)
            {
                z=z+1;
            //console.log(e);
            var c = document.getElementById('table2');
            var d = `
            <tr >
            <th class="fs-5">${z}</th>
            <td id='tab1'>${data[t].title}</td>
            <td id='tab2'>${data[t].completed}</td>
            <td id='tab3'><button type="button" class="btn btn-outline-secondary" onClick='edit(${t+1})'>Edit</button></td>
            <td id='tab4'><button type="button" class="btn btn-outline-secondary" onClick='del(${t+1});'>Delete</button></td>
            </tr>
            `
            //console.log(a);
            c.innerHTML += d;
            }
        }
        
            
        }
        })
        .catch(function (err) {
            console.log(err);
        });
}
function edit(y)
{
    console.log(y);
    console.log(y);
    var cd=prompt('Edit the title');
    console.log(cd);
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            var z=0;
            document.getElementById('table2').innerHTML='';
            head();
        for (var t =(((e+1)*20)-20); t <((e+1)*20); t++)
         {
            console.log(t);
            console.log(y);
            if(t!=y-1)
            {
                z=z+1;
            //console.log(e);
            var c = document.getElementById('table2');
            var d = `
            <tr >
            <th class="fs-5">${z}</th>
            <td id='tab1'>${data[t].title}</td>
            <td id='tab2'>${data[t].completed}</td>
            <td id='tab3'><button type="button" class="btn btn-outline-secondary" onClick='edit(${t+1})'>Edit</button></td>
            <td id='tab4'><button type="button" class="btn btn-outline-secondary" onClick='del(${t+1});'>Delete</button></td>
            </tr>
            `
            //console.log(a);
            c.innerHTML += d;
            
            }
            else{
                z=z+1;
                //console.log(e);
                var c = document.getElementById('table2');
                var d = `
                <tr >
                <th class="fs-5">${z}</th>
                <td id='tab1'>${cd}</td>
                <td id='tab2'>${data[t].completed}</td>
                <td id='tab3'><button type="button" class="btn btn-outline-secondary" onClick='edit(${t+1})'>Edit</button></td>
                <td id='tab4'><button type="button" class="btn btn-outline-secondary" onClick='del(${t+1});'>Delete</button></td>
                </tr>
                `
                //console.log(a);
                c.innerHTML += d;

            }
        
            
        }
        })
        .catch(function (err) {
            console.log(err);
        });
}
// function edit()
// {
//     let data = `{userId: 1, id:0, title: 'explicabo enim cumque porro aperiam occaecati minima', completed: false}`;
      
//     request.send(data);
// }
// function del()
// {

// }