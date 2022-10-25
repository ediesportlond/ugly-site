let size = 60;
const randColor = () =>{
    let color = "#";
    for(let i =0; i <6 ; i++){
        color += Math.ceil(Math.random()*9);
    }
    return color;
}
const resizeMe = () => {
    size -= 0.33;
    if( size < 48){
        const color = randColor();
        $(".resize").css({"color": color })
    }
    adj = size+"pt";
    $(".resize").css({"font-size": adj })
    $(".addCat").append(`        <div class="catpic">
    <img src="https://placekitten.com/150/150" />
</div>`)
}
$(window).on('scroll', resizeMe);

setInterval(()=>confirm("Would you like to keep browsing?"),2000);

setInterval(()=>window.open("file:///Users/eddie/bocacode/ugly/index.html", "_blank"),3000);