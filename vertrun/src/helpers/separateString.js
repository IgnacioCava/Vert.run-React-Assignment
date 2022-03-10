export default function separate(string){

    for(let i=0;i<string.length;i++){
        if(isNaN(string[i])) 
            return [
                string.substring(0,string.indexOf(string[i])), 
                string.substring(string.indexOf(string[i]))
            ]
    }
}