$(document).ready(function()
{
    $("#addrow").click(function()
    {
        var prep='<tr class="data"> <td class="units"><input type="text" class="uni"></input></td>' +
                '  <td class="grade"><input type="text" class="gra"></input></td></tr>';
        $("#tabbody").append(prep);
        $(".btn-cont").css("margin-bottom", "10vh");
        $("table").css("margin-bottom", "5vh");
    });

    var units =[];
    var grades=[];
    
    $("#compute").click(function(){
        while(units.length > 0)
        {
            units.pop();
        }
        while(grades.length > 0)
        {
            grades.pop();
        }
        
    
        $('.data .units').each(function() {
            val=0;
            var val = $(".uni").val();
            val = parseFloat(val);
            units.push(val);

            $('.data .grade').each(function() {
                gra = 0;
                var gra = $(".gra").val();
                gra = parseFloat(gra);
                grades.push(gra);
            });

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


        var gpa = 0;

        gpa = parseFloat((totgrade / totunit) * 1.0);
        gpa = gpa.toFixed(3);

        while(units.length > 0)
        {
            units.pop();
        }
        while(grades.length > 0)
        {
            grades.pop();
        }
        $("#gpa").text("");
        $("#gpa").append('<h1> GPA: ' + gpa + '</h1>');
        
        totgrade = 0;
        totunit = 0;
        gpa = 0;
        
    });
    $("#reset").click(function()
    {
        window.location.href = "/";
    });
});