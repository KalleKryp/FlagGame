import React from 'react'
import './App.css'
import './questions'
import questions from './questions'

function App() {
  const name = 'Gissa flaggan'
  const today = new Date().toLocaleDateString()

  return (
    <div className='App'>

      <header className='App-header'>
        <h1>
          {name}
        </h1>
      </header>
      <GuessingBox info={questions[0]} />
      <GuessingBox info={questions[1]} />
      <GuessingBox info={questions[2]} />
      <GuessingBox info={questions[3]} />
      <hr></hr>

      <div></div>

    </div>

  )
}

function GuessingBox(props) {


  let reply1 = "Fel";
  let reply2 = "Fel";
  let reply3 = "Fel";

  if (props.info.alternatives[0].name == props.info.correctAnswer)
    reply1 = "Rätt!"

  if (props.info.alternatives[1].name == props.info.correctAnswer)
    reply2 = "Rätt!"

  if (props.info.alternatives[2].name == props.info.correctAnswer)
    reply3 = "Rätt!"


  return (
    <div className="GuessingBox">
      <hr></hr>
      <p><img src={props.info.questionFlagUrl}></img></p>

      <Flag title={props.info.alternatives[0].name} >{reply1}</Flag>
      <Flag title={props.info.alternatives[1].name} >{reply2}</Flag>
      <Flag title={props.info.alternatives[2].name} >{reply3}</Flag>



    </div>
  )

}



function Flag(props) {
  const [showContent, setShowContent] = React.useState(false);


  let childrenElement = null;
  if (showContent) {
    childrenElement = <div className='ArticleChildren'>{props.children}</div>;
  }

  return (
    <div className='Flag'>
      <h2 onClick={() => setShowContent(!showContent)}>{props.title}</h2>
      <em>{props.date}</em>
      {childrenElement}
    </div>)

}



export default App
