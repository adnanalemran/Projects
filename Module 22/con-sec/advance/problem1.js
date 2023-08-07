function isValidPhotoName(photoName , imageExtension){
    if(typeof photoName !== 'string' || !Array.isArray(imageExtension)){
        return 'please provide valid input'
    }
    else{
        for(let item of imageExtension){
            if(photoName.toLowerCase().endsWith(item.toLowerCase())){
            return true;
        }
       }
       return false;
    }
}
const photo = 'image.jpg';
const extensions = [".jpg","jpeg","png","gif","ico"];
console.log(isValidPhotoName(photo,extensions));