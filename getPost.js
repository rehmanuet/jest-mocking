const axios =require( "axios")


 const getPost = function(){

    return axios.get("https://jsonplaceholder.typicode.com/posts").then(res=> res.data)
}



module.exports=getPost