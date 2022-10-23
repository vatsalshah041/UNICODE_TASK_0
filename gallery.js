console.log('hi');
var f=localStorage.getItem('album');
var e=parseInt(f);
console.log(e);

fetch('https://jsonplaceholder.typicode.com/photos')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);

           for(var i=((e-1)*50);i<(e*50);i++)
           {
            var s;
            s=data[i].url;
            console.log(i);
            //console.log(data[i].url);
            var c=document.getElementById('h');
            var d=`
            <img src=${data[i].url} alt="hii" style='width:25%; margin:10px; margin-left:100px;'>
            
            `
            c.innerHTML+=d;
            //console.log(i);
            

           }
        })
        .catch(function (err) {
            console.log(err);
        });