function readTextFile(method,url) {
var p=new Promise(function(resolve,reject)
{
  var data=document.getElementById("show");
  if(data.style.display=="block")
	{
		data.style.display="none";
	}
	else
    {
		data.style.display="none";
		var rawFile = new XMLHttpRequest();
		rawFile.open(method, url, true);
		rawFile.send();
		rawFile.onreadystatechange = function() 
		{ 	
			if(rawFile.readyState!==4)
			{
				return;						
			}
			if (rawFile.readyState ===4 && rawFile.status == "200") 
			{
				console.log(rawFile.readyState);
				resolve(rawFile);
			}
			else
			{
				reject();
			}
		}
	 
	}
 });
 p.then(
		function resolve(rawFile)
		{
			console.log("success");
			show(rawFile.responseText);
		},
		function reject()
		{
			console.log("failure");
		}
	);
}
 function show(text)
 {
    var i,j,k,data;
	var cnt=0;
	var k,x="";
	var obj=[],objid=[];
    var data = JSON.parse(text);
	var leng=Object.keys(data).length;
	console.log("length is"+leng);
	for(i in data)
	{
		var h = document.createElement("H1");
		var t = document.createTextNode(data[i].id);
		h.appendChild(t);
		document.body.appendChild(h);
		var btn=document.createElement("button");
		btn.innerHTML = "view courses "+i;
		btn.id=i;
		console.log(btn.id);     	  
		document.body.appendChild(btn);
		obj.push(btn.id);
		k=i;
		console.log("obj length is"+obj.length);
		objid.push(document.getElementById(obj[k]));
		console.log("obj id length is"+objid.length);
		objid[k].addEventListener("click",function()
		{
			var bid = this.id;
			for(ind = 0; ind < data[bid].courses.length ; ind++)
			{
				var crs = data[bid].courses[ind];
				var nm = crs.name;
				var sc = crs.score;
				//Start
				var table=[];
				var row=[];
				var ele1=[];
				var ele2=[];
				var val1=[];
				var val2=[];
				table.push(document.createElement("TABLE"));
				var cnt1=data.length;
				console.log(cnt1);
				row.push(document.createElement("TR"));
				for(var t=0;t<row.length;t++)
				{
				  console.log("row is"+row[t]);
				}
				ele1.push(document.createElement("TD"));
				ele2.push(document.createElement("TD"));
				val1.push(document.createTextNode(nm));
				val2.push(document.createTextNode(sc));
				for(var t=0;t<ele1.length;t++)
				{
					ele1[t].appendChild(val1[t]);
				}
				for(var t=0;t<ele2.length;t++)
				{
					ele2[t].appendChild(val2[t]);
				}
				for(var t=0;t<row.length;t++)
				{
					row[t].appendChild(ele1[t]);
					row[t].appendChild(ele2[t]);
				}
				for(t=0;t<table.length;t++)
				{
					table[t].appendChild(row[t]);
					document.body.appendChild(table[t]);
					table[t].setAttribute("border", "2");
					table[t].setAttribute("cellpadding","10");
				}
				//End
			}
		});
	}
	
  }