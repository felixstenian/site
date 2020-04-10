import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  max-height: 300%;
  background: linear-gradient(0deg, #0c8589, #02f6fe);

  display: flex;
  justify-content: center;

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 30%;
      border-radius: 50%;

      &:hover {
        border-radius: 20%;
      }
    }

    h1 {
      color: #fff;
    }

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;

      li {
        padding: 10px;

        a {
          color: #fff;
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

          &:hover {
            border-bottom: 2px solid #ae12de;
          }
        }
      }
    }
  }
`;

export const Content = styled.div``;
