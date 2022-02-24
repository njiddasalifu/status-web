import React from 'react'

import styled from 'styled-components'

interface ThemeProps {
  isActive?: boolean
}

export const StickerIcon = ({ isActive }: ThemeProps) => {
  return (
    <Icon
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={isActive ? 'active' : ''}
        d="M7.56858 13.4863C7.22903 13.2491 6.75712 13.2426 6.46422 13.5354C6.17133 13.8283 6.16876 14.3077 6.49708 14.5603C7.46695 15.3063 8.68155 15.7499 9.99976 15.7499C11.318 15.7499 12.5326 15.3063 13.5024 14.5603C13.8308 14.3077 13.8282 13.8283 13.5353 13.5354C13.2424 13.2426 12.7705 13.2491 12.4309 13.4863C11.742 13.9676 10.9039 14.2499 9.99976 14.2499C9.09565 14.2499 8.25747 13.9676 7.56858 13.4863Z"
      />
      <path
        className={isActive ? 'active' : ''}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.8645 11.6499C19.9401 11.1946 19.8959 10.7435 19.7602 10.3174C19.5838 9.76409 19.253 9.25286 18.8292 8.82907L11.1708 1.17069C10.747 0.746897 10.2358 0.416048 9.68247 0.239716C9.62921 0.222742 9.57555 0.2072 9.52155 0.193144C9.14354 0.0947561 8.7484 0.0692148 8.35001 0.135358C8.28899 0.145488 8.22816 0.156171 8.16753 0.1674C3.51984 1.02813 0 5.10295 0 9.99988C0 15.5227 4.47715 19.9999 10 19.9999C14.8969 19.9999 18.9717 16.48 19.8325 11.8324C19.8437 11.7717 19.8544 11.7109 19.8645 11.6499ZM1.5 9.99988C1.5 6.08625 4.14622 2.78816 7.74701 1.8013C7.87574 1.76602 8 1.8664 8 1.99988C8 7.52272 12.4772 11.9999 18 11.9999C18.1335 11.9999 18.2339 12.1241 18.1986 12.2529C17.2117 15.8537 13.9136 18.4999 10 18.4999C5.30558 18.4999 1.5 14.6943 1.5 9.99988ZM18 10.4999C18.1011 10.4999 18.1641 10.3935 18.1094 10.3085C18.0185 10.1673 17.9054 10.0266 17.7685 9.88973L10.1101 2.23135C9.97328 2.09448 9.83259 1.98135 9.69142 1.89052C9.60642 1.83582 9.5 1.89879 9.5 1.99988C9.5 6.6943 13.3056 10.4999 18 10.4999Z"
      />
    </Icon>
  )
}

const Icon = styled.svg`
  & > path {
    fill: ${({ theme }) => theme.secondary};
  }

  & > path.active {
    fill: ${({ theme }) => theme.tertiary};
  }
`
