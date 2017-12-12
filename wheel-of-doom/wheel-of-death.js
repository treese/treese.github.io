function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var choices = [];
for (var i = 1; i <= 25; i++) {
    choices.push(i.toString());
}

choices = shuffle(choices);

// Create new wheel object specifying the parameters at creation time.

var theWheel;

const colors = ['#ee1c24', '#3cb878', '#f6989d', '#00aef0',  '#f26522',
                '#a186be', '#e70697', '#fff200', '#f6989d', '#ee1c24',
                '#3cb878', '#f26522', '#a186be', '#fff200', '#00aef0',
                '#ee1c24', '#f6989d', '#f26522', '#3cb878', '#e70697',
                '#a186be', '#fff200', '#00aef0', '#ffffff', '#f26522'];

function makeWheel() {

    choices = shuffle(choices);
    var segments = [];
    for (var i = 0; i < choices.length; i++) {
        segments.push({'fillStyle': colors[i], 'text': choices[i]});
    }

    var wheel = new Winwheel({
        'outerRadius'     : 212,        // Set outer radius so wheel fits inside the background.
        'innerRadius'     : 75,         // Make wheel hollow so segments don't go all way to center.
        'textFontSize'    : 16,         // Set default font size for the segments.
        'textOrientation' : 'horizontal', // Make text vertial so goes down from the outside of wheel.
        'textAlignment'   : 'outer',    // Align text to outside of wheel.
        'numSegments'     : choices.length,         // Specify number of segments.
        'segments'        : segments,
        'animation' :           // Specify the animation to use.
        {
            'type'     : 'spinToStop',
            'duration' : 8,     // Duration in seconds.
            'spins'    : 3,     // Default number of complete spins.
            'callbackFinished' : 'alertPrize()'
        }
    });
    return wheel;
}

// Vars used by the code in this page to do power controls.
var wheelSpinning = false;
var wheelPower    = 1;

// -------------------------------------------------------
// Function to handle the onClick on the power buttons.
// -------------------------------------------------------
function powerSelected(powerLevel)
{
    // Don't change the power if the wheel is spinning
    if (wheelSpinning) {
        return;
    }

    // Reset all to grey incase this is not the first time the user has selected the power.
    document.getElementById('pw1').className = "";
    document.getElementById('pw2').className = "";
    document.getElementById('pw3').className = "";

    // Now light up all cells below-and-including the one selected by changing the class.
    if (wheelPower >= 1)
    {
        document.getElementById('pw1').className = "pw1";
    }

    if (powerLevel >= 2)
    {
        document.getElementById('pw2').className = "pw2";
    }

    if (powerLevel >= 3)
    {
        document.getElementById('pw3').className = "pw3";
    }

    // Set wheelPower var used when spin button is clicked.
    wheelPower = powerLevel;
}

// -------------------------------------------------------
// Click handler for spin button.
// -------------------------------------------------------
function startSpin()
{
    // Ensure that spinning can't be clicked again while already running.
    if (wheelSpinning) {
        return;
    }
    // Based on the power level selected adjust the number of spins for the wheel, the more times is hasg
    // to rotate with the duration of the animation the quicker the wheel spins.
    if (wheelPower == 1)
    {
        theWheel.animation.spins = 3;
    }
    else if (wheelPower == 2)
    {
        theWheel.animation.spins = 6;
    }
    else if (wheelPower == 3)
    {
        theWheel.animation.spins = 9;
    }

    // Disable the spin button so can't click again while wheel is spinning.
    document.getElementById('spin_button').src       = "spin_off.png";
    document.getElementById('spin_button').className = "";

// Set to true so that power can't be changed and spin button re-enabled during
    // the current animation. The user will have to reset before spinning again.
    wheelSpinning = true;

    theWheel.stopAnimation(false);
    theWheel.rotationAngle = 0;
    theWheel.draw();

    // Begin the spin animation by calling startAnimation on the wheel object.
    theWheel.startAnimation();
}

// Function for reset button.
// -------------------------------------------------------
function resetWheel()
{
    if (theWheel) {
        theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
    }

    theWheel = makeWheel();
    theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
    theWheel.draw();                // Call draw to render changes to the wheel.

    /*
      document.getElementById('pw1').className = "";  // Remove all colours from the power level indicators.
      document.getElementById('pw2').className = "";
      document.getElementById('pw3').className = "";
    */
    wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.

    // Light up the spin button by changing its source image and
    // adding a clickable class to it.
    document.getElementById('spin_button').src = "spin_on.png";
    document.getElementById('spin_button').className = "clickable";
}

// Called when the spin animation has finished by the callback feature of
// the wheel because I specified callback in the parameters.

function alertPrize() {
    // Get the segment indicated by the pointer on the wheel
    // background which is at 0 degrees.

    var winningSegment = theWheel.getIndicatedSegment();
    alert("Number " + winningSegment.text + "!");
    choices = choices.filter(x => x != winningSegment.text);
    wheelSpinning = false;

    // Light up the spin button by changing it's source image and
    // adding a clickable class to it.
    document.getElementById('spin_button').src = "spin_on.png";
    document.getElementById('spin_button').className = "clickable";

    theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.

    // theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
    theWheel.draw();                // Call draw to render changes to
    // the wheel.
    resetWheel();
}

powerSelected(wheelPower);
resetWheel();
