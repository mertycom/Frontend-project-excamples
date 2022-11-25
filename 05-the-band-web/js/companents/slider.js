export default function slider(){

    const duration = 30000;
    let i=1;
    let imgList =['slider-1.jpeg','slider-2.jpeg']

    const imgEl = document.querySelector('.slider img')

    let myTimeout = setTimeout(handleTimeout,duration);
    

    function handleTimeout(){
        imgEl.src = `img/slider-${i}.jpg`
        i++
        if(i==4){
            i=1;
        }
        clearTimeout(myTimeout);
        myTimeout = setTimeout(handleTimeout,duration);
    }
}
