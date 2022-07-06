import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React, { useState, useEffect } from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  let currentPaginationData = blogs.posts.slice(0, 15);
  const [currentPage, setPage] = useState(1);
  const [pageSize, setPAGE_SIZES] = useState("15");

  const updateRowsPerPage = (SIZES) => {
    parseInt(SIZES);
    setPAGE_SIZES(+SIZES);
  };
  const updatePage = (pageNumber) => {
    setPage(pageNumber);
  };

  const firstIndex = (currentPage - 1) * pageSize;
  const lastIndex = firstIndex + pageSize;
  currentPaginationData = blogs.posts.slice(firstIndex, lastIndex);

  // useEffect(() => {
  //   const firstIndex = (currentPage - 1) * pageSize;
  //         const lastIndex = firstIndex + pageSize;
  //   currentPaginationData = blogs.posts.slice(firstIndex,lastIndex);
  //  },[currentPage]);

  return (
    <div>
      {console.log("pageSize")};{console.log(pageSize)};
      {console.log("totalCount")};{console.log(blogs.posts.length)};
      {console.log("currentPage")};{console.log(currentPage)};
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={pageSize}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
