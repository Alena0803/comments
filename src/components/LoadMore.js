
export default function LoadMore (props){ 

    function LoadMore (){ 
        
        let c = props.currentPage; 
        c--
        props.setCurrentPage(c)
       
        if(props.data.last_page > props.currentPage && props.currentPage > 1 ){
          fetch(`https://jordan.ashton.fashion/api/goods/30/comments?page=${props.currentPage}`)
          .then(response=> response.json())
          .then(response =>{ 
            let newDataRev = response.data.reverse()
            let allcomments =[...props.comments]
            for(let i=0; i<newDataRev.length; i++){ 
                allcomments.push(newDataRev[i])
              }
            props.setComments(allcomments)
            
          })
      }
        else if (props.currentPage === 1){ 
          fetch(`https://jordan.ashton.fashion/api/goods/30/comments?page=${props.currentPage}`)
          .then(response=> response.json())
          .then(response =>{ 
            let newDataRev= response.data.reverse()
            let allcomments =[...props.comments]
            for(let i=0; i < newDataRev.length; i++){ 
                allcomments.push(newDataRev[i])
              }
            props.setComments(allcomments)
        
      })
          props.setClassbutton('hiden')
        }
      
        
    }
    return ( 
        <div className={props.classButton}>
          <button type="button" class="btn btn-dark" onClick={LoadMore}>Load More</button>
        </div>
    )
}