function BlackDog() {
    this.name = "흰둥이";
    return {
        name: '검둥이',
        bark: function () {
            console.log(this.name + ': 멍멍!');
        }
    }
}

function WhiteDog() {
    this.name = "흰둥이";
    return {
        name: '검둥이',
        bark: () => {
            console.log(this.name + ': 멍멍!');
        }
    }
}

const blackDog = new BlackDog();
blackDog.bark();

const whiteDog = new WhiteDog();
whiteDog.bark();

/*
    여기서 알 수 있는 것
    function 선언과 arrow function의 this가 보고 있는 것이 다름.
    function으로 선언 했을 때에는 자기 자신이 종속된 객체를 참조하고
    arrow function일 경우에는 자신의 객체를 참조해서 처리함
*/