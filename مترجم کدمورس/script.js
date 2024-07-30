
let input = document.querySelector('input');

let button = document.querySelector('#button');

let khorogi = document.querySelector('.khorogi');

let kalame = document.getElementById('kalame');

let bargasht = document.getElementById('bargasht');

let alert1 = document.getElementById('alert');

let x = document.querySelector('.x');


alert("برای نوشتن از . و - استفاده کنید")


button.addEventListener('click', function(){

    switch(input.value){
        
        case '-.' :
            khorogi.innerHTML = khorogi.innerHTML +'ا'
            input.value = ''
            break;

        case '...-' :
            khorogi.innerHTML = khorogi.innerHTML + 'ب'
            input.value = ''
            break;

        case '.--.' :
            khorogi.innerHTML = khorogi.innerHTML + 'پ'
            input.value = ''
            break;

        case '-' :
            khorogi.innerHTML = khorogi.innerHTML + 'ت'
            input.value = ''
            break;

        case '.-.-' :
            khorogi.innerHTML = khorogi.innerHTML + 'ث'
            input.value = ''
            break;

        case '---.' :
            khorogi.innerHTML = khorogi.innerHTML + 'ج'
            input.value = ''
            break;

        case '.---' :
            khorogi.innerHTML = khorogi.innerHTML + 'چ'
            input.value = ''
            break;

        case '....' :
            khorogi.innerHTML = khorogi.innerHTML + 'ح'
            input.value = ''
            break;

        case '-..-' :
            khorogi.innerHTML = khorogi.innerHTML + 'خ'
            input.value = ''
            break;

        case '..-' :
            khorogi.innerHTML = khorogi.innerHTML + 'د'
            input.value = ''
            break;

        case '-...' :
            khorogi.innerHTML = khorogi.innerHTML + 'ذ'
            input.value = ''
            break;

         case '.-.' :
            khorogi.innerHTML = khorogi.innerHTML + 'ر'
            input.value = ''
            break;

        case '..--' :
            khorogi.innerHTML = khorogi.innerHTML + 'ز'
            input.value = ''
            break;

        case '.--' :
            khorogi.innerHTML = khorogi.innerHTML + 'ژ'
            input.value = ''
            break;

        case '...' :
            khorogi.innerHTML = khorogi.innerHTML + 'س'
            input.value = ''
            break;

        case '----' :
            khorogi.innerHTML = khorogi.innerHTML + 'ش'
            input.value = ''
            break;

        case '-.-.' :
            khorogi.innerHTML = khorogi.innerHTML + 'ص'
            input.value = ''
            break;

        case '..-..' :
            khorogi.innerHTML = khorogi.innerHTML + 'ض'
            input.value = ''
            break;

        case '-..' :
            khorogi.innerHTML = khorogi.innerHTML + 'ط'
            input.value = ''
            break;

        case '--.-' :
            khorogi.innerHTML = khorogi.innerHTML + 'ظ'
            input.value = ''
            break;

        case '---' :
            khorogi.innerHTML = khorogi.innerHTML + 'ع'
            input.value = ''
            break;

        case '--..' :
            khorogi.innerHTML = khorogi.innerHTML + 'غ'
            input.value = ''
            break;

        case '.-..' :
            khorogi.innerHTML = khorogi.innerHTML + 'ف'
            input.value = ''
            break;

        case '---...' :
            khorogi.innerHTML = khorogi.innerHTML + 'ق'
            input.value = ''
            break;

        case '-.-' :
            khorogi.innerHTML = khorogi.innerHTML + 'ک'
            input.value = ''
            break;

        case '-.--' :
            khorogi.innerHTML = khorogi.innerHTML + 'گ'
            input.value = ''
            break;

        case '..-.' :
            khorogi.innerHTML = khorogi.innerHTML + 'ل'
            input.value = ''
            break;

         case '--' :
            khorogi.innerHTML = khorogi.innerHTML + 'م'
            input.value = ''
            break;

        case '.-' :
            khorogi.innerHTML = khorogi.innerHTML + 'ن'
            input.value = ''
            break;

        case '--.' :
            khorogi.innerHTML = khorogi.innerHTML + 'و'
            input.value = ''
            break;

        case '.' :
            khorogi.innerHTML = khorogi.innerHTML + 'ه'
            input.value = ''
            break;

        case '..' :
            khorogi.innerHTML = khorogi.innerHTML + 'ی'
            input.value = ''
            break;
            
        case 'ا' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '-.'
            input.value = ''
            break;

        case 'ب' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '...-'
            input.value = ''
            break;

        case 'پ' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '.--.'
            input.value = ''
            break;

        case 'ت' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '-'
            input.value = ''
            break;

        case 'ث' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '.-.-'
            input.value = ''
            break;

        case 'ج' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '---.'
            input.value = ''
            break;

        case 'چ' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '.---'
            input.value = ''
            break;

        case 'ح' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '....'
            input.value = ''
            break;

        case 'خ' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '-..-'
            input.value = ''
            break;

        case 'د' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '..-'
            input.value = ''
            break;

        case 'ذ' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '-...'
            input.value = ''
            break;

        case 'ر' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '.-.'
            input.value = ''
            break;

        case 'ز' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '..--'
            input.value = ''
            break;

        case 'ژ' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '.--'
            input.value = ''
            break;

        case 'س' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '...'
            input.value = ''
            break;

        case 'ش' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '----'
            input.value = ''
            break;

        case 'ص' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '-.-.'
            input.value = ''
            break;

        case 'ض' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '..-..'
            input.value = ''
            break;

        case 'ط' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '-..'
            input.value = ''
            break;

        case 'ظ' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '--.-'
            input.value = ''
            break;

        case 'ع' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '---'
            input.value = ''
            break;

        case 'غ' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '--..'
            input.value = ''
            break;

        case 'ف' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '.-..'
            input.value = ''
            break;

        case 'ق' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '---...'
            input.value = ''
            break;

        case 'ک' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '-.-'
            input.value = ''
            break;

        case 'گ' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '-.--'
            input.value = ''
            break;

        case 'ل' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '..-.'
            input.value = ''
            break;

        case 'م' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '--'
            input.value = ''
            break;

        case 'ن' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '.-'
            input.value = ''
            break;

        case 'و' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '--.'
            input.value = ''
            break;

        case 'ه' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '.'
            input.value = ''
            break;

        case 'ی' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '..'
            input.value = ''
            break;  

        case '،' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '-.-.-.'
            input.value = ''
            break;

        case '-.-.-.' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '،'
            input.value = ''
            break;

        case ':' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '...---'
            input.value = ''
            break;

        case '...---' :
            khorogi.innerHTML = khorogi.innerHTML + " " + ':'
            input.value = ''
            break;

        case '..--..' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '؟'
            input.value = ''
            break;

        case '؟' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '..--..'
            input.value = ''
            break;

        case '!' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '--..--'
            input.value = ''
            break;

        case '--..--' :
            khorogi.innerHTML = khorogi.innerHTML + " " + '!'
            input.value = ''
            break;

        default:
            alert1.style.display = 'block'
            input.value = ''
        
}})

    x.addEventListener('click', function(){
        alert1.style.display = 'none'

    })


kalame.addEventListener('click', function(){
    khorogi.innerHTML = khorogi.innerHTML + "  |  "
})


bargasht.addEventListener('click', function(){

    khorogi.innerHTML = ""
    input.value = ""

})

