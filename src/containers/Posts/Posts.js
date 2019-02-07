import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import axios from 'axios';
import NewPost from '../NewPost/NewPost';
import Aux from '../../hoc/Aux/Aux';
import './Posts.css';

class Posts extends Component{
    state = {
        posts : [],
        images : [],
        error : false,
    }
    componentDidMount() {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then(response=>{
        //         const posts = response.data;
        //         const updatedPosts = posts.map(post=>{
        //             return {
        //                 ...post
        //             }
        //         });
        //         this.setState({posts : updatedPosts});
        //     })
        //     .catch(error=>{
        //         this.setState({error : true});
        //     });
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response =>{
                const images = response.data.slice(0,4);
                const updatedImages = images.map(image=>{
                    return {
                        ...image
                    }
                })
                this.setState({images : updatedImages});
            })
            .catch(error=>{
                this.setState({error : true});
            });

    }
    render(){
        let posts = <p style={{textAlign : 'center'}}>Network Error</p>
        if(!this.state.error){
           posts  = this.state.images.map(post =>{
               return(
                   <Post
                        key = {post.id}
                        uName = {post.albumId}
                        uHandle = {post.id}
                        //ImageURL = {post.url}
                        postContent = {post.url}
                   />
               )
           }) 
        }
        return(
            <Aux>
                <div className = 'posts'>
                    <div className= 'newpost'>
                        <NewPost onOpen = {this.props.onOpen}/>
                    </div>
                    <div>
                        {posts}
                    </div>
                </div>
            </Aux>
        )
    }
}

export default Posts;