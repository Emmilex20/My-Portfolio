import React, { useEffect, useState } from 'react'
import BlogPost from './BlogPost';
import "./Blogs.css"

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4); //set post per page number here

    useEffect(() => {
        fetch('blogs.json')
       .then(res => res.json()).then(data => setBlogs(data));
    }, [])

    // pagination logic
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className='blog'>
        <header>
            <h2 className='h2 article-title'>Blogs</h2>
        </header>
        <div className='blog-posts'>
            <ul className='blog-posts-list'>
                {
                    currentPosts.map((post, index) => (
                        <BlogPost key={index} 
                        post={post}/>
                    ))
                }
            </ul>
        </div>
        {/* pagination */}
        <nav>
    <ul className='pagination'>
        {/* Disable 'Previous' button if on the first page */}
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button 
                onClick={() => currentPage > 1 && paginate(currentPage - 1)} 
                className='page-link'>
                Previous
            </button>
        </li>

        {/* Page numbers */}
        {
            Array.from({length: Math.ceil(blogs.length / postsPerPage)}, (_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                    <button onClick={() => paginate(index + 1)} className='page-link'>{index + 1}</button>
                </li>
            ))
        }

        {/* Disable 'Next' button if on the last page */}
        <li className={`page-item ${currentPage === Math.ceil(blogs.length / postsPerPage) ? 'disabled' : ''}`}>
            <button 
                onClick={() => currentPage < Math.ceil(blogs.length / postsPerPage) && paginate(currentPage + 1)} 
                className='page-link'>
                Next
            </button>
        </li>
    </ul>
</nav>

    </section>
  )
}

export default Blogs