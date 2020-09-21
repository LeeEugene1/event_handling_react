import React,{Component} from 'react';

class EventPracticeClass extends Component{
    state = {
        username:'',
        message:''
    }

    // constructor(props){
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }
    // 화살표함수 메서드를정의하면 생략가능

    handleChange = (e) =>{
        this.setState({
            //input태그가 1개일때
            // message:e.target.value

            //2개일때
            [e.target.name] : e.target.value
        })
    }

    handleClick = (e) => {
        //input태그가 1개일때
        // alert(this.state.message);
        // this.setState({
        //     message:''
        // });

        //2개일때
        alert(this.state.username + ':' + this.state.message);
        this.setState({
            username:'',
            message:''
        })
    }

    //key를 눌렀을때 발생하는 keyPress이벤트처리
    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }
    render(){
        return(
            <div>
                <h1>이벤트연습</h1>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="사용자명"
                    // onChange={
                    //     e => {
                    //         console.log(e.target.value);
                    //     }
                    // }
                    value={this.state.username}
                    onChange={
                        this.handleChange
                    }
                />
                <input 
                    type="text" 
                    name="message" 
                    placeholder="아무거나입력해보세요"
                    value={this.state.message}
                    onChange={
                        this.handleChange
                    }
                    onKeyPress={
                        this.handleKeyPress
                    }
                />
                <button
                    onClick={
                        this.handleClick
                    }
                >확인</button>
            </div>
        );
    }
}

export default EventPracticeClass;