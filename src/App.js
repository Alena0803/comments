import { useEffect, useState} from 'react'
import Comment from './components/Comment';
import LoadMore from './components/LoadMore';
import Pagination from './components/Pagination';
import './App.css'; 

function App() {

const [comments,setComments] = useState([]) 
const [data,setData]  = useState() 
const [countComment, setCountComment] = useState(2) 
const [classButton,setClassbutton] = useState('') 
const [currentPage,setCurrentPage] = useState(1); 


useEffect(()=>{

  fetch(`https://jordan.ashton.fashion/api/goods/30/comments`) 
  .then(response=> response.json())
  .then(response =>{
      fetch(response.last_page_url)
      .then(response1=> response1.json())
      .then(response1 =>{
          setComments(response1.data.reverse())
          setData(response1)
          setCurrentPage(response.last_page-1)
        })
  })

},[countComment]) 

  return (
    <div>
       <h2>Комментарии</h2>
        <div className="App container">
            <div>
                  <Comment countComment ={countComment} setCountComment={setCountComment}  setClassbutton= {setClassbutton} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                  <ul className='list'>
                  {comments.map(item => 
                    <li className='listItem' key={item.id}>
                      <div className='commentName'>
                           <p className='name'> From: {item.name} </p>
                      </div>
                      <h6 className='text-comment'> Comment: {item.text}</h6>
                    </li>)}
                </ul>
                <LoadMore data={data} setData={setData} comments={comments} setComments={setComments} setClassbutton= {setClassbutton} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                <Pagination setComments={setComments} setClassbutton= {setClassbutton}/>
            </div>
    </div>
        </div>
  );
}

export default App;
