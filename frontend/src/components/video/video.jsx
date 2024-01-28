import './video.css'
import video1a from '../../assets/videos/video1_a.mp4'
import video1b from '../../assets/videos/video1_b.mp4'
import video1c from '../../assets/videos/video1_c.mp4'
import Question from '../question/question'
import React from 'react'

const videos = [video1a, video1b, video1c]
// const vl = videos.length;
// function question (qno, vno, vl) {

//   return (
//     <>
//       {/* <Question/> */}
//       <script>
//       for (int i=1; i<=vl; i++) {
//             <video id='video' controls loop>
//               <source src={videos[i]} type='video/mp4'/>
//             </video>
//         }
//       </script>
//     </>
//   )
// }

export default function Video() {

  return (
    <div className='video-container'>
      <video id='video' controls loop>
        <source src={videos[0]} type='video/mp4'/>
      </video>
      {/* <script type='text/javascript'>
        let video_element = document.getElementById('video')
        video_element.addEventListener('ended', question, false);
      </script> */}
    </div>
  )
}
