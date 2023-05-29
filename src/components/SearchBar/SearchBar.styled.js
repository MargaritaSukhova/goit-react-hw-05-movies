import styled from '@emotion/styled';

export const SearchForm = styled.form`
  margin-bottom: 30px;
  width: 400px;
  padding-inline-end: 1em;
  background: #fff;
  position: relative;
  border-radius: 4px;
  & svg {
  display: block;
  color: #111;
  transition: 0.3s cubic-bezier(.4,0,.2,1);
  position: absolute;
  height: 15px;
`;

export const FormLabel = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding-inline-start: calc(1.5em + 2em);
  outline: none;
  background: none;
  border: 0;
  &:focus {
    & ~ .search-icon {
      transform: rotate(80deg) scale(1.3);
    }
  }
  &:focus {
    & ~ .search-icon .SwapOff {
      opacity: 1;
      transform: rotate(-80deg);
      visibility: visible;
      color: #15a986;
    }
  }
  &:focus {
    & ~ .search-icon .SwapOn {
      opacity: 0;
      visibility: visible;
    }
  }
  &:valid {
    & ~ .search-icon {
      transform: scale(1.3) rotate(80deg);
    }
  }
  &:valid {
    & ~ .search-icon .SwapOff {
      opacity: 1;
      visibility: visible;
      color: #15a986;
    }
  }
  &:valid {
    & ~ .search-icon .SwapOn {
      opacity: 0;
      visibility: visible;
    }
  }
  &:valid {
    & ~ .CloseBtn {
      opacity: 1;
      visibility: visible;
      transform: scale(1);
      transition: 0s;
    }
  }
`;

export const SearchIcon = styled.button`
  position: absolute;
  left: 1.5em;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SwapOffIcon = styled.svg`
 transform: rotate(-80deg);
  opacity: 0;
  visibility: hidden;
}
`;

export const CloseBtn = styled.button`
  background: none;
  border: none;
  right: calc(1.5em - 2em);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111;
  padding: 0.1em;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: 0.3s;
  opacity: 0;
  transform: scale(0);
  visibility: hidden;
`;
