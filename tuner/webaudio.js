context = new AudioContext;
currentFrequency = 440;

function setFrequency(f)
{
  currentFrequency = f;
}

function playFrequency()
{
  // Stop a potentially pre-existing sound
  stopFrequency();
  // Start the new sound
  oscillator = context.createOscillator();
  oscillator.connect(context.destination);
  oscillator.frequency.value = currentFrequency;
  oscillator.start(0);
}

// Stop the sound if one is playing
function stopFrequency()
{
    // This try/catch block is necessary in case a sound isn't actually playing
    try
    {
      oscillator.stop();
    } catch (err) { }
}
