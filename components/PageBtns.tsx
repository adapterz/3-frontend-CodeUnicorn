import styled, { css } from "styled-components";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { IPageBtn } from "@/interface/pageBtn";

const Container = styled.div`
  margin: 0px auto;
  display: flex;
  align-items: center;

  svg {
    font-size: 1.5rem;
    color: gray;
    cursor: pointer;
  }
`;

const Page = styled.span<IPageBtn>`
  padding: 6px 8px;
  border-radius: 6px;
  margin: 0px 2px;
  color: #ffffff;
  font-weight: 600;
  color: black;
  background-color: white;
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      color: white;
      background-color: #5729b9;
    `}
`;

function PageBtns({
  currentPage,
  maxPage,
  onSelect,
  onIncresive,
  onDecresive,
}) {
  return (
    <Container>
      <RiArrowLeftSLine onClick={onDecresive} />
      {maxPage.map((page) => (
        <Page
          key={page}
          active={page === currentPage}
          onClick={() => onSelect(page)}
        >
          {page}
        </Page>
      ))}
      <RiArrowRightSLine onClick={onIncresive} />
    </Container>
  );
}

export default PageBtns;
