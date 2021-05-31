var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function (){
    var data=JSON.parse(this.response);
    // loop it for 250 times bcs tha data is 250 countries
    for (var i in data){
        try{
        var name=data[i].name;
    var long=data[i].latlng;
    if(long.length===0)throw new Error("longitude not found");
    weatherdata(name,...long);
        }catch(x){
            console.log("Some Coordinates are Invalid"+name+' '+x.message);
        }
    //console.log(name+" "+lang)
    }
}
var weatherdata=function(name,lat,long){
    console.log(name+" "+lat+" "+long);
    var request= new XMLHttpRequest();
    var url='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=166e12c6a613d37d6ba2569d28f42657';
request.open('GET',url,true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(`${name}:${data.main.temp}`);
}
}