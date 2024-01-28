import './question.css'
import React from 'react'

export default function Question(question_no, video_no) {

    const q = ['What is the term for treating people unfairly based on the characteristics such as race, gender or religion?'];
    const op = [['Equality', 'Freedom', 'Discrimination', 'Justice']]
  return (
    <div className='question'>
      <h5>q[question_no + 1]</h5>
        <div className="mcq-options">
            <button>op[0]</button>
            <button>op[1]</button>
            <button>op[2]</button>
            <button>op[3]</button>
        </div>
        <button>Skip Question</button>
    </div>
  )
}
