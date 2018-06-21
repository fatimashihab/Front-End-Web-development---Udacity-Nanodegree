/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * NASA's countdown to launch includes checkpoints where NASA engineers complete certain technical tasks. During the final minute, 
 * NASA has 6 tasks to complete:

Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)
NOTE: "T-50 seconds" read as "T-minus 50 seconds".

Directions:
Write a while loop that counts down from 60 seconds and:

If there's a task being completed, it prints out the task
If there is no task being completed, it prints out the time as T-x seconds
Use the task and time descriptions described above.
 * Using a while loop, print out the countdown output above.
 */
var T=60;
// your code goes here

while(T>=0){
    if (T===50) console.log("Orbiter transfers from ground to internal power");
    else if (T===31) console.log("Ground launch sequencer is go for auto sequence start")
    else if (T===16) console.log("Activate launch pad sound suppression system");
    else if (T===10) console.log("Activate main engine hydrogen burnoff system");
    else if (T===6) console.log("Main engine start");
    else if (T===0) console.log("Solid rocket booster ignition and liftoff!");
    else console.log("T-" + T + " seconds");
T--;    
}