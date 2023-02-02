import React from 'react'
import CounterApp from './counter-app'
import CounterAppAdvance from './counter-app-advance'
import PracOwais from './prc-owais'
import TodoApp from './todoapp'
//install ES7+ in extensions 
export default function page() {
  return (
    <>
    <h2>ToDo App by Owais</h2>
    <TodoApp/>
    <br/>
    <h2>1. String and useState Practice by Owais</h2>
    <PracOwais/>
    <br/>
    <br/>
    <h2>2. Counter App Practice by Owais</h2>
    <CounterApp/>
    <br/>
    <h2>3. Counter App Advance by Owais</h2>
    <CounterAppAdvance/>
    </>
  )
}
//we are importing all the files i.e.components such as prc-owais, counter-app and counter-app-advance and using them here.