

// Create new wheel object specifying the parameters at creation time.
var theWheel = new Winwheel({
    'outerRadius'     : 212,        // Set outer radius so wheel fits inside the background.
    'innerRadius'     : 75,         // Make wheel hollow so segments don't go all way to center.
    'textFontSize'    : 16,         // Set default font size for the segments.
    'textOrientation' : 'horizontal', // Make text vertial so goes down from the outside of wheel.
    'textAlignment'   : 'outer',    // Align text to outside of wheel.
    'numSegments'     : 24,         // Specify number of segments.
    'segments'        :             // Define segments including colour and text.
    [                               // font size and test
        //colour overridden on backrupt segments.
        {'fillStyle' : '#ee1c24', 'text' : 'Midnight Cowboy'},
        {'fillStyle' : '#3cb878', 'text' : 'Serpico'},
        {'fillStyle' : '#f6989d', 'text' : 'Born into This'},
        {'fillStyle' : '#00aef0', 'text' : 'I Love You, Alice B. Toklas'},
        {'fillStyle' : '#f26522', 'text' : 'Raiders of the Lost Ark'},
        {'fillStyle' : '#000000', 'text' : 'Rocky'},
        {'fillStyle' : '#e70697', 'text' : 'Princess Mononoke'},
        {'fillStyle' : '#fff200', 'text' : 'Andromeda Strain'},
        {'fillStyle' : '#f6989d', 'text' : 'Mr. Smith Goes to Washington'},
        {'fillStyle' : '#ee1c24', 'text' : 'The Aviator'},
        {'fillStyle' : '#3cb878', 'text' : 'Easy A'},
        {'fillStyle' : '#f26522', 'text' : 'Bridge of Spies'},
        {'fillStyle' : '#a186be', 'text' : '2001: A Space Odyssey'},
        {'fillStyle' : '#fff200', 'text' : 'The Shining'},
        {'fillStyle' : '#00aef0', 'text' : 'Caddyshack'},
        {'fillStyle' : '#ee1c24', 'text' : 'Body Heat'},
        {'fillStyle' : '#f6989d', 'text' : 'Inland Empire'},
        {'fillStyle' : '#f26522', 'text' : '*M*A*S*H'},
        {'fillStyle' : '#3cb878', 'text' : 'Bad Day at Black Rock'},
        {'fillStyle' : '#000000', 'text' : 'Broadcast News'},
        {'fillStyle' : '#a186be', 'text' : 'One Flew Over the Cuckoo\'s Nest'},
        {'fillStyle' : '#fff200', 'text' : 'Memento'},
        {'fillStyle' : '#00aef0', 'text' : 'Labyrinth'},
        {'fillStyle' : '#ffffff', 'text' : 'Rear Window'}
    ],
    'animation' :           // Specify the animation to use.
    {
        'type'     : 'spinToStop',
        'duration' : 8,     // Duration in seconds.
        'spins'    : 3,     // Default number of complete spins.
        'callbackFinished' : 'alertPrize()'
    }
});

// Vars used by the code in this page to do power controls.
var wheelPower    = 0;
var wheelSpinning = false;

// -------------------------------------------------------
// Function to handle the onClick on the power buttons.
// -------------------------------------------------------
function powerSelected(powerLevel)
{
    // Ensure that power can't be changed while wheel is spinning.
    if (wheelSpinning == false)
    {
        // Reset all to grey incase this is not the first time the user has selected the power.
        document.getElementById('pw1').className = "";
        document.getElementById('pw2').className = "";
        document.getElementById('pw3').className = "";

        // Now light up all cells below-and-including the one selected by changing the class.
        if (powerLevel >= 1)
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

        // Light up the spin button by changing it's source image and adding a clickable class to it.
        document.getElementById('spin_button').src = "spin_on.png";
        document.getElementById('spin_button').className = "clickable";
    }
}

// -------------------------------------------------------
// Click handler for spin button.
// -------------------------------------------------------
function startSpin()
{
    // Ensure that spinning can't be clicked again while already running.
    if (wheelSpinning == false)
    {
        // Based on the power level selected adjust the number of spins for the wheel, the more times is has
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

        // Begin the spin animation by calling startAnimation on the wheel object.
        theWheel.startAnimation();

        // Set to true so that power can't be changed and spin button re-enabled during
        // the current animation. The user will have to reset before spinning again.
        wheelSpinning = true;
    }
}

// -------------------------------------------------------
// Function for reset button.
// -------------------------------------------------------
function resetWheel()
{
    theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
    theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
    theWheel.draw();                // Call draw to render changes to the wheel.

    document.getElementById('pw1').className = "";  // Remove all colours from the power level indicators.
    document.getElementById('pw2').className = "";
    document.getElementById('pw3').className = "";

    wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
}

// -------------------------------------------------------
// Called when the spin animation has finished by the callback feature of the wheel because I specified callback in the parameters.
// -------------------------------------------------------
function alertPrize()
{
    // Get the segment indicated by the pointer on the wheel background which is at 0 degrees.
    var winningSegment = theWheel.getIndicatedSegment();

    // Just alert to the user what happened.
    // In a real project probably want to do something more interesting than this with the result.
    if (winningSegment.text == 'LOOSE TURN')
    {
        alert('Sorry but you loose a turn.');
    }
    else if (winningSegment.text == 'BANKRUPT')
    {
        alert('Oh no, you have gone BANKRUPT!');
    }
    else
    {
        alert("Your movie is " + winningSegment.text);
    }
}
