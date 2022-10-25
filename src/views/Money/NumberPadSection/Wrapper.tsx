import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  > .output {
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
    inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }

  > .pad {
    > button {
      font-size: 18px;
      float: left;
      width: 25%;
      height: 64px;
      border: none;

      &.ok {
        height: 128px;
        float: right;
      }

      &.zero {
        width: 50%;
      }

      &:nth-child(1) {
        background: #f8e3bc;
      }

      &:nth-child(2),
      &:nth-child(5) {
        background: #f6dbaa;
      }

      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: #f4d497;
      }

      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: #f2cc85;
      }

      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: #f0c472;
      }

      &:nth-child(12) {
        background: #ecb54d;
      }

      &:nth-child(14) {
        background: #eebc60;
      }
    }
  }
`;
export {Wrapper}