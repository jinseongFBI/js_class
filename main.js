class Parents{
  #name2='';//private 선언
  //부모 클래스
  constructor(name){
    this.name=name;
    this.#name2=name;
  }
 add(number,number2){return number+number2;}
}
//class는 strictmode가 암묵적으로 실행되며 객체를 생성할때 new를 써야 한다. 
//댜양한 함수등을 상속받을 수가 있다 extends로 
//constructor가 없을 시 암묵적으로 생성되며 그의 초기값은 defined이다.
//반드시 자식클래스에서 constructor있을시 super 을 써져야 한다.
//class 함수취급을 받는다.

class sub extends Parents{
//클래스 sub는 Parents를 상속받음
constructor(){//constructor 안에 super가 있어야함 sub는 프로퍼티를 생성의 목적이아니고 부모 클래스가 프로터티를 생성을 목적이다.
  super();//자식클래스는 xc


}

}
const a=new sub('jin seong')
console.log(a)
let num=a.add(1,2);
console.log(num);
// console.log(a.#name2);


//deep 내부구조
//function.property,class parents,class sub/ 체인구조를 가지며  상속받는다.
//  l                    l            l              construct 연결하며
//object.property,parents.property,sub.property/ 체인 구조를 가지며 단방향-구조 이며  property로 상속받는다.

//스코프는 deep
//전역 실행 컨텍스트에서 전역 렉시컬 환경 컨텍스트에서 1.객체 환경 /2.this 바인딩/3.외부환경 컨텍스트 
//연결되면 전역 렉시컬 환경 컨텍스트에서 객체 환경 컨텍스트/선언 환경 컨텍스트로 되고  다음은 window로 가게 된다.
//각각 바인딩 되면 전역렉시컬 환경 컨텍스의 외부 와 각각의 렉시컬환경 컨텍스트로 연결되게 된다.
//스택은 함수1 함수 2가 있을때  0 / 렉시컬/ 렉시컬 함수1/렉시컬 함수1 함수2/ 렉시컬 함수1/ 렉시컬 /0
//사라질때 함수의 렉시컬 컨텍스트가 사라지는 것이 아니라 소멸되더라도 참조하면 연결되게 된다.
//class/function이 있을 때 실행컨텍스트
