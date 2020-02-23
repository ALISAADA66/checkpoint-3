
document.getElementById("bolt").addEventListener("click",function(){
if( document.getElementById("txt").style.fontWeight=="normal"){
    document.getElementById("txt").style.fontWeight="bold";
}
   else {
    document.getElementById("txt").style.fontWeight="normal";
   }
})



document.getElementById("italic").addEventListener("click",function(){
    if( document.getElementById("txt").style.fontStyle=="normal"){
        document.getElementById("txt").style.fontStyle="italic";
    }
       else {
        document.getElementById("txt").style.fontStyle="normal";
       }
    })

    document.getElementById("und").addEventListener("click",function(){
        if( document.getElementById("txt").style.textDecoration=="none"){
            document.getElementById("txt").style.textDecoration="underline";
        }
           else {
            document.getElementById("txt").style.textDecoration="none";
           }
        })
function ali(a){
    document.getElementById("txt").style.fontSize=a.value +"px"

}
function changefontfamily(fontfamily){
    document.getElementById("txt").style.fontFamily=fontfamily.value 
}