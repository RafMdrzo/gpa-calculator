$(document).ready(function()
{
    $("#addrow").click(function()
    {
        var prep='<tr> <td><input type="number" class="units" id=""></input></td>' +
                ' <td><input type="number" class="grade" id=""></input></td></tr>'
        $("#tabbody").append(prep);
    });

    var units =[];
    var grades=[];

    $("#compute").click(function(){

        
    
        $('.data .units').each(function() {
            val=0;
            var val = $(".uni").val();
            val = parseFloat(val);
            units.push(val);
            
        });
        
        $('.data .grade').each(function() {
            gra = 0;
            var gra = $(".gra").val();
            gra = parseFloat(gra);
            grades.push(gra);
        });

        var totunit = 0;
        var totgrade = 0;

        for(let x = 0; x < grades.length; x++)
        {
            let val = grades[x];
            totgrade += parseFloat(val);
        }
        for(let y = 0; y < units.length; y++)
        {
            let val = units[y];
            totunit += parseFloat(val);
        }

        totgrade=parseFloat(totgrade);
        totunit=parseFloat(totunit);

        alert(totunit);
        alert(totgrade);

        var gpa = 0;

        gpa = parseFloat((totgrade / totunit) * 1.0);
        gpa = gpa.toFixed(3);



        $("#gpa").append('<h1> GPA: ' + gpa + '</h1>');
    });
});