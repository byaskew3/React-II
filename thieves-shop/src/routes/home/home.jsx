import React from 'react'
import CategoryList from '../../components/CategoryList/CategoryList';

const Home = () => {
    const categories = [
        {
          id: 0,
          title: 'Tops',
          imgUrl: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
        },
        {
          id: 1,
          title: 'Bottoms',
          imgUrl: "https://images.unsplash.com/photo-1634564235572-cd6f37694266?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80"
        },
        {
          id: 2,
          title: 'Shoes',
          imgUrl: "https://images.unsplash.com/photo-1513188732907-5f732b831ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        },
        {
          id: 3,
          title: 'Womens',
          imgUrl: "https://images.unsplash.com/photo-1621835968506-428745015963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80"
        },
        {
          id: 4,
          title: 'Mens',
          imgUrl: "https://images.unsplash.com/photo-1611886658071-b51744fac077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
      ]
      return (
          <CategoryList categories={categories}/>
      );
}

export default Home