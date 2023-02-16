
        var a = [45, 75, 67];
        var b = [45, 75, 67];
        var c = 0;
        
        if(a.length===b.length){
            for(var i=0; i<a.length; i++){
                if(a[i]===b[i]){
                    c++;
                }
            }
            if(a.length===c){
                console.log("same");
            }
            else{
                console.log("not same")
            }
        }
        else{
            console.log("not same");
        }