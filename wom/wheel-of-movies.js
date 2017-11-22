
var movies = [
    '12 Angry Men',
    '2001: a Space Odyssey',
    'A Clockwork Orange',
    'A Night at the Opera',
    'A Streetcar Named Desire',
    'All About Eve',
    'All the President\'s Men',
    'Amelie',
    'American Gangster',
    'American Graffiti',
    'American Psycho',
    'Anchorman',
    'Annie Hall',
    'Any movie with Cary Grant',
    'Apocalypse Now',
    'Being There',
    'Ben-Hur',
    'Blackboard Jungle',
    'Blade Runner',
    'Blues Brothers',
    'Boardwalk Empire (TV)',
    'Bond movies',
    'Bonnie and Clyde',
    'Boy Choir',
    'Bridge of Spies',
    'Bringing Up Baby',
    'Butch Cassidy and the Sundance Kid',
    'Cabaret',
    'Casablanca',
    'Casino',
    'Catch me if you can',
    'Chinatown',
    'City Lights',
    'DOA',
    'Do the Right Thing',
    'Dogma',
    'Double Indemnity',
    'Dr. Strangelove',
    'Duck Soup',
    'E.T. the Extra-Terrestrial',
    'Easy Rider',
    'Election',
    'Forrest Gump',
    'Gattaca',
    'Gone with the Wind',
    'Goodfellas',
    'Gotham (TV)',
    'Havoc',
    'High Noon',
    'House of Cards',
    'I Know Who Killed Me',
    'In the Heat of the Night',
    'Inception',
    'Intolerance',
    'It Happened One Night',
    'It\'s a Wonderful Life',
    'Jaws',
    'Juno',
    'King Kong',
    'Kingsman (men?)',
    'Labyrinth',
    'Lawrence of Arabia',
    'Leaving Las Vegas',
    'Legend',
    'Mad Men (TV)',
    'Mash',
    'Midnight Cowboy',
    'Modern Times',
    'Moulin Rogue',
    'Mr. Smith Goes to Washington',
    'Mrs Henderson Presents',
    'Nashville',
    'Network',
    'North by Northwest',
    'North by northwest',
    'Oceans 11',
    'Oceans 11 (1960)',
    'On the Waterfront',
    'One Flew Over the Cuckoo\'s Nest',
    'Peaky Blinders',
    'Person of internetst',
    'Platoon',
    'Primary',
    'Princess Mononoke',
    'Psycho',
    'Pulp Fiction',
    'Raging Bull',
    'Raiders of the Lost Ark',
    'Rear Window',
    'Rebel Without a Cause',
    'Red River',
    'Rocky',
    'Saving Private Ryan',
    'Saving Private Ryan [AFI]',
    'Schindler\'s List [AFI]',
    'Serpico',
    'Shane',
    'Sin City',
    'Singin\' in the Rain',
    'Sink the Bismarck',
    'Snow White and the Seven Dwarfs',
    'Some Like it Hot',
    'Sophie\'s Choice [AFI]',
    'Spartacus',
    'Spring Breakers',
    'Stage Coach',
    'Star Wars',
    'Sucker Punch',
    'Suits TV series',
    'Sullivan\'s Travels',
    'Sunrise',
    'Sunset Blvd.',
    'Swing Time',
    'Taxi Driver',
    'The African Queen',
    'The Apartment',
    'The Best Years of Our Lives',
    'The Bridge on the River Kwai',
    'The Deer Hunter',
    'The French Connection',
    'The General',
    'The Godfather',
    'The Godfather Part Ii',
    'The Godfather pt II',
    'The Gods Must Be Crazy',
    'The Gold Rush',
    'The Graduate',
    'The Grapes of Wrath',
    'The Great Escape',
    'The Great Gatsby',
    'The Italian Job',
    'The Last Picture Show',
    'The Lord of the Rings(FELLOWSHIP) |',
    'The Maltese Falcon',
    'The Manchurian Candidate',
    'The Night Manager',
    'The Philadelphia Story',
    'The Runaways',
    'The Searchers',
    'The Shawshank Redemption',
    'The Silence of the Lambs',
    'The Sixth Sense',
    'The Sound of Music',
    'The Treasure of the Sierra Madre',
    'The Untouchables',
    'The West Wing',
    'The Wild Bunch',
    'The Wild One',
    'The Wizard of Oz',
    'The Wrestler',
    'Thomas Crown Affair',
    'Tinker, tailor, soldier, spy',
    'Titanic',
    'To Kill a Mockingbird',
    'Tootsie',
    'Topaz',
    'Toy Story',
    'Unforgiven',
    'Vertigo',
    'West Side Story',
    'White Collar',
    'Who\'s Afraid of Virginia Woolf?',
    'Wolf of Wall Street',
    'Yankee Doodle Dandy'];

// Create new wheel object specifying the parameters at creation time.

var theWheel;

function getRandomMovie() {
    return movies[Math.floor(Math.random()*movies.length)];
}

function makeWheel() {
    var wheel = new Winwheel({
        'outerRadius'     : 212,        // Set outer radius so wheel fits inside the background.
        'innerRadius'     : 75,         // Make wheel hollow so segments don't go all way to center.
        'textFontSize'    : 16,         // Set default font size for the segments.
        'textOrientation' : 'horizontal', // Make text vertial so goes down from the outside of wheel.
        'textAlignment'   : 'outer',    // Align text to outside of wheel.
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
