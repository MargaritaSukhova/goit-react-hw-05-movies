import styled from '@emotion/styled';

export const SearchForm = styled.form`
  margin-bottom: 30px;
`;

// export const SearchForm = styled.form`
//   // padding: 1.5em;
//   // rotate: 80deg;
//   // gap: 2em;
//   // icon-change-color: #15a986;
//   // height: 40px;
//   width: 200px;
//   padding-inline-end: 1em;
//   background: #ffffff;
//   position: relative;
//   border-radius: 4px;
// `;

// export const FormLabel = styled.label`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   height: 40px;
// `;

// export const IconWrapper = styled.div`
//   position: absolute;
//   left: 1.5em;
//   transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const SwapOffIcon = styled.svg`
//   display: block;
//   color: #111;
//   transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//   position: absolute;
//   height: 15px;
//   transform: rotate(-80deg);
//   opacity: 0;
//   visibility: hidden;
// `;

// export const SwapOnIcon = styled.svg`
//   display: block;
//   color: #111;
//   transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//   position: absolute;
//   height: 15px;
//   transform: rotate(-80deg);
//   opacity: 0;
//   visibility: hidden;
// `;

// export const FormInput = styled.input`
//   width: 100%;
//   padding-inline-start: calc(1.5em + 2em);
//   outline: none;
//   background: none;
//   border: 0;
//   &:focus & ~ [IconWrapper] {
//     transform: rotate(80deg) scale(1.3);
//   }
//   &: focus & ~[IconWrapper] [SwapOffIcon] {
//     opacity: 1;
//     transform: rotate(-80deg);
//     visibility: visible;
//     color: #15a986;
//   }
//   &: focus & ~[IconWrapper] [SwapOnIcon] {
//     opacity: 0;
//     visibility: visible;
//   }
// `;

// export const CloseButton = styled.button`
//   background: none;
//   border: none;
//   right: calc(1.5em - 2em);
//   box-sizing: border-box;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #111;
//   padding: 0.1em;
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   transition: 0.3s;
//   opacity: 0;
//   transform: scale(0);
//   visibility: hidden;
// `;

// export const CloseIcon = styled.svg`
//   display: block;
//   color: #111;
//   transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//   position: absolute;
//   height: 15px;
// `;

// .form input:valid ~ .icon {
//   transform: scale(1.3) rotate(var(--rotate))
// }

// .form input:valid ~ .icon .swap-off {
//   opacity: 1;
//   visibility: visible;
//   color: var(--icon-change-color);
// }

// .form input:valid ~ .icon .swap-on {
//   opacity: 0;
//   visibility: visible;
// }

// .form input:valid ~ .close-btn {
//   opacity: 1;
//   visibility: visible;
//   transform: scale(1);
//   transition: 0s;
// }
