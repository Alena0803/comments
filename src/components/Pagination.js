import {useEffect, useState} from 'react';

export default function Pagination (props) { 
    
    const [pages, setPages] = useState([])
    const [lastPage, setLastPage] = useState([])
    
    useEffect(()=>{
        fetch(`https://jordan.ashton.fashion/api/goods/30/comments`)
            .then(res=> res.json())
            .then(res =>{
                setLastPage(res.last_page)
                let pagesForPagination = res.last_page;
                let p = []
                for (let i=pagesForPagination; i>0; i--){ 
                    p.push(i)
                }
                setPages(p)
        })
        
    },[])
   

   function paginationClick (event){ 
    let t = event.target.getAttribute('data-key')
    if (t===1){ 
        props.setClassbutton('hiden');
    }
    else {
        props.setClassbutton('');
    }
    fetch(`https://jordan.ashton.fashion/api/goods/30/comments?page=${t}`)
    .then(res=> res.json())
    .then(res =>{
        props.setComments(res.data.reverse());
    })}
    return(
        <div onClick={paginationClick} >
            {pages.map(item=><button className='page-item text-dark'key={item} data-key={item}>{lastPage +1-item}</button>)}
        </div>
    )
}