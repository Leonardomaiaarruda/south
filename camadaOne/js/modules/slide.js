export default function slideImg(){
    let time = 5000,
    currentIndex = 0,
    imagens = document.querySelectorAll('.imagens img'),
    max = imagens.length;
    imagens[0].classList.add("selected")

    function avancarImg(){    
        imagens[currentIndex].classList.remove('selected'); 
        currentIndex++;

        if(currentIndex >= max)
            currentIndex = 0;
            imagens[currentIndex].classList.add('selected');
    }


    function voltarImg(){
        imagens[currentIndex].classList.remove('selected'); 
        currentIndex--;
        console.log(currentIndex)
        if(currentIndex <= 0)
            currentIndex = 0;
            imagens[currentIndex].classList.add('selected');
    }

    function next(){
        setInterval(() => {
            avancarImg()
        }, time);
    }

    window.addEventListener('load', next)
    document.querySelector('.seta-voltar').addEventListener('click', voltarImg);
    document.querySelector('.seta-avancar').addEventListener('click', avancarImg);
}




