function isJavaScriptFIle(fileName){
    if(typeof fileName !== 'string'){
        return "! provide valid file name"
    }else{
        // if(fileName.toLowerCase.endsWith('.js')=== true){
        //     return true
        // }
        // else{
        //     return false
        // }
        // return fileName.toLowerCase().endsWith('.js');
        
        const arr =fileName.split('.');
        const lastElement = arr.pop();
        // console.log(lastElement);
        return lastElement.toLocaleLowerCase()==="js";
    }
}
console.log(isJavaScriptFIle("index.html.js"));
