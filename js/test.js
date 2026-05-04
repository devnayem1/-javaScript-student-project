document.write("<div class='menu-area'>");


document.write("<input type='text' name='input' id='input'>");

document.write("<input type='submit' name='submit' id='submit' onclick='checkinput()'>");

document.write("<table class='t-design'>");
    document.write("<tr>");
        
        document.write("<th>Roll</th>");
        document.write("<th>Name</th>");
        document.write("<th>Batch</th>");
        document.write("<th>ID</th>");
        document.write("<th>Department</th>");


    document.write("</tr>");

    
document.write("<tr>");
            document.write("<td id='roll'></td>");
            document.write("<td id='Name'></td>");
            document.write("<td id='Batch'></td>");
            document.write("<td id='ID'></td>");
            document.write("<td id='Department'></td>");

        document.write("</tr>");

    document.write("</table>");

document.write("</div>");

function  checkinput(){
    var input= document.getElementById("input").value;

    if (input==1) {
        document.getElementById("roll").innerHTML='1';
        document.getElementById("Name").innerHTML='Atiquzzaman';
        document.getElementById("Batch").innerHTML='WDD 16';
        document.getElementById("ID").innerHTML='FIT WDD-1601';
        document.getElementById("Department").innerHTML='Web Design & Development';
    }
    else if (input==35) {
        document.getElementById("roll").innerHTML='35';
        document.getElementById("Name").innerHTML='MD Rasel Mia';
        document.getElementById("Batch").innerHTML='WDD 16';
        document.getElementById("ID").innerHTML='FIT WDD-1635';
        document.getElementById("Department").innerHTML='Web Design & Development';
    }
    else if (input==2) {
        document.getElementById("roll").innerHTML='2';
        document.getElementById("Name").innerHTML='MD Sabbir Hossain';
        document.getElementById("Batch").innerHTML='WDD 16';
        document.getElementById("ID").innerHTML='FIT WDD-1602';
        document.getElementById("Department").innerHTML='Web Design & Development';
    }
    else if (input==3) {
        document.getElementById("roll").innerHTML='3';
        document.getElementById("Name").innerHTML='MD Nayem Hossain';
        document.getElementById("Batch").innerHTML='WDD 16';
        document.getElementById("ID").innerHTML='FIT WDD-1603';
        document.getElementById("Department").innerHTML='Web Design & Development';
    }
    else if (input==5) {
        document.getElementById("roll").innerHTML='5';
        document.getElementById("Name").innerHTML='Mostakim Morshed';
        document.getElementById("Batch").innerHTML='WDD 16';
        document.getElementById("ID").innerHTML='FIT WDD-1605';
        document.getElementById("Department").innerHTML='Web Design & Development';
    }
    else if (input==4) {
        document.getElementById("roll").innerHTML='4';
        document.getElementById("Name").innerHTML='Fahmida Khandoker';
        document.getElementById("Batch").innerHTML='WDD 16';
        document.getElementById("ID").innerHTML='FIT WDD-1604';
        document.getElementById("Department").innerHTML='Web Design & Development';
    }
    else if (input==6) {
        document.getElementById("roll").innerHTML='6';
        document.getElementById("Name").innerHTML='Rehanul haque Babu';
        document.getElementById("Batch").innerHTML='WDD 16';
        document.getElementById("ID").innerHTML='FIT WDD-1606';
        document.getElementById("Department").innerHTML='Web Design & Development';
    }
}