import './progress_bar.css'
import React from 'react'


function updateProgressBar(value, total) {
    document.getElementById("progress-bar_").value = ((value).toFixed(4) / (total).toFixed(4)) * 100;
}

function simulateProgress() {
    let value = 10, total = 100;
    const interval = setInterval(function () {
        if (value <= 100) {
            updateProgressBar(value, total);
        } else {
            clearInterval(interval);
        }
    }, 500); // You can adjust this value for different speeds
}



export default function Progress_bar() {
  return (
    <div className='progress-bar'>
        <progress id="progress-bar_" max="100" value="0" on>

        </progress>
    </div>
  )
}
