function Comment (props){ 
    
    function sendComment (event){ 
        event.preventDefault()
        let t = event.target.elements
        fetch(`https://jordan.ashton.fashion/api/goods/30/comments?name=${t.name.value}&text=${t.text.value}`,{ 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then(response=> response.json())
            .then(response =>{
                console.log(response.data)
  })
        let a= props.countComment
        a++
        props.setCountComment(a)
        console.log(props.countComment)
        props.setClassbutton('')
        props.setCurrentPage(2)
    }

    return(
        <>
            
        <form action="" onSubmit={sendComment}>
            <input type ="text" name ='name' className ="form-control input-name inp-text" placeholder ='Enter your name'/>
            <textarea type ="text"  name ='text' className ="form-control input-name text-form" placeholder ='Comment'/>
            <button className ='btn btn-dark form-control'type ='submit'>Send</button>
        </form>
        </>
    )
}
export default Comment;