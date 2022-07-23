import logo from './logo.svg';
import './App.css';
import './css/main.css';
import { Component } from 'react';
import {QuestionBookInsert, QuestionBtn} from './components/QuestionBookInsert';
import { Question } from './components/Question';
import { QuestionBook } from './components/QuestionBook';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuestionInsert from './components/QuestionInsert';
import Header from './components/Header';
import Main from './components/Main';
import { Modal } from './components/Modal';

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      modal_component:"",
      isModal:false
    }
  }

  setModal(component){
    this.setState({modal_component:component, isModal:true});
  }

  closeModal(){
    this.setState({isModal:false});
  }

  render()
  {
    // route 의 속성 path 는 대소문자 구문안함
    return(
      <div>
        <Modal isModal={this.state.isModal} closeModal={this.closeModal.bind(this)}/>
        <BrowserRouter>
          <Header/>
          <div className='content'>
          <Routes>
            <Route path='' element={<Main/>} />
            <Route path='Question' element={<Question/>} />
            <Route path='QuestionInsert' element={<QuestionInsert/>} />
            <Route path='QuestionBook' element={<QuestionBook/>}/>
            <Route path='QuestionBookInsert' element={<QuestionBookInsert setModal={this.setModal.bind(this)}/>}/>
          </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }  
}


export default App;