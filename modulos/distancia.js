export function convertir(a,bool){
        let res
        if (a.value ==''){
            return '';
        }
        if(bool){
            console.log(a.value)
            res = a.value*100
        }
        else{
            res=a.value/100
        }
        return res;
    }