function showresult(choise)
{
    var br1=parseFloat(document.getElementById('br1').value);
    var br2=parseFloat(document.getElementById('br2').value);
    var r;
    var i=choise;
    
    switch(i)
        {
        case '1':
            r=br1+br2;
            break;
        case '2':
            r=br1-br2;
            break;
        case '3':
            r=br1*br2;
            break;
        case '4': 
            r=br1/br2;
            break;
        
        default:
            break;
                
        }
    document.getElementById('rez').value=r;
    
        
    
    }