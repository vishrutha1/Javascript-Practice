//&& - AND - Both sides need to be true
// ||- OR - one side need to be true 

let isVerified = true
let isLoggedIn = true
let hasPaymenttaken = true
let isGuest = true

if(isLoggedIn && isVerified && hasPaymenttaken){
    console.log("Greeting message to user")
    console.log("grant access to user")
}
else if(isVerified || isGuest) (
    console.log("Allow free previews")
)
else {
    console.log("Message : Please contact admin")
}

