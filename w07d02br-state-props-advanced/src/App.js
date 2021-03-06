import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Components/Comment/index';
import CommentList from './Components/CommentList/index';

const commentsData = [
  { 
    id: 1,
    image: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    content: 'This is a great comment!!! ',
    likes: 10,
    dislikes: 1,
  },
  {
    id: 2,
    image: 'https://www.rover.com/blog/wp-content/uploads/2019/05/dog-versus-bumblebee-600x340.jpg',
    content: 'Balanced Comments INCOMING',
    likes: 5,
    dislikes: 5,
  },
  {
    id: 3,
    image: 'https://barkpost.com/wp-content/uploads/2016/04/Derp3.jpg',
    content: 'rawr',
    likes: 0,
    dislikes: 10,
  },
  {
    id: 4,
    image: 'https://static.boredpanda.com/blog/wp-content/uploads/2017/02/cute-derpy-dog-fb.png',
    content: 'I have no idea what im doing ',
    likes: 2,
    dislikes: 1,
  },

]


function App() {
  const [comments, setComments] = useState(commentsData);

  const handleComment = (type, id) => {
    // Find the correct index of the comment that was clicked
    const commentsCopy = [...comments];
    const commentId = commentsCopy.map(singleComment => singleComment.id).indexOf(id);
    commentsCopy[commentId][type]++;
    setComments(commentsCopy);
  }

  return (
    <div>
      <CommentList listOfComments={comments} changeComment={handleComment}/>
    </div>
  );
}

export default App;
