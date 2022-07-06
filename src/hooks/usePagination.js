export const DOTS = "...";

function usePagination(props) {

  let MaxPage;

  MaxPage = Math.ceil(props.totalCount/props.pageSize); 
   
  /*
    Rewrite the logic here to map out the pagination to be displayed

    !!!!!! ATTENTION !!!!!!
    Please replace this comment here with a description of this hook.
    
  */
  return [1, 2, 3, DOTS, MaxPage ];
}

export default usePagination;
