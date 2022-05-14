import styled from "styled-components";

export const PaginationWrapper = styled.div`
  
  button {
    margin: 0 5px;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 2px;

    &:hover, &.active {
      color: #1890ff;
      border-color: #1890ff;
    }

    &[disabled] {
      color: #00000040;
      border-color: #d9d9d9;
      cursor: not-allowed;
    }
  }

  .page {
    padding: 0 8px
  }
`