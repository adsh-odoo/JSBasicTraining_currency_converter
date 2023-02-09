// const { onMounted } = require("./owl");

const {Component , mount ,xml, onMounted,props} = owl;
check = "hello hello2"

class Results  extends Component{
    static template = xml`
    <div class="status">
        <h1 id="status_human"><t t-esc = "props.human_choice"/></h1>
        <h1 id = "status"></h1>
        <h1 id="status_bot"></h1>
    </div>
    
    `
    static props = ['human_choice']
}

class Counter extends Component {
    static template = xml `
        <div class="score_container">
            <h3>Your Score 
                <div class="score" id="human"></div>
            </h3>
            <h3> Bot score
                <div class="score" id="bot"></div>
            </h3>
            
        </div>
        
        
        
    
    `
    // static components = {Buttons,Results} 

}
class Buttons extends Component{
    static template = xml `
    <div class="outer_container">
    <Counter/>
    <div class="buttons_container">
        <button class="btn" id = "rock" t-on-click="rock">Rock</button>
        <button class="btn" id = "paper" t-on-click="paper">Paper</button>
        <button class="btn" id = "scissor" t-on-click="scissor">Scissor</button>
    </div>
    <Results human_choice = "human_choice"/>
    </div>
    
    
    `
    human_choice = "human"
    status = "hello"
    computer_choice_final = ""
    rock(){
        let computer_choice = Math.ceil(Math.random()*3)
        if(computer_choice == 2){
            this.human_choice="Rock"
            this.status = "You Lose"
            this.computer_choice_final="paper"
            console.log(this.computer_choice_final)

        }
        else if (computer_choice == 3){
            this.human_choice="Rock"
            this.status = "You Win"
            this.computer_choice_final="scissor"
            console.log(this.computer_choice_final)

        }
        else{
            this.human_choice="Rock"
            this.status = "tied"
            this.computer_choice_final="rock"
            console.log(this.computer_choice_final)
        }
        console.log(this.status)
    }
    
    paper(){
        let computer_choice = Math.ceil(Math.random()*3)
        if(computer_choice == 1){
            this.human_choice="Paper"
            this.status = "You Win"
            this.computer_choice_final="rock"

        }
        else if (computer_choice == 3){
            this.human_choice="Paper"
            this.status = "You Lose"
            this.computer_choice_final="scissor"

        }
        else{
            this.human_choice="paper"
            this.status = "tied"
            this.computer_choice_final="paper"
        }
        console.log(this.status)

    }
    
    scissor(){
        let computer_choice = Math.ceil(Math.random()*3)
        if(computer_choice == 1){
            this.human_choice="Scissor"
            this.status = "You Lose"
            this.computer_choice_final="rock"
        }
        else if (computer_choice == 2){
            this.human_choice="Scissor"
            this.status = "You Win"
            this.computer_choice_final="paper"
        }
        else{
            this.human_choice="Scissor"
            this.status = "tied"
            this.computer_choice_final="scissor"
        }
        console.log(this.status)
    }
    
    // setup(){
        // onMounted(()=> console.log(computer_choice))
    // }
    static components = {Counter,Results}
    
}


// class app extends Component{
//     static template = xml`
//     <div class="outer_container">
//         <Counter/>
//         <Buttons/>
//         <Results/>
//     </div>
//     `
//     static components = {Counter,Buttons,Results}
// }


mount(Buttons, document.body)