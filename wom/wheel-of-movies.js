
var movies = [
    '12 Angry Men [AFI]',
    '2001: a Space Odyssey [AFI]',
    'A Clockwork Orange [AFI]',
    'A Night at the Opera [AFI]',
    'A Streetcar Named Desire [AFI]',
    'All About Eve [AFI]',
    'All the President\'s Men [AFI]',
    'Amelie',
    'American Gangster',
    'American Graffiti [AFI]',
    'American Psycho',
    'Anchorman',
    'Annie Hall [AFI]',
    'Any movie with Cary Grant',
    'Apocalypse Now [AFI]',
    'Being There',
    'Blackboard Jungle',
    'Blade Runner [AFI]',
    'Blues Brothers',
    'Boardwalk Empire (TV)',
    'Bond movies',
    'Bonnie and Clyde',
    'Boy Choir',
    'Bridge of Spies',
    'Bringing Up Baby [AFI]',
    'Butch Cassidy and the Sundance Kid [AFI]',
    'Cabaret [AFI]',
    'Casablanca [AFI]',
    'Casino',
    'Chinatown [AFI]',
    'City Lights [AFI]',
    'DOA',
    'Do the Right Thing [AFI]',
    'Dogma',
    'Double Indemnity [AFI]',
    'Dr. Strangelove [AFI]',
    'Duck Soup [AFI]',
    'E.T. the Extra-Terrestrial [AFI]',
    'Easy Rider [AFI]',
    'Election',
    'Gattaca',
    'Gone with the Wind [AFI]',
    'Goodfellas [AFI]',
    'Gotham (TV)',
    'Havoc',
    'High Noon [AFI]',
    'House of Cards (BBC)',
    'House of Cards (Netflix)',
    'I Know Who Killed Me',
    'In the Heat of the Night [AFI]',
    'Inception',
    'Intolerance [AFI]',
    'It Happened One Night [AFI]',
    'It\'s a Wonderful Life [AFI]',
    'Jaws [AFI]',
    'Juno',
    'King Kong',
    'Kingsman' ,
    'Lawrence of Arabia [AFI]',
    'Leaving Las Vegas',
    'Legend',
    'M*A*S*H [AFI]',
    'Midnight Cowboy [AFI]',
    'Modern Times [AFI]',
    'Moulin Rogue',
    'Mr. Smith Goes to Washington [AFI]',
    'Mrs Henderson Presents',
    'Nashville [AFI]',
    'Network [AFI]',
    'North by Northwest [AFI]',
    'Oceans 11 (recent)',
    'Oceans 11 (1960)',
    'On the Waterfront [AFI]',
    'One Flew Over the Cuckoo\'s Nest [AFI]',
    'Peaky Blinders',
    'Platoon [AFI]',
    'Primary',
    'Princess Mononoke',
    'Psycho [AFI]',
    'Pulp Fiction [AFI]',
    'Raging Bull [AFI]',
    'Raiders of the Lost Ark [AFI]',
    'Rear Window [AFI]',
    'Rebel Without a Cause',
    'Red River',
    'Rocky [AFI]',
    'Saving Private Ryan [AFI]',
    'Schindler\'s List [AFI]',
    'Serpico',
    'Shane [AFI]',
    'Sin City',
    'Singin\' in the Rain [AFI]',
    'Sink the Bismarck',
    'Snow White and the Seven Dwarfs [AFI]',
    'Some Like it Hot [AFI]',
    'Sophie\'s Choice [AFI]',
    'Spartacus',
    'Spring Breakers',
    'Stage Coach',
    'Star Wars [AFI]',
    'Sullivan\'s Travels [AFI]',
    'Sunrise [AFI]',
    'Sunset Blvd. [AFI]',
    'Taxi Driver [AFI]',
    'The African Queen [AFI]',
    'The Apartment [AFI]',
    'The Best Years of Our Lives [AFI]',
    'The Bridge on the River Kwai [AFI]',
    'The Deer Hunter [AFI]',
    'The French Connection [AFI]',
    'The General [AFI]',
    'The Godfather [AFI]',
    'The Godfather Part II [AFI]',
    'The Gods Must Be Crazy',
    'The Gold Rush [AFI]',
    'The Graduate [AFI]',
    'The Grapes of Wrath [AFI]',
    'The Great Gatsby',
    'The Italian Job',
    'The Last Picture Show [AFI]',
    'The Maltese Falcon [AFI]',
    'The Manchurian Candidate',
    'The Night Manager',
    'The Philadelphia Story',
    'The Runaways',
    'The Searchers [AFI]',
    'The Shawshank Redemption [AFI]',
    'The Silence of the Lambs [AFI]',
    'The Sixth Sense [AFI]',
    'The Sound of Music [AFI]',
    'The Treasure of the Sierra Madre [AFI]',
    'The Untouchables',
    'The West Wing',
    'The Wild Bunch [AFI]',
    'The Wild One',
    'The Wizard of Oz [AFI]',
    'The Wrestler',
    'The Thomas Crown Affair',
    'Titanic [AFI]',
    'To Kill a Mockingbird [AFI]',
    'Tootsie [AFI]',
    'Topaz',
    'Unforgiven [AFI]',
    'Vertigo [AFI]',
    'West Side Story [AFI]',
    'Who\'s Afraid of Virginia Woolf? [AFI]',
    'Wolf of Wall Street',
    'Yankee Doodle Dandy [AFI]'
];

// Create new wheel object specifying the parameters at creation time.

var theWheel;

function getRandomMovie() {
    return movies[Math.floor(Math.random()*movies.length)].substring(0,24);
}

function makeWheel() {
    var wheel = new Winwheel({
        'outerRadius'     : 212,        // Set outer radius so wheel fits inside the background.
        'innerRadius'     : 50,         // Make wheel hollow so segments don't go all way to center.
        'textFontSize'    : 13,         // Set default font size for the segments.
        'textOrientation' : 'horizontal', // Make text vertial so goes down from the outside of wheel.
        'textAlignment'   : 'inner',    // Align text to outside of wheel.
        'numSegments'     : 24,         // Specify number of segments.
        'segments'        :             // Define segments including colour and text.
        [                               // font size and test
            //colour overridden on backrupt segments.
            {'fillStyle' : '#ee1c24', 'text' : getRandomMovie()},
            {'fillStyle' : '#3cb878', 'text' : getRandomMovie()},
            {'fillStyle' : '#f6989d', 'text' : getRandomMovie()},
            {'fillStyle' : '#00aef0', 'text' : getRandomMovie()},
            {'fillStyle' : '#f26522', 'text' : getRandomMovie()},
            {'fillStyle' : '#a186be', 'text' : getRandomMovie()},
            {'fillStyle' : '#e70697', 'text' : getRandomMovie()},
            {'fillStyle' : '#fff200', 'text' : getRandomMovie()},
            {'fillStyle' : '#f6989d', 'text' : getRandomMovie()},
            {'fillStyle' : '#ee1c24', 'text' : getRandomMovie()},
            {'fillStyle' : '#3cb878', 'text' : getRandomMovie()},
            {'fillStyle' : '#f26522', 'text' : getRandomMovie()},
            {'fillStyle' : '#a186be', 'text' : getRandomMovie()},
            {'fillStyle' : '#fff200', 'text' : getRandomMovie()},
            {'fillStyle' : '#00aef0', 'text' : getRandomMovie()},
            {'fillStyle' : '#ee1c24', 'text' : getRandomMovie()},
            {'fillStyle' : '#f6989d', 'text' : getRandomMovie()},
            {'fillStyle' : '#f26522', 'text' : getRandomMovie()},
            {'fillStyle' : '#3cb878', 'text' : getRandomMovie()},
            {'fillStyle' : '#e70697', 'text' : getRandomMovie()},
            {'fillStyle' : '#a186be', 'text' : getRandomMovie()},
            {'fillStyle' : '#fff200', 'text' : getRandomMovie()},
            {'fillStyle' : '#00aef0', 'text' : getRandomMovie()},
            {'fillStyle' : '#ffffff', 'text' : getRandomMovie()},
        ],
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
    alert("Your movie is " + winningSegment.text);
    wheelSpinning = false;

    // Light up the spin button by changing it's source image and
    // adding a clickable class to it.
    document.getElementById('spin_button').src = "spin_on.png";
    document.getElementById('spin_button').className = "clickable";

    theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.

    // theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
    theWheel.draw();                // Call draw to render changes to the wheel.
}

powerSelected(wheelPower);
resetWheel();
