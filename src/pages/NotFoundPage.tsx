import styled from 'styled-components';
function NotFoundPage() {
  return (
    <NotFoundPageWrapper>
      <h1>Page not found 404!</h1>
    </NotFoundPageWrapper>
  );
}

const NotFoundPageWrapper = styled.div`
  min-height: 80vh;
  min-width: 100%;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 1.4rem;
`;

export default NotFoundPage;
