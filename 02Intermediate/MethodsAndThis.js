let myTodos = {
    day:'Monday',
    meetings:0,
    meetDone:0,

    addMeeting: function(num){
        this.meetings = this.meetings+num
    },

    meetDoneee: function(num){
        this.meetDone = this.meetDone-num
    },
    summary: function(){
        let meetLeft = this.meetings + this.meetDone
        return ` you have ${meetLeft} meetings left`
    }
}
myTodos.addMeeting(5)
myTodos.meetDoneee(3)
console.log(myTodos.summary())