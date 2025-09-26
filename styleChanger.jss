const fonts=["Arial","Courier New","Cursive","Verdana","Courier New"]
        const colors=["blue","red","green","pink","purple","yellow","black","grey","orange","light green"]
        
        function changeTextStyle(){
            const message=document.querySelector("#message");
            const randomFont=fonts[Math.floor(Math.random() * fonts.length)];
            const randomColor=colors[Math.floor(Math.random()* colors.length)];

            message.style.fontFamily=randomFont;
            message.style.color=randomColor;

        }
             document.querySelector("#changeTextStyle").addEventListener("click",changeTextStyle);