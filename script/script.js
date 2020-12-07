const meni=document.getElementById("meni").style;

function nemaProjekcija(){
    alert("Nema zakazanih projekcija za odabrani dan, pa tek smo počeli jarane");
}
window.addEventListener('scroll', ()=>{
    if(this.scrollY===0){
        meni.backgroundColor="#20232a";
        meni.height=meniHeight;
    }
    else{
        meni.backgroundColor="#20232aad";
        
    }
});