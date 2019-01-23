import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import axios from 'axios';

class Posts extends Component{
    state = {
        posts : [],
        images : [],
        error : false
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response=>{
                const posts = response.data;
                const updatedPosts = posts.map(post=>{
                    return {
                        ...post
                    }
                });
                this.setState({posts : updatedPosts});
            })
            .catch(error=>{
                this.setState({error : true});
            });
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response =>{
                const images =response.data;
                const updatedImages = images.map(image=>{
                    return {
                        ...image
                    }
                });
                this.setState({images : updatedImages});
                //this.setState({posts : [...this.state.posts,this.state.images]})

            });

    }
    render(){
        let posts = <p style={{textAlign : 'center'}}>Network Error</p>
        if(!this.state.error){
           posts  = this.state.posts.map(post =>{
               return(
                   <Post
                        key = {post.id}
                        uImage
                        uName = {post.userId}
                        uHandle = {post.id}
                        postContent = {post.body}
                   />
               )
           }) 
        }
        return(
            <div className='posts'>
                {posts}
            </div>
        )
    }
}

export default Posts;