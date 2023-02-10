const {Component ,onWillUpdateProps, mount ,xml, onMounted,props, useState} = owl;

class Results  extends Component{
    static template = xml`
    <div class="status">
        <h1 id="status_human"><t t-esc = "props.state[0]"/></h1>
        <h1 id = "status"><t t-esc="props.state[1]"/></h1>
        <h1 id="status_bot"><t t-esc="props.state[2]"/></h1>
    </div>
    `
    static props = ['state']
}
class Counter extends Component {
    static template = xml `
        <div class="score_container">
            <h3>Your Score 
                <div class="score" id="human"><t t-esc="props.state[0]"/></div>
            </h3>
            <h3> Bot score
                <div class="score" id="bot"><t t-esc="props.state[1]"/></div>
            </h3>
            
        </div>
    `
    static props = ['state']
}
class Buttons extends Component{
    static template = xml `
    <div class="outer_container">
    <Counter state = "[state.your_score,state.bot_score]"/>
    <div class="buttons_container">
        <button class="btn" id = "rock" t-on-click="evaluator">Rock</button>
        <button class="btn" id = "paper" t-on-click="evaluator">Paper</button>
        <button class="btn" id = "scissor" t-on-click="evaluator">Scissor</button>
    </div>
    <Results state = "[state.human_choice,state.status,state.computer_choice_final]"/>
    </div>    
    `
    setup(){
        this.state = useState({
            human_choice : "Press",
            status:"Buttons",
            computer_choice_final : "To Start",
            your_score: 0,
            bot_score: 0,
        })
        
    }

    evaluator=(event)=>{
        let computer_choice = Math.ceil(Math.random()*3)
        if(event.target.textContent==="Rock"){
            if(computer_choice == 2){
                        this.state.human_choice="Rock"
                        this.state.status = "You Lose"
                        this.state.computer_choice_final="paper"
                        this.state.bot_score++
                    }
                    else if (computer_choice == 3){
                        this.state.human_choice="Rock"
                        this.state.status = "You Win"
                        this.state.computer_choice_final="scissor"
                        this.state.your_score++
                    }
                    else{
                        this.state.human_choice="Rock"
                        this.state.status = "tied"
                        this.state.computer_choice_final="rock"
                    }
        }
        if(event.target.textContent==="Paper"){
            if(computer_choice == 1){
                        this.state.human_choice="Paper"
                        this.state.status = "You Win"
                        this.state.computer_choice_final="rock"
                        this.state.your_score++
            
                    }
                    else if (computer_choice == 3){
                        this.state.human_choice="Paper"
                        this.state.status = "You Lose"
                        this.state.computer_choice_final="scissor"
                        this.state.bot_score++
                    }
                    else{
                        this.state.human_choice="paper"
                        this.state.status = "tied"
                        this.state.computer_choice_final="paper"
                    }
        }
        if(event.target.textContent==="Scissor"){
            if(computer_choice == 1){
                        this.state.human_choice="Scissor"
                        this.state.status = "You Lose"
                        this.state.computer_choice_final="rock"
                        this.state.bot_score++
                    }
                    else if (computer_choice == 2){
                        this.state.human_choice="Scissor"
                        this.state.status = "You Win"
                        this.state.computer_choice_final="paper"
                        this.state.your_score++
                    }
                    else{
                        this.state.human_choice="Scissor"
                        this.state.status = "tied"
                        this.state.computer_choice_final="scissor"
                    }
        }

    }   
    static components = {Counter,Results}   
}

mount(Buttons, document.body)