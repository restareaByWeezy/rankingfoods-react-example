import styled from "styled-components";

export const StyleBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 500px;
  height: 700px;

  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.1);
  border-radius: 44px;

  .title {
    position: relative;
    width: 292px;
    height: 53px;
    margin: 0;
    padding-left: 64px;
    padding-right: 144px;
    padding-top: 75px;
    padding-bottom: 60px;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 58px;
    letter-spacing: 0.015em;

    color: #000000;
  }
  .food-list {
    display: block;
    margin-bottom: 30px;
    padding: 0;
  }

  .food-input {
    margin-left: 64px;
    width: 32px;
    height: 32px;
  }
  .food-name {
    display: inline-block;
    width: 236px;
    margin-left: 38px;

    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 32px;
    /* identical to box height, or 100% */

    letter-spacing: 0.015em;

    color: #000000;
  }

  .submit-button {
    display: flex;
    position: relative;
    top: 229px;
    margin: 0 auto;
    /* margin-bottom: 54px; */
    justify-content: center;
    align-items: center;
    padding: 8px 16px;

    width: 400px;
    height: 70px;

    background: #000000;
    border-radius: 8px;

    font-size: 32px;
    text-align: center;
    letter-spacing: 0.015em;

    color: #ffffff;
    :hover {
      cursor: pointer;
      background-color: gray;
    }
  }
`;
