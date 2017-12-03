var table,row1,cell1,cell2,OBJ;

xhr = new XMLHttpRequest();
var url = "json";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-type", "application/json");
xhr.onreadystatechange = function () { 
    if ((xhr.readyState == 4 && xhr.status == 200)) {
        //alert("DEBUG");
        OBJ = JSON.parse(xhr.response);
        var temp="";
            for(var obj in OBJ)
            {
                //console.log("Hi");
                if(temp==="")
                {
                    temp=OBJ[obj].IP;
                }
                if(OBJ[obj].IP!==temp)
                {
                    table = document.getElementById("leaks");
                    row1 = table.insertRow();
                    row1.className = 'danger';
                    cell1 = row1.insertCell(0);
                    cell2 = row1.insertCell(1);
                    cell3 = row1.insertCell(2);
                    cell1.innerHTML = OBJ[obj].Hostname;
                    cell2.innerHTML = OBJ[obj].IP;
                    cell3.innerHTML = OBJ[obj].Occurance;
                    //console.log(OBJ[obj].message+ " \n");
                    //write a new cell to ip table
                    temp = OBJ[obj].IP;
                }
                
                    table = document.getElementById("ip");
                    row1 = table.insertRow();
                    row1.className = 'warning';
                    cell1 = row1.insertCell(0);
                    cell2 = row1.insertCell(1);
                    cell3 = row1.insertCell(2);
                    cell1.innerHTML = OBJ[obj].Hostname;
                    cell2.innerHTML = OBJ[obj].IP;
                    cell3.innerHTML = OBJ[obj].Occurance;
                    //console.log(OBJ[obj].message+ " Trouble\n");
                    //write a new cell to leaks table
            }
                
                //for(var key in OBJ[obj])
                //{
                //    
                //    console.log("key: "+key+", value: "+OBJ[obj][key]);
                //}
            temp = "";
    }
    
};
var data = {"email":"hey@mail.com","password":"101010"};
xhr.send(data);


function f1()
{
    var table = document.getElementById("ip");
    while(table.rows.length > 1) { table.deleteRow(1); }
    var substring = document.getElementById("search").value; //Gets the text in the search box
    for(var obj in OBJ)
            {
                if((OBJ[obj].Hostname.indexOf(substring) !== -1) || (OBJ[obj].Occurance.indexOf(substring) !== -1) || (OBJ[obj].IP.indexOf(substring) !== -1))
                {
                row1 = table.insertRow();
                row1.className = 'warning';
              
                // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                cell1 = row1.insertCell(0);
                cell2 = row1.insertCell(1);
                cell3 = row1.insertCell(2);
                // Add some text to the new cells:
                cell1.innerHTML = OBJ[obj].Hostname;
                cell2.innerHTML = OBJ[obj].IP;
                cell3.innerHTML = OBJ[obj].Occurance;
                }
            }

//f2();
}
function f2()
{
    var table = document.getElementById("leaks");
    while(table.rows.length > 1) { table.deleteRow(1); }
    var substring = document.getElementById("search").value; //Gets the text in the search box
    for(var obj in OBJ)
            {
                if((OBJ[obj].Hostname.indexOf(substring) !== -1) || (OBJ[obj].Occurance.indexOf(substring) !== -1) || (OBJ[obj].IP.indexOf(substring) !== -1))
                {
                row1 = table.insertRow();
                row1.className = 'danger';
              
                // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                cell1 = row1.insertCell(0);
                cell2 = row1.insertCell(1);
                cell3 = row1.insertCell(2);
                cell1.innerHTML = OBJ[obj].Hostname;
                cell2.innerHTML = OBJ[obj].IP;
                cell3.innerHTML = OBJ[obj].Occurance;
                }
            }

}



