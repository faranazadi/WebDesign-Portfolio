document.addEventListener("DOMContentLoaded", handleDocumentLoad) //Listens for when HTML doc has been loaded and parsed

    function handleDocumentLoad() //Executes code when HTML doc is loaded and parsed
    {
        var video = (document.getElementById('video')); //Checks to see if video exists or not
        video.volume = 1.0; //Sets video volume

        //Video controls
        var playButton = document.getElementById("playPause");
        var muteButton = document.getElementById("mute");
        var scrubSlider = document.getElementById("seekBar");
        var volumeSlider = document.getElementById("volume");
        var playbackRate = document.getElementById("playbackSpeed");
        var rewindButton = document.getElementById("rewind");
        var fastForwardButton = document.getElementById("fastForward");

        //Event listeners
        playButton.addEventListener("click", playPauseVideo);
        muteButton.addEventListener("click", muteUnmuteVideo);
        scrubSlider.addEventListener("change", scrubVideo);
        scrubSlider.addEventListener("mousedown", pauseSlider); //Used to listen to seek bar and pause video for smoother scrubbing
        scrubSlider.addEventListener("mouseup", resumeSlider); //Used to listen to seek bar and play video for smoother scrubbing
        video.addEventListener("timeupdate", movePlaySlider);

        volumeSlider.addEventListener("change", changeVolume);

        video.addEventListener("durationchange", getDuration);
        video.addEventListener("timeupdate", getPlaybackTime);
        video.addEventListener("durationchange", getPlaybackTime);
        playbackRate.addEventListener("change", videoSpeed);

        rewindButton.addEventListener("click", rewindVideo); //Listens for a click on RW button
        fastForwardButton.addEventListener("mousedown", tripleSpeed); //Listens for a click (hold) on FF button
        fastForwardButton.addEventListener("mouseup", doubleSpeed); //Listens for when click is 'released'
        fastForwardButton.addEventListener("dblclick", normalSpeed); //Listens for a double click on FF button

    function playPauseVideo()
    {
        if(video.paused === true)
        {
            video.play();
            playButton.innerHTML = "Pause"; //Update button text
        }
        else
        {
            video.pause();
            playButton.innerHTML = "Play";
        }
    }

    function muteUnmuteVideo()
    {
        if(video.muted === true)
        {
            video.muted = false;
            muteButton.innerHTML = "Mute"; //Update button text
        }
        else
        {
            video.muted = true;
            muteButton.innerHTML = "Unmute"; 
        }
    }

    function scrubVideo()
    {
        /*
        * (Total time of video * scrubSlider value) * 100 = x%
        * Change currentTime to point in video just calculated
        */
        var scrubTime = video.duration * (scrubSlider.value / 100);
        video.currentTime = scrubTime; 
    }

    function movePlaySlider()
    {
        //Reverse of calculation above used to update scrubSlider.value
        var playbackPoint = (100 / video.duration) * video.currentTime;
        scrubSlider.value = playbackPoint; 
    }

    function pauseSlider()
    {
        video.pause(); 
    }

    function resumeSlider()
    {
        video.play(); 
    }

    function changeVolume()
    {
        var setVolume = (volumeSlider.value / 100);
        video.volume = setVolume;
    }

    function getDuration()
    {
        var durationDisplay = document.getElementById("durationField");
        var videoDuration = video.duration;

        var minutes = Math.floor(videoDuration / 60); //Math.floor used to round down to a whole number
        var seconds = Math.floor(videoDuration % 60);

        if(minutes < 10)
        {
            minutes = "0" + minutes; //Adds a zero e.g. 03:00 
        }
        if(seconds < 10)
        {
            seconds = "0" + seconds; //Same as above e.g. 03:03
        }

        durationDisplay.value = minutes + ":" + seconds; //Update durationDisplay field
    } 

    function getPlaybackTime()
    {
        var playbackDisplay = document.getElementById("playbackField");
        var currentPlayback = video.currentTime;

        var minutes = Math.floor(currentPlayback / 60);
        var seconds = Math.floor(currentPlayback % 60);

        if(minutes < 10)
        {
            minutes = "0" + minutes;
        }
        if(seconds < 10)
        {
            seconds = "0" + seconds;
        }

        playbackDisplay.value = minutes + ":" + seconds;     
    }

    //Video playback speed controls    
    function videoSpeed()
    {
        video.playbackRate = playbackRate.value;
    }
        
    function normalSpeed()
    {
        playbackRate.value = 1;
        video.playbackRate = playbackRate.value;
    }

    function rewindVideo()
    {
        video.currentTime = 0;
    }

    function doubleSpeed()
    {
        playbackRate.value = 2;
        video.playbackRate = playbackRate.value;
    }

    function tripleSpeed()
    {
        video.playbackRate = 3;
    }
}